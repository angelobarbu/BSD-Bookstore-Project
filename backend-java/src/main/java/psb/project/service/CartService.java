package psb.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import psb.project.model.Cart;
import psb.project.model.CartItem;
import psb.project.repository.CartItemRepository;
import psb.project.repository.CartRepository;

import java.util.Optional;

@Service
public class CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;

    @Autowired
    public CartService(CartRepository cartRepository, CartItemRepository cartItemRepository) {
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
    }

    public Cart getCartByUserID(Integer userID) {
        return cartRepository.findByUser_UserID(userID);
    }

    public CartItem addCartItem(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    public Optional<CartItem> updateCartItem(Integer cartItemID, Integer quantity) {
        return cartItemRepository.findById(cartItemID).map(item -> {
            item.setQuantity(quantity);
            return cartItemRepository.save(item);
        });
    }

    public void removeCartItem(Integer cartItemID) {
        cartItemRepository.deleteById(cartItemID);
    }
}

