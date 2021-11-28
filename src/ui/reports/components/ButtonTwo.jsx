import React, { useEffect, useState } from "react";
import generatePDF from "../services/reportGenerator";
import AuthenticationService from "../../../components/authentication/AuthenticationService";
import axios from "axios";
import Moment from "moment";
import { extendMoment } from "moment-range";

const ButtonTwo = (props) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getAllTransactions = async () => {
      try {
        let username = AuthenticationService.getLoggedInUsername();
        const response = await axios.get(
          `http://localhost:8080/jpa/users/${username}/transactions`
        );
        console.log({ response });
        setTransactions(response.data);
      } catch (err) {
        console.log("error");
      }
    };
    getAllTransactions();
  }, []);

  const carCategories = [
    "car insurance",
    "car maintenance",
    "car parts",
    "car payment",
    "car repairs",
    "car washes",
    "gasoline",
    "personal property taxes",
  ];

  const familyCategories = [
    "Cathy",
    "Erin & Dulaney",
    "Janice",
    "Jennie",
    "Jessica",
    "Me",
    "Randy",
    "student loans",
  ];
  const miscCategories = [
    "church donations",
    "entertainment",
    "groceries",
    "medical bills",
    "miscellaneous",
    "vacations",
  ];

  const accountsCategories = ["Ally", "BOA", "Cash", "RCU", "VCU"];

  const homeCategories = [
    "home owners insurance",
    "home maintenance",
    "home repairs",
    "mortgage",
    "pest control",
    "property taxes",
    "remodeling",
  ];

  const utilitiesCategories = [
    "cable/internet",
    "electric",
    "garbage",
    "gas bill",
    "water/sewer",
  ];

  const carTransactions = transactions.filter((transaction) =>
    carCategories.includes(transaction.withdrawalCategory)
  );

  const familyTransactions = transactions.filter((transaction) =>
    familyCategories.includes(transaction.withdrawalCategory)
  );
  const familyTransactions2 = transactions.filter((transaction) =>
    familyCategories.includes(transaction.depositCategory)
  );

  const miscTransactions = transactions.filter((transaction) =>
    miscCategories.includes(transaction.withdrawalCategory)
  );

  const homeTransactions = transactions.filter((transaction) =>
    homeCategories.includes(transaction.withdrawalCategory)
  );

  const utilitesTransactions = transactions.filter((transaction) =>
    utilitiesCategories.includes(transaction.withdrawalCategory)
  );

  const accountInterestEarned = transactions.filter(
    (transaction) => transaction.depositCategory === "interest earned"
  );

  const accountRewards = transactions.filter(
    (transaction) => transaction.depositCategory === "rewards"
  );

  const accountBankFees = transactions.filter(
    (transaction) => transaction.withdrawalCategory === "bank fees"
  );

  const accountRelated = [
    ...accountInterestEarned,
    ...accountRewards,
    ...accountBankFees,
  ];

  const accountsTransactions = transactions.filter((transaction) =>
    accountsCategories.includes(transaction.depositCategory)
  );

  const accountsTransactionsTwo = transactions.filter((transaction) =>
    accountsCategories.includes(transaction.withdrawalCategory)
  );

  const tableData = [
    ...carTransactions,
    ...familyTransactions,
    ...miscTransactions,
    ...homeTransactions,
    ...utilitesTransactions,
    ...familyTransactions2,
    ...accountInterestEarned,
    ...accountRewards,
  ];

  const moment = extendMoment(Moment);

  var startDate = new Date(props.beginningDate),
    endingDate = new Date(props.endDate),
    range = moment().range(startDate, endingDate);

  const filteredTransactions = tableData.filter((transaction) => {
    if (transaction.transactionType == props.transactionTypeChoice) {
      console.log("reportType = " + props.transactionTypeChoice);
      return range.contains(moment(transaction.transactionDate))
    }
  });
   console.log({ filteredTransactions }); 

  return (
    <button
      style={{
        margin: "10px 10px 10px 10px",
        backgroundColor: "forestgreen",
      }}
      className={
        props.type === "primary" ? "btn btn-primary" : "btn btn-secondary"
      }
       onClick={() => generatePDF(filteredTransactions)}
    >
      {props.title}
    </button>
  );
};

export default ButtonTwo;
