package com.jennieCreation.managemyfinances_backend.account;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountJpaRepository extends JpaRepository<Account, Long> {
	List<Account> findByUsername(String username);	
}
