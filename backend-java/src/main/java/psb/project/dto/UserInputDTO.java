package psb.project.dto;

import java.time.LocalDate;

public record UserInputDTO(
        String fullName,
        String email,
        String password
) {}

