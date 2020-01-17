import React from "react";

export default function Transaction(props) {
 
  const { transactions } = props;
  return (
    <div className="record-container">
      <div>{transactions.accountName}</div>
      <div>{transactions.type}</div>
      <div>{transactions.transactionDate}</div>
      <div>{transactions.category}</div>
      <div>{transactions.amount}</div>
      <div>{transactions.notes}</div>
    </div>
  );
}
