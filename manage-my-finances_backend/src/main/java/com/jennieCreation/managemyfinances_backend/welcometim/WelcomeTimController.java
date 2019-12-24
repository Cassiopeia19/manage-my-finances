package com.jennieCreation.managemyfinances_backend.welcometim;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
	
public class WelcomeTimController {

		@GetMapping(path = "/welcome-tim")
		public String helloWorld() {
			return "Welcome Back";
		}
		
		@GetMapping(path = "/welcome-tim-bean")
		public WelcomeTimBean welcomeTimBean() {
			return new WelcomeTimBean("Welcome Back");
			}
			
		//welcome-tim/path-variable
		@GetMapping(path = "/welcome-tim/path-variable/{name}")
		public WelcomeTimBean WelcomeTimPathVariable(@PathVariable String name) {
			return new WelcomeTimBean(String.format("Welcome, %s", name));
		}
	}