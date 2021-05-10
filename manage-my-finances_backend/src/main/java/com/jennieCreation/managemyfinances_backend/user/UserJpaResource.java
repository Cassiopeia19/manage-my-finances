package com.jennieCreation.managemyfinances_backend.user;

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
import com.jennieCreation.managemyfinances_backend.account.AccountJpaRepository;
import com.jennieCreation.managemyfinances_backend.account.AccountService;
import com.jennieCreation.managemyfinances_backend.transaction.Transaction;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserJpaResource {

	@Autowired
	private UserService userService;
	
	@Autowired
	private UserJpaRepository userJpaRepository;

	@GetMapping("/jpa/users/{username}/users")
	public List<User> getAllUsers(@PathVariable String username) {
		return userJpaRepository.findByUsername(username);
	}
	
	@GetMapping("/jpa/users/{username}/users/{id}")
	public User getUser(@PathVariable String username, @PathVariable long id) {
		return userJpaRepository.findById(id).get();
	}

	// DELETE /users/{username}/users/{id}
	@DeleteMapping("/jpa/users/{username}/users/{id}")
	public ResponseEntity<Void> deleteAccount(@PathVariable String username, @PathVariable long id) {

		userJpaRepository.deleteById(id);

			return ResponseEntity.noContent().build();
	}
	
	//Edit/Update an User
		//PUT /users/{username}/users/{id}
		@PutMapping("/jpa/users/users/{id}")
		public ResponseEntity<User> updateUser(
//				@PathVariable String username,
				@PathVariable long id, @RequestBody User user){
			
//			user.setUsername(username);
			
			User userUpdated = userJpaRepository.save(user);
			
			return new ResponseEntity<User>(user, HttpStatus.OK);
		}
			
	@PostMapping("/jpa/users/{username}/users")
	public ResponseEntity<Void> createUser(
			@PathVariable String username, @RequestBody User user){
		
		user.setUsername(username);
		
		User createdUser = userJpaRepository.save(user);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdUser.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}	
}