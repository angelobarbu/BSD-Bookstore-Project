package psb.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import psb.project.model.Session;

import java.util.Optional;

public interface SessionRepository extends JpaRepository<Session, Integer> {

    Optional<Session> findByToken(String token);
}

