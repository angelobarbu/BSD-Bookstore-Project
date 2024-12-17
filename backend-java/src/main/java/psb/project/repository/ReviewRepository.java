package psb.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import psb.project.model.Review;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

    List<Review> findByBook_BookID(Integer bookID);
}

