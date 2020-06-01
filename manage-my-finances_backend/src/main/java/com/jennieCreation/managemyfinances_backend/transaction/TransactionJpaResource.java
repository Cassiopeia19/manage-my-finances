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

import com.jennieCreation.managemyfinances_backend.account.Account;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TransactionJpaResource {

	@Autowired
	private TransactionService transactionService;
	
	@GetMapping("/users/{username}/transactions")
	public List<Transaction> getAllTransactions(@PathVariable String username) {
		return transactionService.findAll();
	}
	
	@GetMapping("/users/{username}/transactions/{transactionId}")
	public Transaction getTransaction(@PathVariable String username, @PathVariable long transactionId) {
		return transactionService.findById(transactionId);
	}
	
	// DELETE /users/{username}/transactions/{transactionId}
		@DeleteMapping("/users/{username}/transactions/{transactionId}")
		public ResponseEntity<Void> deleteTransaction(@PathVariable String username, @PathVariable long transactionId) {

			Transaction transaction = transactionService.deleteById(transactionId);

			if (transaction != null) {
				return ResponseEntity.noContent().build();
			}

			return ResponseEntity.notFound().build();
		}
		
		//Edit/Update a transaction
		@PutMapping("/users/{username}/transactions/{transactionId}")
		public ResponseEntity<Transaction> updateTransaction(
				@PathVariable String username,
				@PathVariable long transactionId, @RequestBody Transaction transaction){
			
			transactionService.save(transaction);
			
			return new ResponseEntity<Transaction>(transaction, HttpStatus.OK);
		}
		
		
		@PostMapping("/users/{username}/transactions")
		public ResponseEntity<Void> updateTransaction(
				@PathVariable String username, @RequestBody Transaction transaction){
			
			Transaction createdTransaction = transactionService.save(transaction);
			
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{transactionId}").buildAndExpand(createdTransaction.getTransactionId()).toUri();
			
			return ResponseEntity.created(uri).build();
		}		
}
