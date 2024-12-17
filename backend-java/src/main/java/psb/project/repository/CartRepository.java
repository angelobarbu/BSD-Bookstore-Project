package psb.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import psb.project.model.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer> {

    Cart findByUser_UserID(Integer userID);
}
