package psb.project.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import psb.project.dto.PaymentsInputDTO;
import psb.project.dto.PaymentsOutputDTO;
import psb.project.service.PaymentService;

import java.util.Map;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/checkout")
    public ResponseEntity<PaymentsOutputDTO> createCheckoutSession(@RequestBody PaymentsInputDTO request) {
        Map<String, Object> response = paymentService.createCheckoutSession(
                request.getAmount(),
                request.getCurrency(),
                request.getUserId(),
                request.getOrderId()
        );

        return ResponseEntity.ok(new PaymentsOutputDTO(
                response.get("checkout_url").toString(),
                response.get("session_id").toString()
        ));
    }
}
