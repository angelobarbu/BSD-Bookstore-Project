package psb.project.dto;

public record ReviewInputDTO(
        Integer userID,
        Integer bookID,
        Integer rating,
        String comment) {}
