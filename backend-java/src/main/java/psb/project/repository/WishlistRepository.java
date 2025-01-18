package psb.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import psb.project.model.User;
import psb.project.model.Wishlist;

import java.util.Optional;

public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {

    Optional<Wishlist> findByUser(User user);
    Optional<Wishlist> findByUser_Email(String email);
}


