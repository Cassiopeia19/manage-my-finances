import React,{useEffect,useState} from "react";
import generatePDF from "../services/reportGenerator"
import AuthenticationService from '../../../components/authentication/AuthenticationService'
import axios from 'axios'

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

  // const reportCarInsurance = transactions.filter(
  //   (transaction) => transaction.withdrawalCategory === "car insurance"
  // );
  // const reportCarMaintenance = transactions.filter(
  //   (transaction) => transaction.withdrawalCategory === "car maintenance"
  // );
  // const reportCarParts = transactions.filter(
  //   (transaction) => transaction.withdrawalCategory === "car parts"
  // );
  // const reportCarPayment = transactions.filter(
  //   (transaction) => transaction.withdrawalCategory === "car payment"
  // );
  // const reportCarRepairs = transactions.filter(
  //   (transaction) => transaction.withdrawalCategory === "car repairs"
  // );
  // const reportCarWashes = transactions.filter(
  //   (transaction) => transaction.withdrawalCategory === "car washes"
  // );
  // const reportGasoline = transactions.filter(
  //   (transaction) => transaction.withdrawalCategory === "gasoline"
  // );
  // const reportPPTaxes = transactions.filter(
  //   (transaction) => transaction.withdrawalCategory === "personal property taxes"
  // );

  // const tableData = [
  //   ...reportCarInsurance,
  //   ...reportCarMaintenance,
  //   ...reportCarParts,
  //   ...reportCarPayment,
  //   ...reportCarRepairs,
  //   ...reportCarWashes,
  //   ...reportGasoline,
  //   ...reportPPTaxes,
  // ];

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

  const miscTransactions = transactions.filter((transaction) =>
    miscCategories.includes(transaction.withdrawalCategory)
  );

   const homeTransactions = transactions.filter((transaction) =>
     homeCategories.includes(transaction.withdrawalCategory)
   );

    const utilitesTransactions = transactions.filter((transaction) =>
      utilitiesCategories.includes(transaction.withdrawalCategory)
    );

   const reportAccountInterestEarned = transactions.filter(
        (transaction) => transaction.depositCategory === "interest earned"
    );

   const reportAccountRewards = transactions.filter(
     (transaction) => transaction.depositCategory === "rewards"
   );

   const reportAccountBankFees = transactions.filter(
     (transaction) => transaction.withdrawalCategory === "bank fees"
   );

   const accountRelated = [
     ...reportAccountInterestEarned,
     ...reportAccountRewards,
     ...reportAccountBankFees,
   ];

  const accountsTransactions = transactions.filter((transaction) =>
    accountsCategories.includes(transaction.depositCategory)
  );

  const accountsTransactionsTwo = transactions.filter((transaction) =>
    accountsCategories.includes(transaction.withdrawalCategory)
  );

  return (
    <button
      style={{
        margin: "10px 10px 10px 10px",
        backgroundColor: "forestgreen",
      }}
      className={
        props.type === "primary" ? "btn btn-primary" : "btn btn-secondary"
      }
      onClick={() => generatePDF(carTransactions)}
    >
      {props.title}
    </button>
  );
};

export default ButtonTwo;
