package com.jennieCreation.managemyfinances_backend.account;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class AccountHardcodedService {

	private static List<Account> accounts = new ArrayList<Account>();
	private static long accountIdCounter = 1;

	static {
		accounts.add(new Account(accountIdCounter++, "Tim", "Ally", 12000, new Date()));
		accounts.add(new Account(accountIdCounter++, "Tim", "BOA", 15575, new Date()));
		accounts.add(new Account(accountIdCounter++, "Tim", "Cash", 980, new Date()));
		accounts.add(new Account(accountIdCounter++, "Tim", "RCU", 5200, new Date()));
		accounts.add(new Account(accountIdCounter++, "Tim", "VCU", 7895, new Date()));
	}

	public List<Account> findAll() {
		return accounts;
	}

	public Account save(Account account) {
		if (account.getAccountId() == -1 || account.getAccountId() == 0) {
			account.setAccountId(++accountIdCounter);
			accounts.add(account);
		} else {
			deleteByAccountId(account.getAccountId());
			accounts.add(account);
		}
		return account;
	}

	public Account deleteByAccountId(Long accountId) {
		Account account = findByAccountId(accountId);

		if (account == null)
			return null;

		if (accounts.remove(account)) {
			return account;
		}
		return null;
	}

	public Account findByAccountId(Long accountId) {
		for (Account account : accounts) {
			if (account.getAccountId() == accountId) {
				return account;
			}
		}
		return null;
	}

}
