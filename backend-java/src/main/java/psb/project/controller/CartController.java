package psb.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import psb.project.model.Cart;
import psb.project.model.CartItem;
import psb.project.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {

    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("/{userID}")
    public ResponseEntity<Cart> getCartByUserID(@PathVariable Integer userID) {
        return ResponseEntity.ok(cartService.getCartByUserID(userID));
    }

    @PostMapping("/add")
    public ResponseEntity<CartItem> addCartItem(@RequestBody CartItem cartItem) {
        return ResponseEntity.ok(cartService.addCartItem(cartItem));
    }

    @PutMapping("/update/{cartItemID}")
    public ResponseEntity<CartItem> updateCartItem(@PathVariable Integer cartItemID, @RequestParam Integer quantity) {
        return cartService.updateCartItem(cartItemID, quantity)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/remove/{cartItemID}")
    public ResponseEntity<Void> removeCartItem(@PathVariable Integer cartItemID) {
        cartService.removeCartItem(cartItemID);
        return ResponseEntity.noContent().build();
    }
}
