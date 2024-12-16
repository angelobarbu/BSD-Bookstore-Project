package psb.project.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDate;

@Entity
public class NewsletterSubscription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer subscriptionID;

    @NotNull
    @Size(max = 255)
    private String email;

    private LocalDate subscribedAt;

    @ManyToOne
    @JoinColumn(name = "userID", nullable = false)
    private User user;

    public Integer getSubscriptionID() {
        return subscriptionID;
    }

    public void setSubscriptionID(Integer subscriptionID) {
        this.subscriptionID = subscriptionID;
    }

    public @Size(max = 255) String getEmail() {
        return email;
    }

    public void setEmail(@Size(max = 255) String email) {
        this.email = email;
    }

    public LocalDate getSubscribedAt() {
        return subscribedAt;
    }

    public void setSubscribedAt(LocalDate subscribedAt) {
        this.subscribedAt = subscribedAt;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
