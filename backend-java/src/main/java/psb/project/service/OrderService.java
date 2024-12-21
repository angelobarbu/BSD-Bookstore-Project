package psb.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import psb.project.dto.OrderInputDTO;
import psb.project.model.*;
import psb.project.repository.*;

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

    public Order placeOrder(OrderInputDTO orderInputDTO) {
        User user = userRepository.findById(orderInputDTO.userID())
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));
        Address address = addressRepository.findById(orderInputDTO.addressID())
                .orElseThrow(() -> new IllegalArgumentException("Invalid address ID"));

        Order order = new Order();
        order.setUser(user);
        order.setAddress(address);
        order.setShippingMethod(orderInputDTO.shippingMethod());
        order.setPaymentMethod(orderInputDTO.paymentMethod());
        order.setTotalAmount(orderInputDTO.totalAmount());
        Order savedOrder = orderRepository.save(order);

        orderInputDTO.orderItems().forEach(itemDTO -> {
            Book book = bookRepository.findById(itemDTO.bookID())
                    .orElseThrow(() -> new IllegalArgumentException("Invalid book ID"));
            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(savedOrder);
            orderItem.setBook(book);
            orderItem.setQuantity(itemDTO.quantity());
            orderItem.setPrice(itemDTO.price());
            orderItemRepository.save(orderItem);
        });

        return savedOrder;
    }

    public List<Order> getOrdersByUserID(Integer userID) {
        return orderRepository.findByUser_UserID(userID);
    }

    public Optional<Order> getOrderById(Integer orderID) {
        return orderRepository.findById(orderID);
    }

    public Optional<Order> updateOrderStatus(Integer orderID, String status) {
        return orderRepository.findById(orderID).map(order -> {
            order.setOrderStatus(status);
            return orderRepository.save(order);
        });
    }
}


