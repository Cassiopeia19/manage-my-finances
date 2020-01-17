import React from "react";
import ToggleButtons from "./toggleButtons/ToggleButtons";
import TransactionsList from "../transactionsList/TransactionsList";
import "./TransactionCard.css";

export default function TransactionsLayout() {
  return (
    <>
      <ToggleButtons />
      <TransactionsList />
    </>
  );
}
