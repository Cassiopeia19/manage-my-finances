package com.jennieCreation.managemyfinances_backend.account;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccountService {

	private static List<Account> accounts = new ArrayList<Account>();
	private static long accountIdCounter = 1;

	public List<Account> findAll() {
		return accounts;
	}

	public Account save(Account account) {
		if(account.getAccountId()==-1 || account.getAccountId()==0) {
			account.setAccountId(++accountIdCounter);
			accounts.add(account);
		} else {
			deleteById(account.getAccountId());
			accounts.add(account);
		}
		return account;
	}

	public Account deleteById(long accountId) {
		Account account = findById(accountId);

		if (account == null)
			return null;

		if (accounts.remove(account)) {
			return account;
		}

		return null;
	}

	public Account findById(long accountId) {
		for (Account account : accounts) {
			if (account.getAccountId() == accountId) {
				return account;
			}
		}
		return null;
	}
}