package psb.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import psb.project.model.Wishlist;
import psb.project.model.WishlistItem;
import psb.project.repository.WishlistItemRepository;
import psb.project.repository.WishlistRepository;

@Service
public class WishlistService {

    private final WishlistRepository wishlistRepository;
    private final WishlistItemRepository wishlistItemRepository;

    @Autowired
    public WishlistService(WishlistRepository wishlistRepository, WishlistItemRepository wishlistItemRepository) {
        this.wishlistRepository = wishlistRepository;
        this.wishlistItemRepository = wishlistItemRepository;
    }

    public Wishlist getWishlistByUserID(Integer userID) {
        return wishlistRepository.findByUser_UserID(userID);
    }

    public WishlistItem addWishlistItem(WishlistItem wishlistItem) {
        return wishlistItemRepository.save(wishlistItem);
    }

    public void removeWishlistItem(Integer wishlistItemID) {
        wishlistItemRepository.deleteById(wishlistItemID);
    }
}

