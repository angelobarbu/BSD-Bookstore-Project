package psb.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import psb.project.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Integer> {

}

