package psb.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import psb.project.dto.UserInputDTO;
import psb.project.model.User;
import psb.project.security.JwtTokenUtil;
import psb.project.service.UserService;

@RestController
@RequestMapping("users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{email}")
    public ResponseEntity<User> getUserByEmail(
            @PathVariable String email,
            @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        String emailFromToken = JwtTokenUtil.getEmailFromToken(token);

        return userService.getUserByEmail(email, emailFromToken)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(403).build());
    }

    @PutMapping("/{email}")
    public ResponseEntity<User> updateUser(
            @PathVariable String email,
            @RequestBody UserInputDTO userInputDTO,
            @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        String emailFromToken = JwtTokenUtil.getEmailFromToken(token);

        return userService.updateUser(email, userInputDTO, emailFromToken)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(403).build());
    }
}


