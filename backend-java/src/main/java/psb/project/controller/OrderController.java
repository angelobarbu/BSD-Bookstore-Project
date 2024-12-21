package psb.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import psb.project.dto.OrderInputDTO;
import psb.project.model.Order;
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
    public ResponseEntity<Order> placeOrder(@RequestBody OrderInputDTO orderInputDTO) {
        return ResponseEntity.ok(orderService.placeOrder(orderInputDTO));
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
