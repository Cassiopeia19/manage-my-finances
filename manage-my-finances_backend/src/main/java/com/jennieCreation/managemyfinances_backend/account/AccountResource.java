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
public class AccountResource {

	@Autowired
	private AccountHardcodedService accountService;

	@GetMapping("/users/{username}/accounts")
	public List<Account> getAllAccounts(@PathVariable String username) {
		return accountService.findAll();
	}

	@GetMapping("/users/{username}/accounts/{accountId}")
	public Account getAccount(@PathVariable String username, @PathVariable int accountId) {
		return accountService.findByAccountId((long) accountId);
	}
	
	@DeleteMapping("/users/{username}/accounts/{accountId}")
	public ResponseEntity<Void> deleteAccount(
			@PathVariable String username, @PathVariable int accountId) {

		Account account = accountService.deleteByAccountId((long) accountId);

		if (account != null) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build();
	}
	
	//Edit/Update an account
	@PutMapping("/users/{username}/accounts/{accountId}")
	public ResponseEntity<Account> updateAccount(
			@PathVariable String username, 
			@PathVariable int accountId, 
			@RequestBody Account account) {
		
		Account accountUpdated = accountService.save(account);
		
		return new ResponseEntity<Account>(accountUpdated, HttpStatus.OK);
	}

	@PostMapping("/users/{username}/accounts")
	public ResponseEntity<Void> updateAccount(
			@PathVariable String username, @RequestBody Account account){
		
		Account createdAccount = accountService.save(account);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{accountId}").buildAndExpand(createdAccount.getAccountId()).toUri();
		account.setUsername(username);
		
		return ResponseEntity.created(uri).build();
	}
}