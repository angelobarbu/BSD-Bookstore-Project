package psb.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import psb.project.model.Order;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Integer> {

    List<Order> findByUser_Email(String email);
    Optional<Order> findByOrderIDAndUser_Email(Integer orderID, String email);
}
