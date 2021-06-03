import React, { useState, useEffect } from "react";
import TransactionCard from "../transactionCard/TransactionCard";
import { CardColumns } from "reactstrap";
import TransactionDataService from "../../../api/TransactionDataService";
import AuthenticationService from '../../../components/authentication/AuthenticationService'
import moment from "moment";

function TransactionsList(props) {

 const [transactions, setTransactions] = useState([]);
 var startDate;
 var endDate;
 var startDate2;
 var endDate2;  
 
 useEffect(() => {
   let username = AuthenticationService.getLoggedInUsername();
   TransactionDataService.retrieveAllTransactions(
     username
   ).then((response) => setTransactions( response.data));
  }, []); 
  
    const filteredTransactions = transactions.filter(function (transaction) {
      startDate = moment().subtract(30, "days").format("YYYY-MM-DD");
      endDate = moment().add(1, "days").format("YYYY-MM-DD");
      return (
        transaction.transactionDate >= startDate &&
        transaction.transactionDate <= endDate
      );
    });
    const filteredTransactions2 = transactions.filter(function (transaction) {
      startDate2 = moment().subtract(365, "days").format("YYYY-MM-DD");
      endDate2 = moment().add(1, "days").format("YYYY-MM-DD");
      return (
        transaction.transactionDate >= startDate2 &&
        transaction.transactionDate <= endDate2 
      );
    });  

  console.log(filteredTransactions)
  console.log(filteredTransactions2)
 
  if(props.filterLastThirtyDays === true) {
    return (
    <CardColumns style={{ padding: "20px" }}>
      {filteredTransactions.map((filteredTransactions) => (
        <TransactionCard
          transaction={filteredTransactions}
          key={filteredTransactions.id}
        />
      ))}
    </CardColumns>
  );
      } else if(props.filterLastThirtyDays === false) {
        return (
          <CardColumns style={{ padding: "20px" }}>
            {filteredTransactions2.map((filteredTransactions2) => (
              <TransactionCard
                transaction={filteredTransactions2}
                key={filteredTransactions2.id}
              />
            ))}
          </CardColumns>
        );
  }
}
 export default TransactionsList;
