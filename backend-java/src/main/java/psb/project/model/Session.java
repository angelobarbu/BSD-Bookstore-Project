package psb.project.model;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "Session")
public class Session {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SessionID", nullable = false)
    private int sessionId;

    @Column(name = "UserID", nullable = false)
    private int userId;

    @Column(name = "Token", columnDefinition = "TEXT", nullable = false)
    private String token;

    @Column(name = "ExpiresAt", nullable = false)
    private Timestamp expiresAt;

    public int getSessionId() {
        return sessionId;
    }

    public void setSessionId(int sessionId) {
        this.sessionId = sessionId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Timestamp getExpiresAt() {
        return expiresAt;
    }

    public void setExpiresAt(Timestamp expiresAt) {
        this.expiresAt = expiresAt;
    }
}

