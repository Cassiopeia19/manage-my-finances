package com.jennieCreation.managemyfinances_backend.transaction;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TransactionService {

	private static List<Transaction> transactions = new ArrayList<>();
	private static long idCounter = 0;

	public List<Transaction> findAll() {
		return transactions;
	}
	
	public Transaction save(Transaction transaction) {
		if(transaction.getId()==-1 || transaction.getId()==0) {
			transaction.setId(++idCounter);
			transactions.add(transaction);
		} else {
			deleteById(transaction.getId());
			transactions.add(transaction);
		}
		return transaction;
	}

	public Transaction deleteById(long id) {
		Transaction transaction = findById(id);

		if (transaction == null)
			return null;

		if (transactions.remove(transaction)) {
			return transaction;
		}

		return null;
	}

	public Transaction findById(long id) {
		for (Transaction transaction : transactions) {
			if (transaction.getId() == id) {
				return transaction;
			}
		}
		return null;
	}
}