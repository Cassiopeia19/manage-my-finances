package com.jennieCreation.managemyfinances_backend.account;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import java.util.Date;

@Entity
public class Account {
    
    @Id
    @GeneratedValue
    public long id;
    private String username;
    private String accountName;
    private Date asOfDate;
    
    @OneToMany(mappedBy="account", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Transaction> transactions = new ArrayList<>();

    protected Account() {
        
    }
    
    public Account(String username, String accountName, Date asOfDate) {
        super();
        this.username = username;
        this.accountName = accountName;
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


    public Date getAsOfDate() {
        return asOfDate;
    }


    public void setAsOfDate(Date asOfDate) {
        this.asOfDate = asOfDate;
    }

    public List<Transaction> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<Transaction> transactions) {
        this.transactions = transactions;
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
