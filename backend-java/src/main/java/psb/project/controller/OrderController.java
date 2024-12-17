package psb.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import psb.project.dto.OrderRequest;
import psb.project.model.Order;
import psb.project.model.OrderItem;
import psb.project.service.OrderService;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/place")
    public ResponseEntity<Order> placeOrder(@RequestBody OrderRequest request) {
        Order order = request.getOrder();
        List<OrderItem> orderItems = request.getOrderItems();
        return ResponseEntity.ok(orderService.placeOrder(order, orderItems));
    }

    @GetMapping("/user/{userID}")
    public ResponseEntity<List<Order>> getOrdersByUser(@PathVariable Integer userID) {
        return ResponseEntity.ok(orderService.getOrdersByUserID(userID));
    }

    @GetMapping("/{orderID}")
    public ResponseEntity<Order> getOrderById(@PathVariable Integer orderID) {
        return orderService.getOrderById(orderID)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/update-status/{orderID}")
    public ResponseEntity<Order> updateOrderStatus(@PathVariable Integer orderID, @RequestParam String status) {
        return orderService.updateOrderStatus(orderID, status)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
