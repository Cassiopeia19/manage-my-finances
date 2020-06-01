package com.jennieCreation.managemyfinances_backend.transaction;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TransactionService {
	
	private static List<Transaction> transactions = new ArrayList<Transaction>();
	private static long transactionIdCounter = 1;
	
	public List<Transaction> findAll() {
		return transactions;
	}
	
	public Transaction save(Transaction transaction) {
		if(transaction.getTransactionId()==-1 || transaction.getTransactionId()==0) {
			transaction.setTransactionId(++transactionIdCounter);
			transactions.add(transaction);
		} else {
			deleteById(transaction.getTransactionId());
			transactions.add(transaction);
		}
		return transaction;
	}
	
	public Transaction deleteById(long transactionId) {
		Transaction transaction = findById(transactionId);

		if (transaction == null)
			return null;

		if (transactions.remove(transaction)) {
			return transaction;
		}

		return null;
	}
	
	public Transaction findById(long transactionId) {
		for (Transaction transaction : transactions) {
			if (transaction.getTransactionId() == transactionId) {
				return transaction;
			}
		}
		return null;
	}
}
