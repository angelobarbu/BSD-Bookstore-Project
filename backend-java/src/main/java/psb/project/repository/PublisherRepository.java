package psb.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import psb.project.model.Publisher;

public interface PublisherRepository extends JpaRepository<Publisher, Integer> {
}
