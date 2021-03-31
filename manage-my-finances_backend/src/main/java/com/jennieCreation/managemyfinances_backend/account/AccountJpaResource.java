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
public class AccountJpaResource {

	@Autowired
	private AccountService accountService;
	
	@Autowired
	private AccountJpaRepository accountJpaRepository;

	@GetMapping("/jpa/users/{username}/accounts")
	public List<Account> getAllAccounts(@PathVariable String username) {
		return accountJpaRepository.findByUsername(username);
	}
	
	@GetMapping("/jpa/users/{username}/accounts/{id}")
	public Account getAccount(@PathVariable String username, @PathVariable long id) {
		return accountJpaRepository.findById(id).get();
	}

	// DELETE /users/{username}/accounts/{id}
	@DeleteMapping("/jpa/users/{username}/accounts/{id}")
	public ResponseEntity<Void> deleteAccount(@PathVariable String username, @PathVariable long id) {

		accountJpaRepository.deleteById(id);

			return ResponseEntity.noContent().build();
	}
	
	//Edit/Update an account
		//PUT /users/{username}/accounts/{id}
		@PutMapping("/jpa/users/{username}/accounts/{id}")
		public ResponseEntity<Account> updateAccount(
				@PathVariable String username,
				@PathVariable long id, @RequestBody Account account){
			
			account.setUsername(username);
			
			Account accountUpdated = accountJpaRepository.save(account);
			
			return new ResponseEntity<Account>(account, HttpStatus.OK);
		}
			
	@PostMapping("/jpa/users/{username}/accounts")
	public ResponseEntity<Void> createAccount(
			@PathVariable String username, @RequestBody Account account){
		
		account.setUsername(username);
		
		Account createdAccount = accountJpaRepository.save(account);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdAccount.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}	
}