package com.business.santoshenterprises.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Timestamp;
import java.util.Base64;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.business.santoshenterprises.model.User;
import com.business.santoshenterprises.repository.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/add")
    private ResponseEntity<User> addUser(@RequestBody User user) throws URISyntaxException {
        ResponseEntity<User> responseEntity = null;
        User responseBody;
        if (!userRepository.existsUserByUsername(user.getUsername())) {
            user.setLastUpdateTime(new Timestamp(System.currentTimeMillis()));
            user.setPassword(Base64.getEncoder().withoutPadding().encodeToString(user.getPassword().getBytes()));
            responseBody = userRepository.save(user);
            responseEntity = ResponseEntity.created(new URI("/user/" + user.getId())).body(responseBody);
            System.out.println("Response Body: " + responseBody);
        } else {
            responseEntity = ResponseEntity.status(HttpStatus.ALREADY_REPORTED).build();
        }

        return responseEntity;
    }
}
