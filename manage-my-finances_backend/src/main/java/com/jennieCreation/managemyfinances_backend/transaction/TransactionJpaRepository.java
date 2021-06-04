package com.jennieCreation.managemyfinances_backend.transaction;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionJpaRepository extends JpaRepository<Transaction, Long> {
	List<Transaction> findByUsername(String username);
}
