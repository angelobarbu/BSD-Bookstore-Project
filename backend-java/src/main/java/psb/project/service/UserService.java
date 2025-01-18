package psb.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import psb.project.dto.UserInputDTO;
import psb.project.model.User;
import psb.project.repository.UserRepository;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Optional<User> getUserByEmail(String email, String emailFromToken) {
        if (!email.equals(emailFromToken)) {
            return Optional.empty();
        }
        return userRepository.findByEmail(email);
    }

    public Optional<User> updateUser(String email, UserInputDTO userInputDTO, String emailFromToken) {
        if (!email.equals(emailFromToken)) {
            return Optional.empty();
        }
        return userRepository.findByEmail(email).map(existingUser -> {
            existingUser.setFullName(userInputDTO.fullName());
            existingUser.setPhoneNumber(userInputDTO.phoneNumber());
            existingUser.setBirthdate(userInputDTO.birthdate());
            existingUser.setProfilePicture(userInputDTO.profilePicture());
            if (userInputDTO.password() != null && !userInputDTO.password().isEmpty()) {
                existingUser.setPasswordHash(passwordEncoder.encode(userInputDTO.password()));
            }
            return userRepository.save(existingUser);
        });
    }
}