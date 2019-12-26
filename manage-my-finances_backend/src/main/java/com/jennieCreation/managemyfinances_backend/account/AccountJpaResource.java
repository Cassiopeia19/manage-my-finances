package com.jennieCreation.managemyfinances_backend.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AccountJpaResource {

	@Autowired
	private AccountHardcodedService accountService;
	
	@Autowired
	private AccountJpaRepository accountJpaRepository;


	@GetMapping("/jpa/users/{username}/accounts")
	public List<Account> getAllAccounts(@PathVariable String username) {
		return accountJpaRepository.findByUsername(username);
	}

	@GetMapping("/jpa/users/{username}/accounts/{accountId}")
	public Account getAccount(@PathVariable String username, @PathVariable long accountId) {
		return accountJpaRepository.findById(accountId).get();
	}
	
	@DeleteMapping("/jpa/users/{username}/accounts/{accountId}")
	public ResponseEntity<Void> deleteAccount(
			@PathVariable String username, @PathVariable long accountId) {

		accountJpaRepository.deleteById(accountId);

			return ResponseEntity.noContent().build();
		}

	
	//Edit/Update an account
	@PutMapping("/jpa/users/{username}/accounts/{accountId}")
	public ResponseEntity<Account> updateAccount(
			@PathVariable String username, 
			@PathVariable int accountId, 
			@RequestBody Account account) {
		
		account.setUsername(username);
		
		Account accountUpdated = accountJpaRepository.save(account);
		
		return new ResponseEntity<Account>(accountUpdated, HttpStatus.OK);
	}

	@PostMapping("/jpa/users/{username}/accounts")
	public ResponseEntity<Void> createAccount(
			@PathVariable String username, @RequestBody Account account){
		
		account.setUsername(username);
		
		Account createdAccount = accountJpaRepository.save(account);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{accountId}").buildAndExpand(createdAccount.getAccountId()).toUri();
		account.setUsername(username);
		
		return ResponseEntity.created(uri).build();
	}
}