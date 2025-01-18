package psb.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import psb.project.dto.CartItemInputDTO;
import psb.project.model.Book;
import psb.project.model.Cart;
import psb.project.model.CartItem;
import psb.project.model.User;
import psb.project.repository.BookRepository;
import psb.project.repository.CartItemRepository;
import psb.project.repository.CartRepository;
import psb.project.repository.UserRepository;

import java.util.Optional;

@Service
public class CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final BookRepository bookRepository;
    private final UserRepository userRepository;

    @Autowired
    public CartService(CartRepository cartRepository, CartItemRepository cartItemRepository, BookRepository bookRepository, UserRepository userRepository) {
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
        this.bookRepository = bookRepository;
        this.userRepository = userRepository;
    }

    public Optional<Cart> getCartByEmail(String emailFromToken) {
        return userRepository.findByEmail(emailFromToken)
                .flatMap(cartRepository::findByUser);
    }

    public CartItem addCartItem(CartItemInputDTO cartItemInputDTO, String emailFromToken) {
        User user = userRepository.findByEmail(emailFromToken)
                .orElseThrow(() -> new IllegalArgumentException("User not found for email: " + emailFromToken));

        Cart cart = cartRepository.findByUser(user)
                .orElseGet(() -> {
                    Cart newCart = new Cart();
                    newCart.setUser(user);
                    return cartRepository.save(newCart);
                });

        Book book = bookRepository.findById(cartItemInputDTO.bookID())
                .orElseThrow(() -> new IllegalArgumentException("Invalid book ID: " + cartItemInputDTO.bookID()));

        CartItem cartItem = new CartItem();
        cartItem.setCart(cart);
        cartItem.setBook(book);
        cartItem.setQuantity(cartItemInputDTO.quantity());
        return cartItemRepository.save(cartItem);
    }

    public Optional<CartItem> updateCartItem(Integer cartItemID, Integer quantity, String emailFromToken) {
        return cartItemRepository.findById(cartItemID)
                .filter(item -> item.getCart().getUser().getEmail().equals(emailFromToken))
                .map(item -> {
                    item.setQuantity(quantity);
                    return cartItemRepository.save(item);
                });
    }

    public void removeCartItem(Integer cartItemID, String emailFromToken) {
        cartItemRepository.findById(cartItemID)
                .filter(item -> item.getCart().getUser().getEmail().equals(emailFromToken))
                .ifPresent(cartItemRepository::delete);
    }

    public Double calculateCartTotal(String emailFromToken) {
        Cart cart = cartRepository.findByUser_Email(emailFromToken)
                .orElseThrow(() -> new IllegalArgumentException("Cart not found for user with email: " + emailFromToken));

        return cart.getCartItems().stream()
                .mapToDouble(item -> item.getBook().getPrice() * item.getQuantity())
                .sum();
    }

    public void clearCart(String emailFromToken) {
        Cart cart = cartRepository.findByUser_Email(emailFromToken)
                .orElseThrow(() -> new IllegalArgumentException("Cart not found for user with email: " + emailFromToken));

        cartItemRepository.deleteAll(cart.getCartItems());
    }
}





