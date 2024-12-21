package psb.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import psb.project.dto.UserInputDTO;
import psb.project.model.User;
import psb.project.repository.UserRepository;

import java.util.List;
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

    public Optional<User> getUserById(Integer id) {
        return userRepository.findById(id);
    }

    public Optional<User> updateUser(Integer id, UserInputDTO userInputDTO) {
        return userRepository.findById(id).map(existingUser -> {
            existingUser.setFullName(userInputDTO.fullName());
            existingUser.setEmail(userInputDTO.email());
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
