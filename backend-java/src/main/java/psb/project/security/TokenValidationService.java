package psb.project.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import psb.project.repository.SessionRepository;

import java.time.LocalDateTime;

@Service
public class TokenValidationService {

    private final SessionRepository sessionRepository;

    @Autowired
    public TokenValidationService(SessionRepository sessionRepository) {
        this.sessionRepository = sessionRepository;
    }

    public boolean isTokenValid(String token) {
        return sessionRepository.findByToken(token)
                .map(session -> session.getExpiresAt().toLocalDateTime().isAfter(LocalDateTime.now()))
                .orElse(false);
    }
}
