package psb.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import psb.project.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {

}
