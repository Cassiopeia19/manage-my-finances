package com.jennieCreation.managemyfinances_backend.transaction;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Transaction {
	
	@Id
	@GeneratedValue
	private long id;
	private String username;
	private String accountName;
	private Date transactionDate;
	private String transactionType;
	private String depositCategory;
	private String withdrawalCategory;
	private String transactionAmount;
	private String notes;

	protected Transaction() {
		
	}

	public Transaction(long id, String username, String accountName, Date transactionDate, String transactionType,
			String depositCategory, String withdrawalCategory, String transactionAmount, String notes) {
		super();
		this.id = id;
		this.username = username;
		this.accountName = accountName;
		this.transactionDate = transactionDate;
		this.transactionType = transactionType;
		this.depositCategory = depositCategory;
		this.withdrawalCategory = withdrawalCategory;
		this.transactionAmount = transactionAmount;
		this.notes = notes;
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

	public Date getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(Date transactionDate) {
		this.transactionDate = transactionDate;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public String getDepositCategory() {
		return depositCategory;
	}

	public void setDepositCategory(String depositCategory) {
		this.depositCategory = depositCategory;
	}

	public String getWithdrawalCategory() {
		return withdrawalCategory;
	}

	public void setWithdrawalCategory(String withdrawalCategory) {
		this.withdrawalCategory = withdrawalCategory;
	}

	public String getTransactionAmount() {
		return transactionAmount;
	}

	public void setTransactionAmount(String transactionAmount) {
		this.transactionAmount = transactionAmount;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
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
		Transaction other = (Transaction) obj;
		if (id != other.id)
			return false;
		return true;
	}
}