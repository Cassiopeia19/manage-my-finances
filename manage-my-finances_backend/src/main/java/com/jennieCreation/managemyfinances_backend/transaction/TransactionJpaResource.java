package com.jennieCreation.managemyfinances_backend.transaction;

import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TransactionJpaResource {

	@Autowired
	private TransactionService transactionService;
	
	@Autowired
	private TransactionJpaRepository transactionJpaRepository;

	@GetMapping("/jpa/users/{username}/transactions")
	public List<Transaction> getAllTransactions(@PathVariable String username) {
		return transactionJpaRepository.findByUsername(username);
	}
	
	@GetMapping("/jpa/users/{username}/transactions/{id}")
	public Transaction getTransaction(@PathVariable String username, @PathVariable long id) {
		return transactionJpaRepository.findById(id).get();
	}

	// DELETE /users/{username}/transactions/{id}
	@DeleteMapping("/jpa/users/{username}/transactions/{id}")
	public ResponseEntity<Void> deleteTransaction(@PathVariable String username, @PathVariable long id) {

		transactionJpaRepository.deleteById(id);

			return ResponseEntity.noContent().build();
	}
	
	//Edit/Update a Transaction
		//PUT /users/{username}/transactions/{id}
		@PutMapping("/jpa/users/{username}/transactions/{id}")
		public ResponseEntity<Transaction> updateTransaction(
				@PathVariable String username,
				@PathVariable long id, @RequestBody Transaction transaction){
			
			transaction.setUsername(username);
			
			Transaction transactionUpdated = transactionJpaRepository.save(transaction);
			
			return new ResponseEntity<Transaction>(transaction, HttpStatus.OK);
		}
			
	@PostMapping("/jpa/users/{username}/transactions")
	public ResponseEntity<Void> createTransaction (
			@PathVariable String username, @RequestBody Transaction transaction){
		
		transaction.setUsername(username);
		
		Transaction createdTransaction = transactionJpaRepository.save(transaction);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdTransaction.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}	
}