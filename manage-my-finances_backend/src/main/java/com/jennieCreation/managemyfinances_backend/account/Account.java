package com.jennieCreation.managemyfinances_backend.account;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Account {
	
	@Id
	@GeneratedValue
	private long id;
	private String username;
	private String accountName;
	private double deposits;
	private double withdrawals;
	private Date asOfDate;

	protected Account() {
		
	}

	public Account(long id, String username, String accountName, double deposits, double withdrawals, Date asOfDate) {
		super();
		this.id = id;
		this.username = username;
		this.accountName = accountName;
		this.deposits = deposits;
		this.withdrawals = withdrawals;
		this.asOfDate = asOfDate;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	public double getDeposits() {
		return deposits;
	}

	public void setDeposits(double deposits) {
		this.deposits = deposits;
	}

	public double getWithdrawals() {
		return withdrawals;
	}

	public void setWithdrawals(double withdrawals) {
		this.withdrawals = withdrawals;
	}

	public Date getAsOfDate() {
		return asOfDate;
	}

	public void setAsOfDate(Date asOfDate) {
		this.asOfDate = asOfDate;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
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
		if (id != other.id)
			return false;
		return true;
	}
}