package com.gentz.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.gentz.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByEmailAndPassword(String email, String password);
}

