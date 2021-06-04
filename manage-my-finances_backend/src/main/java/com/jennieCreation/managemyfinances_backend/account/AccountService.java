package com.jennieCreation.managemyfinances_backend.account;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class AccountService {

	private static List<Account> accounts = new ArrayList<>();
	private static long idCounter = 0;

	public List<Account> findAll() {
		return accounts;
	}
	
	public Account save(Account account) {
		if(account.getId()==-1 || account.getId()==0) {
			account.setId(++idCounter);
			accounts.add(account);
		} else {
			deleteById(account.getId());
			accounts.add(account);
		}
		return account;
	}

	public Account deleteById(long id) {
		Account account = findById(id);

		if (account == null)
			return null;

		if (accounts.remove(account)) {
			return account;
		}

		return null;
	}

	public Account findById(long id) {
		for (Account account : accounts) {
			if (account.getId() == id) {
				return account;
			}
		}
		return null;
	}
}
