package psb.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import psb.project.model.Order;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {

    List<Order> findByUser_UserID(Integer userID);
}
