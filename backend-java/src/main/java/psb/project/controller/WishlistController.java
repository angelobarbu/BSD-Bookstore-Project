package psb.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import psb.project.dto.WishlistItemInputDTO;
import psb.project.model.Wishlist;
import psb.project.model.WishlistItem;
import psb.project.security.JwtTokenUtil;
import psb.project.service.WishlistService;

@RestController
@RequestMapping("/wishlist")
public class WishlistController {

    private final WishlistService wishlistService;

    @Autowired
    public WishlistController(WishlistService wishlistService) {
        this.wishlistService = wishlistService;
    }

    @GetMapping
    public ResponseEntity<Wishlist> getWishlist(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        String emailFromToken = JwtTokenUtil.getEmailFromToken(token);

        return wishlistService.getWishlistByEmail(emailFromToken)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(403).build());
    }

    @PostMapping("/add")
    public ResponseEntity<WishlistItem> addWishlistItem(
            @RequestBody WishlistItemInputDTO wishlistItemInputDTO,
            @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        String emailFromToken = JwtTokenUtil.getEmailFromToken(token);

        WishlistItem wishlistItem = wishlistService.addWishlistItem(wishlistItemInputDTO, emailFromToken);
        return ResponseEntity.ok(wishlistItem);
    }

    @DeleteMapping("/remove/{wishlistItemID}")
    public ResponseEntity<Void> removeWishlistItem(
            @PathVariable Integer wishlistItemID,
            @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        String emailFromToken = JwtTokenUtil.getEmailFromToken(token);

        wishlistService.removeWishlistItem(wishlistItemID, emailFromToken);
        return ResponseEntity.noContent().build();
    }
}

