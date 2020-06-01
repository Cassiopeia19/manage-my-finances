package com.jennieCreation.managemyfinances_backend.login;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Login {
	
	@Id
	@GeneratedValue
	private int loginId;
	private String username;
	private String password;
	private String email;
	
protected Login() {
		
	}

public Login(int loginId, String username, String password, String email) {
	super();
	this.loginId = loginId;
	this.username = username;
	this.password = password;
	this.email = email;
}

public int getLoginId() {
	return loginId;
}

public void setLoginId(int loginId) {
	this.loginId = loginId;
}

public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + loginId;
	return result;
}

@Override
public boolean equals(Object obj) {
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;
	Login other = (Login) obj;
	if (loginId != other.loginId)
		return false;
	return true;
}
}
