package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3001")
public class AuthController {

    @Autowired
    private UserRepository userRepo;

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        if (userRepo.findByEmail(user.getEmail()) != null) {
            throw new RuntimeException("User already exists");
        }
        return userRepo.save(user);
    }
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }
    @PostMapping("/login")
    public User login(@RequestBody User user) {
        User existing = userRepo.findByEmail(user.getEmail());

        if (existing != null && existing.getPassword().equals(user.getPassword())) {
            return existing;
        }
        throw new RuntimeException("Invalid credentials");
    }
}