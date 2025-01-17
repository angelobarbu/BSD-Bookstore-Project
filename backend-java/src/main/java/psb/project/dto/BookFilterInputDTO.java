package psb.project.dto;

import java.util.List;

public record BookFilterInputDTO(
        List<String> genres,
        List<String> languages,
        List<String> formats,
        List<Integer> years,
        List<Integer> publisherIDs,
        Double minPrice,
        Double maxPrice,
        List<String> collections,
        List<String> authorNames,
        List<String> deliveryTimes,
        Double minRating
) {}
