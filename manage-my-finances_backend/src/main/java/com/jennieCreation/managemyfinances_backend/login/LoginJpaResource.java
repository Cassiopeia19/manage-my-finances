package com.jennieCreation.managemyfinances_backend.login;

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
public class LoginJpaResource {

	@Autowired
	private LoginService loginService;
	
	@GetMapping("/users/{username}/logins")
	public List<Login> getAllTransactions(@PathVariable String username) {
		return loginService.findAll();
	}
	
	@GetMapping("/users/{username}/logins/{loginId}")
	public Login getTransaction(@PathVariable String username, @PathVariable int loginId) {
		return loginService.findById(loginId);
	}
	
	// DELETE /users/{username}/logins/{loginId}
		@DeleteMapping("/users/{username}/logins/{loginId}")
		public ResponseEntity<Void> deleteLogin(@PathVariable String username, @PathVariable int loginId) {

			Login login = loginService.deleteById(loginId);

			if (login != null) {
				return ResponseEntity.noContent().build();
			}

			return ResponseEntity.notFound().build();
		}
		
		//Edit/Update a login
		@PutMapping("/users/{username}/logins/{loginId}")
		public ResponseEntity<Login> updateLogin(
				@PathVariable String username,
				@PathVariable int loginId, @RequestBody Login login){
			
			loginService.save(login);
			
			return new ResponseEntity<Login>(login, HttpStatus.OK);
		}
		
		@PostMapping("/users/{username}/logins")
		public ResponseEntity<Void> updateLogin(
				@PathVariable String username, @RequestBody Login login){
			
			Login createdLogin = loginService.save(login);
			
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{loginId}").buildAndExpand(createdLogin.getLoginId()).toUri();
			
			return ResponseEntity.created(uri).build();
		}		
}
