package psb.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import psb.project.dto.WishlistItemInputDTO;
import psb.project.model.Book;
import psb.project.model.Wishlist;
import psb.project.model.WishlistItem;
import psb.project.repository.BookRepository;
import psb.project.repository.WishlistItemRepository;
import psb.project.repository.WishlistRepository;

@Service
public class WishlistService {

    private final WishlistRepository wishlistRepository;
    private final WishlistItemRepository wishlistItemRepository;
    private final BookRepository bookRepository;

    @Autowired
    public WishlistService(WishlistRepository wishlistRepository, WishlistItemRepository wishlistItemRepository, BookRepository bookRepository) {
        this.wishlistRepository = wishlistRepository;
        this.wishlistItemRepository = wishlistItemRepository;
        this.bookRepository = bookRepository;
    }

    public Wishlist getWishlistByUserID(Integer userID) {
        return wishlistRepository.findByUser_UserID(userID);
    }

    public WishlistItem addWishlistItem(WishlistItemInputDTO wishlistItemInputDTO) {
        Book book = bookRepository.findById(wishlistItemInputDTO.bookID())
                .orElseThrow(() -> new IllegalArgumentException("Invalid book ID"));

        Wishlist wishlist = wishlistRepository.findByUser_UserID(wishlistItemInputDTO.userID());
        if (wishlist == null) {
            throw new IllegalArgumentException("Wishlist not found for user ID: " + wishlistItemInputDTO.userID());
        }

        WishlistItem wishlistItem = new WishlistItem();
        wishlistItem.setWishlist(wishlist);
        wishlistItem.setBook(book);
        return wishlistItemRepository.save(wishlistItem);
    }

    public void removeWishlistItem(Integer wishlistItemID) {
        wishlistItemRepository.deleteById(wishlistItemID);
    }
}



