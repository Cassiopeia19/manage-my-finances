import React, {useState} from "react";
import ToggleButtons from "./toggleButtons/ToggleButtons";
import TransactionsList from "../transactionsList/TransactionsList";
import "./TransactionCard.css";

export default function TransactionsLayout() {
  
  const [filterLastThirtyDays, setFilterLastThirtyDays] = useState(true);

  return (
    <>
      <center><ToggleButtons filterLastThirtyDays={filterLastThirtyDays} setFilterLastThirtyDays={setFilterLastThirtyDays}/></center>
      <TransactionsList filterLastThirtyDays={filterLastThirtyDays} />
    </>
  );
}
