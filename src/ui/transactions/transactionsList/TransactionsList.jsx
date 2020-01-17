import React from "react";
import TransactionCard from "../transactionCard/TransactionCard";
import { CardColumns } from "reactstrap";

function TransactionsList(props) {
  
  const transactions = [
    {
      transactionId: 1,
      accountName: "Ally",
      type: "deposit",
      transactionDate: "Jan 01, 2020",
      category: "interest earned",
      amount: "$220.00",
      notes: "Year-end interest earned. Ally yields 20% annual interest."
    },
    {
      transactionId: 2,
      accountName: "BOA",
      type: "withdrawal",
      transactionDate: "Jan 04, 2020",
      category: "groceries",
      amount: "$150.00",
      notes: "Jennie bought household goods & food."
    },
    {
      transactionId: 3,
      accountName: "Cash",
      type: "deposit",
      transactionDate: "Jan 05, 2020",
      category: "Janice",
      amount: "$350.00",
      notes: "Car insurance & rent."
    },
    {
      transactionId: 4,
      accountName: "RCU",
      type: "withdrawal",
      transactionDate: "Jan 07, 2020",
      category: "student loans",
      amount: "$500.00",
      notes: "Erin & Jessica's student loans' monthly payment."
    },
    {
      transactionId: 5,
      accountName: "VCU",
      type: "deposit",
      transactionDate: "Jan 10, 2020",
      category: "payroll",
      amount: "$3,000.00",
      notes: "Boeing direct deposit."
    }
  ];

  return (
    <CardColumns>
      {transactions.map(transaction => (
        <TransactionCard transaction={transaction} />
      ))}
    </CardColumns>
  );
}

export default TransactionsList;
