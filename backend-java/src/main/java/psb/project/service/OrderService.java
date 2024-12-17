package psb.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import psb.project.model.Order;
import psb.project.model.OrderItem;
import psb.project.repository.OrderItemRepository;
import psb.project.repository.OrderRepository;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository, OrderItemRepository orderItemRepository) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
    }

    public Order placeOrder(Order order, List<OrderItem> orderItems) {
        Order savedOrder = orderRepository.save(order);
        orderItems.forEach(item -> {
            item.setOrder(savedOrder);
            orderItemRepository.save(item);
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
