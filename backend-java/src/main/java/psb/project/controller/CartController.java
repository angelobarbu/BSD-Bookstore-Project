package psb.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import psb.project.dto.CartItemInputDTO;
import psb.project.model.Cart;
import psb.project.model.CartItem;
import psb.project.security.JwtTokenUtil;
import psb.project.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {

    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping
    public ResponseEntity<Cart> getCart(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        String emailFromToken = JwtTokenUtil.getEmailFromToken(token);

        return cartService.getCartByEmail(emailFromToken)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(403).build());
    }

    @PostMapping("/add")
    public ResponseEntity<CartItem> addCartItem(
            @RequestBody CartItemInputDTO cartItemInputDTO,
            @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        String emailFromToken = JwtTokenUtil.getEmailFromToken(token);

        return ResponseEntity.ok(cartService.addCartItem(cartItemInputDTO, emailFromToken));
    }

    @PutMapping("/update/{cartItemID}")
    public ResponseEntity<CartItem> updateCartItem(
            @PathVariable Integer cartItemID,
            @RequestParam Integer quantity,
            @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        String emailFromToken = JwtTokenUtil.getEmailFromToken(token);

        return cartService.updateCartItem(cartItemID, quantity, emailFromToken)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(403).build());
    }

    @DeleteMapping("/remove/{cartItemID}")
    public ResponseEntity<Void> removeCartItem(
            @PathVariable Integer cartItemID,
            @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        String emailFromToken = JwtTokenUtil.getEmailFromToken(token);

        cartService.removeCartItem(cartItemID, emailFromToken);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/total")
    public ResponseEntity<Double> calculateCartTotal(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        String emailFromToken = JwtTokenUtil.getEmailFromToken(token);

        return ResponseEntity.ok(cartService.calculateCartTotal(emailFromToken));
    }

    @DeleteMapping("/clear")
    public ResponseEntity<Void> clearCart(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        String emailFromToken = JwtTokenUtil.getEmailFromToken(token);

        cartService.clearCart(emailFromToken);
        return ResponseEntity.noContent().build();
    }
}

