import React, { useEffect, useState } from "react";
import generatePDF from "./services/reportGenerator";
import axios from "axios";
// import AuthenticationService from "../../components/authentication/AuthenticationService";
// import ButtonTwo from './components/ButtonTwo'

// const Transactions = () => {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const getAllTransactions = async () => {
//       try {
//         let username = AuthenticationService.getLoggedInUsername();
//         const response = await axios.get(
//           `http://localhost:8080/jpa/users/${username}/transactions`
//         );
//         setTransactions(response.transaction.transactions);
//       } catch (err) {
//         console.log("error");
//       }
//     };
//     getAllTransactions();
//   }, []);

//      const reportCarInsurance = transactions.filter(transaction => transaction.status === "car insurance");

//   return (
//     <div>
//       <div className="container mb-4 mt-4 p-3">
//         <div className="row">
//            <ButtonTwo
//               type="submit"
//              // theme={"primary"}
//               title={"run report"}
//              style={{
//                 margin: "10px 10px 10px 10px",
//                 backgroundColor: "forestgreen",
//                 color: "white"
//               }}
//             onClick={() => generatePDF(reportCarInsurance)} 
//            />
//         </div> 
//         </div>
//       {/* <TransactionsComponent transactions={transactions} /> */}
//     </div>
//   );
// };

// export default Transactions;
