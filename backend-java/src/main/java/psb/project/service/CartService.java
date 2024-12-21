package psb.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import psb.project.dto.CartItemInputDTO;
import psb.project.model.Book;
import psb.project.model.Cart;
import psb.project.model.CartItem;
import psb.project.repository.BookRepository;
import psb.project.repository.CartItemRepository;
import psb.project.repository.CartRepository;

import java.util.Optional;

@Service
public class CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final BookRepository bookRepository;

    @Autowired
    public CartService(CartRepository cartRepository, CartItemRepository cartItemRepository, BookRepository bookRepository) {
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
        this.bookRepository = bookRepository;
    }

    public Cart getCartByUserID(Integer userID) {
        return cartRepository.findByUser_UserID(userID);
    }

    public CartItem addCartItem(CartItemInputDTO cartItemInputDTO) {
        Cart cart = cartRepository.findByUser_UserID(cartItemInputDTO.userID());
        if (cart == null) {
            throw new IllegalArgumentException("Cart not found for user ID: " + cartItemInputDTO.userID());
        }

        Book book = bookRepository.findById(cartItemInputDTO.bookID())
                .orElseThrow(() -> new IllegalArgumentException("Invalid book ID: " + cartItemInputDTO.bookID()));

        CartItem cartItem = new CartItem();
        cartItem.setCart(cart);
        cartItem.setBook(book);
        cartItem.setQuantity(cartItemInputDTO.quantity());
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

    public Double calculateCartTotal(Integer userID) {
        Cart cart = cartRepository.findByUser_UserID(userID);
        if (cart == null) {
            throw new IllegalArgumentException("Cart not found for user ID: " + userID);
        }

        return cart.getCartItems().stream()
                .mapToDouble(item -> item.getBook().getPrice() * item.getQuantity())
                .sum();
    }

    public void clearCart(Integer userID) {
        Cart cart = cartRepository.findByUser_UserID(userID);
        if (cart == null) {
            throw new IllegalArgumentException("Cart not found for user ID: " + userID);
        }

        cartItemRepository.deleteAll(cart.getCartItems());
    }
}





