import React, { Component } from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import AccountDataService from "../../api/AccountDataService";
import AuthenticationService from "../../components/authentication/AuthenticationService.js";
import "./Accounts.css";
import Cube from "./Cube.jsx";
import { withRouter } from "react-router-dom";
import TransactionDataService from '../../api/TransactionDataService';
import axios from 'axios'


class AccountsBalanceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      transactions: [],
      // accounts: [{
      //   accountName: ''}, {
      //     transactions: [
      //       {transactionType: '',transactionAmount: 0}
      //     ]
      //   }
      // ],
      message: null,
    };
    this.refreshAccounts = this.refreshAccounts.bind(this);
    console.log(this.state.accounts)
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log(nextProps);
    console.log(nextState);
    return true;
  }

  componentDidMount() {
    this.refreshAccounts();
    console.log(this.state);
  }

  refreshAccounts() {
    console.log(this.state)
    let username = AuthenticationService.getLoggedInUsername();
    AccountDataService.retrieveAllAccounts(username).then((response) => {
      this.setState({ accounts: response.data }); })
      TransactionDataService.retrieveAllTransactions(username).then((response) => {
        this.setState({ transactions: response.data});
      })
      console.log(this.state)
  }

  render() { 
      const accounts = this.state.accounts;

      const allTransactions = this.state.transactions;

      const accountsWithBalances = accounts.map((account) => {
        let totalDepositsForAccount = 0;
        let totalWithdrawalsForAccount = 0;
        const transactionsForAccount = allTransactions.filter(
          (transaction) => transaction.account.id === account.id
        );
       
        transactionsForAccount.forEach((transaction) => {
          if (transaction.transactionType === "deposit") {
            totalDepositsForAccount += transaction.transactionAmount;
          }
          if (transaction.transactionType === "withdrawal") {
            totalWithdrawalsForAccount += transaction.transactionAmount;
          }
        });
        console.log(
          "totalDepositsForAccount: " + JSON.stringify(totalDepositsForAccount)
        );
        const accountBalance =
          totalDepositsForAccount - totalWithdrawalsForAccount;
          account.balance = accountBalance;
          return account;
      });

      console.log(
        "accountsWithBalances: " + JSON.stringify(accountsWithBalances)
      );

    return (
      <>
        <Cube />
        <div style={{ textAlign: "center" }}>
          <h1>Accounts and their Current Balances</h1>
          {this.state.message && (
            <div className="alert alert-success">{this.state.message}</div>
          )}
          <div className="container">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Account Name</th>
                  <th>Balance</th>
                  <th>As of</th>
                </tr>
              </thead>
              <tbody>
                {this.state.accounts.map((account) => (
                  <tr key={account.id}>
                    <td>{account.accountName}</td>
                    <td>
                      <CurrencyFormat
                        value={
                        //Math.abs(account.balance).toFixed(2)
                      Math.abs(account.balance).toFixed(2) * Math.sign(account.balance)
                        }
                        style={{
                          color: account.balance < 0 ? "red" : "black",
                        }}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$" || "-"}
                      />{" "}
                    </td>
                    <td>{moment(account.asOfDate).format("MMM-DD-YYYY")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="row"></div>
            <br />
          </div>
        </div>
      </>
    );
  }
}


export default withRouter(AccountsBalanceList);
