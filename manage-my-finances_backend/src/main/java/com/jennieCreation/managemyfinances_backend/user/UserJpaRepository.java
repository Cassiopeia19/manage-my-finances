package com.jennieCreation.managemyfinances_backend.user;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserJpaRepository extends JpaRepository<User, Long> {
	List<User> findByUsername(String username);
}
