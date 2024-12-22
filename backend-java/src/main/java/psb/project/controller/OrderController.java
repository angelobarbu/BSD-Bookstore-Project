package psb.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import psb.project.dto.OrderInputDTO;
import psb.project.model.Order;
import psb.project.security.JwtTokenUtil;
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
    public ResponseEntity<Order> placeOrder(
            @RequestBody OrderInputDTO orderInputDTO,
            @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        String emailFromToken = JwtTokenUtil.getEmailFromToken(token);

        return ResponseEntity.ok(orderService.placeOrder(orderInputDTO, emailFromToken));
    }

    @GetMapping
    public ResponseEntity<List<Order>> getOrders(
            @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        String emailFromToken = JwtTokenUtil.getEmailFromToken(token);

        return ResponseEntity.ok(orderService.getOrdersByEmail(emailFromToken));
    }

    @GetMapping("/{orderID}")
    public ResponseEntity<Order> getOrderById(
            @PathVariable Integer orderID,
            @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        String emailFromToken = JwtTokenUtil.getEmailFromToken(token);

        return orderService.getOrderById(orderID, emailFromToken)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(403).build());
    }

    @PutMapping("/update-status/{orderID}")
    public ResponseEntity<Order> updateOrderStatus(
            @PathVariable Integer orderID,
            @RequestParam String status,
            @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        String emailFromToken = JwtTokenUtil.getEmailFromToken(token);

        return orderService.updateOrderStatus(orderID, status, emailFromToken)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(403).build());
    }
}
