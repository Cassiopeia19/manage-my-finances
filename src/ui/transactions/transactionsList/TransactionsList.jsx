import React, { useState, useEffect } from "react";
import TransactionCard from "../transactionCard/TransactionCard";
import { CardColumns } from "reactstrap";
import TransactionDataService from "../../../api/TransactionDataService";
import AuthenticationService from '../../../components/authentication/AuthenticationService'

function TransactionsList() {

 const [transactions, setTransactions] = useState([]);
 
 useEffect(() => {
   let username = AuthenticationService.getLoggedInUserName();
   TransactionDataService.retrieveAllTransactions(
     username
   ).then((response) => setTransactions( response.data));
  }, []);
   
  return (
    <CardColumns style={{ padding: "20px" }}>
      {transactions.map((transaction) => (
        <TransactionCard transaction={transaction} />
      ))}
    </CardColumns>
  );
}

export default TransactionsList;
