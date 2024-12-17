package psb.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import psb.project.model.Wishlist;
import psb.project.model.WishlistItem;
import psb.project.service.WishlistService;

@RestController
@RequestMapping("/wishlist")
public class WishlistController {

    private final WishlistService wishlistService;

    @Autowired
    public WishlistController(WishlistService wishlistService) {
        this.wishlistService = wishlistService;
    }

    @GetMapping("/{userID}")
    public ResponseEntity<Wishlist> getWishlistByUserID(@PathVariable Integer userID) {
        return ResponseEntity.ok(wishlistService.getWishlistByUserID(userID));
    }

    @PostMapping("/add")
    public ResponseEntity<WishlistItem> addWishlistItem(@RequestBody WishlistItem wishlistItem) {
        return ResponseEntity.ok(wishlistService.addWishlistItem(wishlistItem));
    }

    @DeleteMapping("/remove/{wishlistItemID}")
    public ResponseEntity<Void> removeWishlistItem(@PathVariable Integer wishlistItemID) {
        wishlistService.removeWishlistItem(wishlistItemID);
        return ResponseEntity.noContent().build();
    }
}

