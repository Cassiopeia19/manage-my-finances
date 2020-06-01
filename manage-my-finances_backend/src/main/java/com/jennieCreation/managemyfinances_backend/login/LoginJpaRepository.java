package com.jennieCreation.managemyfinances_backend.login;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginJpaRepository extends JpaRepository<Login, Long> {
	List<Login> findByUsername(String username);
}
