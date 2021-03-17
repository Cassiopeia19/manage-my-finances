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
  //look  up filter syntax. objective filter the list of transactions by date based on the state of the filterLastThirtyDays value or prop 
  // var now = new Date();
  //  const filteredTransactions = transactions.filter( now.setDate(now.getDate() - 30));
    
 

  return (
    <CardColumns style={{ padding: "20px" }}>
      {transactions.map((transactions => (
      <TransactionCard transaction={transactions} key={transactions.id} />
      )))}
    </CardColumns>
  );
}


export default TransactionsList;
