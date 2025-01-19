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

    public Optional<User> getUserByEmail(String emailFromToken) {
        return userRepository.findByEmail(emailFromToken);
    }

    public Optional<User> updateUser(UserInputDTO userInputDTO, String emailFromToken) {
        return userRepository.findByEmail(emailFromToken).map(existingUser -> {
            existingUser.setFullName(userInputDTO.fullName());
            if (userInputDTO.password() != null && !userInputDTO.password().isEmpty()) {
                existingUser.setPasswordHash(passwordEncoder.encode(userInputDTO.password()));
            }
            return userRepository.save(existingUser);
        });
    }
}