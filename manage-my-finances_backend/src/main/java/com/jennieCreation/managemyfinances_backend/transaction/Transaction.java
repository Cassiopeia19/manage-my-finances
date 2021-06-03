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
    private Date transactionDate;
    private String transactionType;
    private String depositCategory;
    private String withdrawalCategory;
    private double transactionAmount;
    private String notes;
    
    @ManyToOne 
    @JoinColumn(name="account_id")
    private Account account;
    
    protected Transaction() {
        
    }
    
    public Transaction(String username, Date transactionDate, String transactionType, String depositCategory,
            String withdrawalCategory, double transactionAmount, String notes){
        super();
        this.username = username;
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


    public double getTransactionAmount() {
        return transactionAmount;
    }


    public void setTransactionAmount(double transactionAmount) {
        this.transactionAmount = transactionAmount;
    }


    public String getNotes() {
        return notes;
    }


    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
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
