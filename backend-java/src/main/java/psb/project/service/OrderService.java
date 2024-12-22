package psb.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import psb.project.dto.OrderInputDTO;
import psb.project.dto.OrderItemInputDTO;
import psb.project.model.*;
import psb.project.repository.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final UserRepository userRepository;
    private final AddressRepository addressRepository;
    private final BookRepository bookRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository, OrderItemRepository orderItemRepository,
                        UserRepository userRepository, AddressRepository addressRepository,
                        BookRepository bookRepository) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        this.userRepository = userRepository;
        this.addressRepository = addressRepository;
        this.bookRepository = bookRepository;
    }

    public Order placeOrder(OrderInputDTO orderInputDTO, String emailFromToken) {
        User user = userRepository.findByEmail(emailFromToken)
                .orElseThrow(() -> new IllegalArgumentException("User not found for email: " + emailFromToken));
        Address address = addressRepository.findById(orderInputDTO.addressID())
                .orElseThrow(() -> new IllegalArgumentException("Invalid address ID"));

        Order order = new Order();
        order.setUser(user);
        order.setAddress(address);
        order.setShippingMethod(orderInputDTO.shippingMethod());
        order.setPaymentMethod(orderInputDTO.paymentMethod());
        order.setTotalAmount(orderInputDTO.totalAmount());

        List<OrderItem> orderItems = new ArrayList<>();
        for (OrderItemInputDTO itemDTO : orderInputDTO.orderItems()) {
            Book book = bookRepository.findById(itemDTO.bookID())
                    .orElseThrow(() -> new IllegalArgumentException("Invalid book ID: " + itemDTO.bookID()));

            if (book.getStockQuantity() < itemDTO.quantity()) {
                throw new IllegalArgumentException("Insufficient stock for book: " + book.getTitle());
            }

            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(order);
            orderItem.setBook(book);
            orderItem.setQuantity(itemDTO.quantity());
            orderItem.setPrice(itemDTO.price());
            orderItems.add(orderItem);

            book.setStockQuantity(book.getStockQuantity() - itemDTO.quantity());
            bookRepository.save(book);
        }

        Order savedOrder = orderRepository.save(order);
        orderItemRepository.saveAll(orderItems);

        return savedOrder;
    }

    public List<Order> getOrdersByEmail(String emailFromToken) {
        return orderRepository.findByUser_Email(emailFromToken);
    }

    public Optional<Order> getOrderById(Integer orderID, String emailFromToken) {
        return orderRepository.findById(orderID)
                .filter(order -> order.getUser().getEmail().equals(emailFromToken));
    }

    public Optional<Order> updateOrderStatus(Integer orderID, String status, String emailFromToken) {
        return orderRepository.findById(orderID)
                .filter(order -> order.getUser().getEmail().equals(emailFromToken))
                .map(order -> {
                    order.setOrderStatus(status);
                    return orderRepository.save(order);
                });
    }
}


