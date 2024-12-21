package psb.project.dto;

public record OrderItemInputDTO(
        Integer bookID,
        Integer quantity,
        Double price
) {}
