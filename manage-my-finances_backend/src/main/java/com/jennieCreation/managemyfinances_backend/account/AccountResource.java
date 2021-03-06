package com.jennieCreation.managemyfinances_backend.account;

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
public class AccountResource {

	@Autowired
	private AccountService accountService;

	@GetMapping("/users/{username}/accounts")
	public List<Account> getAllAccounts(@PathVariable String username) {
		return accountService.findAll();
	}
	
	@GetMapping("/users/{username}/accounts/{id}")
	public Account getAccount(@PathVariable String username, @PathVariable long id) {
		return accountService.findById(id);
	}


	// DELETE /users/{username}/accounts/{id}
	@DeleteMapping("/users/{username}/accounts/{id}")
	public ResponseEntity<Void> deleteAccount(@PathVariable String username, @PathVariable long id) {

		Account account = accountService.deleteById(id);

		if (account != null) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build();
	}
	
	//Edit/Update an Account
		//PUT /users/{username}/accounts/{account_id}
		@PutMapping("/users/{username}/accounts/{id}")
		public ResponseEntity<Account> updateAccount(
				@PathVariable String username,
				@PathVariable long id, @RequestBody Account account){
			
			accountService.save(account);
			
			return new ResponseEntity<Account>(account, HttpStatus.OK);
		}
		
	
	@PostMapping("/users/{username}/accounts")
	public ResponseEntity<Void> updateAccount(
			@PathVariable String username, @RequestBody Account account){
		
		Account createdAccount = accountService.save(account);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdAccount.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}	
}