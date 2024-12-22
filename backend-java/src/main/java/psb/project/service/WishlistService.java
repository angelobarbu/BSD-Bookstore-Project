package psb.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import psb.project.dto.WishlistItemInputDTO;
import psb.project.model.Book;
import psb.project.model.User;
import psb.project.model.Wishlist;
import psb.project.model.WishlistItem;
import psb.project.repository.BookRepository;
import psb.project.repository.UserRepository;
import psb.project.repository.WishlistItemRepository;
import psb.project.repository.WishlistRepository;

import java.util.Optional;

@Service
public class WishlistService {

    private final WishlistRepository wishlistRepository;
    private final WishlistItemRepository wishlistItemRepository;
    private final BookRepository bookRepository;
    private final UserRepository userRepository;

    @Autowired
    public WishlistService(WishlistRepository wishlistRepository, WishlistItemRepository wishlistItemRepository,
                           BookRepository bookRepository, UserRepository userRepository) {
        this.wishlistRepository = wishlistRepository;
        this.wishlistItemRepository = wishlistItemRepository;
        this.bookRepository = bookRepository;
        this.userRepository = userRepository;
    }

    public Optional<Wishlist> getWishlistByEmail(String email) {
        return userRepository.findByEmail(email)
                .flatMap(wishlistRepository::findByUser);
    }

    public WishlistItem addWishlistItem(WishlistItemInputDTO wishlistItemInputDTO, String emailFromToken) {
        User user = userRepository.findByEmail(emailFromToken)
                .orElseThrow(() -> new IllegalArgumentException("User not found for email: " + emailFromToken));

        Wishlist wishlist = wishlistRepository.findByUser(user)
                .orElseGet(() -> {
                    Wishlist newWishlist = new Wishlist();
                    newWishlist.setUser(user);
                    return wishlistRepository.save(newWishlist);
                });

        Book book = bookRepository.findById(wishlistItemInputDTO.bookID())
                .orElseThrow(() -> new IllegalArgumentException("Invalid book ID: " + wishlistItemInputDTO.bookID()));

        WishlistItem wishlistItem = new WishlistItem();
        wishlistItem.setWishlist(wishlist);
        wishlistItem.setBook(book);
        return wishlistItemRepository.save(wishlistItem);
    }

    public void removeWishlistItem(Integer wishlistItemID, String emailFromToken) {
        wishlistItemRepository.findById(wishlistItemID)
                .filter(item -> item.getWishlist().getUser().getEmail().equals(emailFromToken))
                .ifPresent(wishlistItemRepository::delete);
    }
}



