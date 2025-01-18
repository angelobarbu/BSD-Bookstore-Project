package psb.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import psb.project.model.Payment;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

    // Metodă pentru a găsi plățile unui utilizator specific
    List<Payment> findByUser_UserID(Long userId);

    // Metodă pentru a găsi plăți în funcție de status
    List<Payment> findByStatus(String status);

    // Metodă pentru a găsi o plată pe baza ID-ului sesiunii Stripe
    Payment findBySessionId(String sessionId);
}
