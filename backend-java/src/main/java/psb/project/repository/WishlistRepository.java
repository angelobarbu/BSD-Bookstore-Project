package psb.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import psb.project.model.Wishlist;

public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {

    Wishlist findByUser_UserID(Integer userID);
}

