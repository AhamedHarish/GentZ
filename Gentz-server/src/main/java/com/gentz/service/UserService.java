package com.gentz.service;

import com.gentz.entity.User;
import com.gentz.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Save user without hashing
    public User saveUser(User user) {
        return userRepository.save(user); 
    }

    // Check Login
    public Optional<User> login(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }
}



