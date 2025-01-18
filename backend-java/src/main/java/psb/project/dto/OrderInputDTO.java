package psb.project.dto;

import java.util.List;

public record OrderInputDTO(
        Integer userID,
        Integer addressID,
        String shippingMethod,
        String paymentMethod,
        Double totalAmount,
        List<OrderItemInputDTO> orderItems
) {}
