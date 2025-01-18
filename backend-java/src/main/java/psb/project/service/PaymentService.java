package psb.project.service;

import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import psb.project.model.Payment;
import psb.project.model.User;
import psb.project.model.Order;
import psb.project.repository.PaymentRepository;
import psb.project.repository.UserRepository;
import psb.project.repository.OrderRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PaymentService {

    @Value("${your.domain}")
    private String yourDomain;

    private final PaymentRepository paymentRepository;
    private final UserRepository userRepository;
    private final OrderRepository orderRepository;

    public PaymentService(PaymentRepository paymentRepository, UserRepository userRepository, OrderRepository orderRepository) {
        this.paymentRepository = paymentRepository;
        this.userRepository = userRepository;
        this.orderRepository = orderRepository;
    }

    public Map<String, Object> createCheckoutSession(Double amount, String currency, Integer userId, Integer orderId) {
        try {
            if (currency.equalsIgnoreCase("lei")) {
                currency = "ron";
            }

            // Validare utilizator și comandă
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new IllegalArgumentException("Utilizatorul cu ID-ul specificat nu există."));
            Order order = orderRepository.findById(orderId)
                    .orElseThrow(() -> new IllegalArgumentException("Comanda cu ID-ul specificat nu există."));

            // Creare sesiune Stripe
            SessionCreateParams params = SessionCreateParams.builder()
                    .setMode(SessionCreateParams.Mode.PAYMENT)
                    .addLineItem(SessionCreateParams.LineItem.builder()
                            .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                                    .setCurrency(currency)
                                    .setProductData(SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                            .setName("Achiziție comandă")
                                            .build())
                                    .setUnitAmount((long) (amount * 100))
                                    .build())
                            .setQuantity(1L)
                            .build())
                    .setSuccessUrl(yourDomain + "/success.html")
                    .setCancelUrl(yourDomain + "/cancel.html")
                    .build();

            Session session = Session.create(params);

            // Salvare plată în baza de date
            Payment payment = new Payment();
            payment.setUser(user);
            payment.setOrder(order);
            payment.setAmount(amount);
            payment.setCurrency(currency);
            payment.setStatus("pending");
            payment.setPaymentIntentId(session.getPaymentIntent());
            payment.setSessionId(session.getId());
            paymentRepository.save(payment);

            // Răspuns către controller
            Map<String, Object> response = new HashMap<>();
            response.put("checkout_url", session.getUrl());
            response.put("session_id", session.getId());
            return response;

        } catch (StripeException e) {
            throw new RuntimeException("Eroare la crearea sesiunii de plată: " + e.getMessage());
        }
    }
}
