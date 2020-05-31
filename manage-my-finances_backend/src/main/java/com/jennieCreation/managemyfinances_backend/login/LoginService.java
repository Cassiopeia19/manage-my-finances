package com.jennieCreation.managemyfinances_backend.login;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LoginService {
	
	private static List<Login> logins = new ArrayList<Login>();
	private static int loginIdCounter = 1;
	
	public List<Login> findAll() {
		return logins;
	}
	
	public Login save(Login login) {
		if(login.getLoginId()==-1 || login.getLoginId()==0) {
			login.setLoginId(++loginIdCounter);
			logins.add(login);
		} else {
			deleteById(login.getLoginId());
			logins.add(login);
		}
		return login;
	}
	
	public Login deleteById(int loginId) {
		Login login = findById(loginId);

		if (login == null)
			return null;

		if (logins.remove(login)) {
			return login;
		}

		return null;
	}
	
	public Login findById(long loginId) {
		for (Login login : logins) {
			if (login.getLoginId() == loginId) {
				return login;
			}
		}
		return null;
	}
}
