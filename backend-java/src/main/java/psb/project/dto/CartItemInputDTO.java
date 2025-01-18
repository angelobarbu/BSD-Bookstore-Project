package psb.project.dto;

public record CartItemInputDTO(
        Integer userID,
        Integer bookID,
        Integer quantity
) {}