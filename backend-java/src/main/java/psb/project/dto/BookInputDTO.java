package psb.project.dto;

public record BookInputDTO(
        String title,
        Double price,
        Double discountPercentage,
        Integer yearPublished,
        String language,
        String format,
        String isbn,
        Integer stockQuantity,
        String description,
        String coverImageURL,
        Integer publisherID,
        String genre,
        String collection,
        String deliveryTime,
        Integer numberOfPages
) {}
