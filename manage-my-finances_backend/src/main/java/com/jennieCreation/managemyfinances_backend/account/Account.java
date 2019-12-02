package com.jennieCreation.managemyfinances_backend.account;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Account {
	
	@Id
	@GeneratedValue
	private Long accountId;
	private String username;
	private String accountName;
	private double balance;
	private Date asOfDate;

	protected Account() {
		
	}
	
	public Account(Long accountId, String username, String accountName, double balance, Date asOfDate) {
		super();
		this.accountId = accountId;
		this.username = username;
		this.accountName = accountName;
		this.balance = balance;
		this.asOfDate = asOfDate;
	}

	public Long getAccountId() {
		return accountId;
	}

	public String getUsername() {
		return username;
	}
	
	public String getAccountName() {
		return accountName;
	}

	public double getBalance() {
		return balance;
	}

	public Date getAsOfDate() {
		return asOfDate;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public void setAsOfDate(Date asOfDate) {
		this.asOfDate = asOfDate;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((accountId == null) ? 0 : accountId.hashCode());
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
		Account other = (Account) obj;
		if (accountId == null) {
			if (other.accountId != null)
				return false;
		} else if (!accountId.equals(other.accountId))
			return false;
		return true;
	}
	
}
	
	
	
	