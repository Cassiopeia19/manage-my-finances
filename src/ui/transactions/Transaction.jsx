import React from "react";

export default function Transaction(props) {
 
  const { transactions } = props;
  return (
    <div className="record-container">
      <div>{transactions.accountName}</div>
      <div>{transactions.transactionType}</div>
      <div>{transactions.transactionDate}</div>
      <div>{transactions.depositCategory}</div>
      <div>{transactions.withdrawalCategory}</div>
      <div>{transactions.transactionAmount}</div>
      <div>{transactions.notes}</div>
    </div>
  );
}
