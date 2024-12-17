package psb.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import psb.project.model.WishlistItem;

public interface WishlistItemRepository extends JpaRepository<WishlistItem, Integer> {
}
