package psb.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import psb.project.model.Cart;
import psb.project.model.User;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Integer> {

    Optional<Cart> findByUser(User user);
    Optional<Cart> findByUser_Email(String email);
}

