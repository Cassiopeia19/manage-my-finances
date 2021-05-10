import React, { Component } from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import AccountDataService from "../../api/AccountDataService";
import AuthenticationService from "../../components/authentication/AuthenticationService.js";
import "./Accounts.css";
import Cube from "./Cube.jsx";
import { withRouter } from "react-router-dom";
import TransactionDataService from '../../api/TransactionDataService'

class AccountsBalanceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [{
        accountName: ''}, {
          transactions: [
            {accountName: '',transactionType: '',transactionAmount: ''}
          ]
        }
      ],
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
    let username = AuthenticationService.getLoggedInUsername();
    AccountDataService.retrieveAllAccounts(username).then((response) => {
      this.setState({ accounts: response.data }); })
      TransactionDataService.retrieveAllTransactions(username).then((response) => {
        this.setState({ transaction: response.data});
      })
  }

  render() {      
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
                {this.state.accounts.map((account, transaction) => (
                  <tr key={account.id && transaction.id}>
                    {/* {transaction.accountName === account.accountName ? ( */}
                      <td>{account.accountName}</td>
                    {/* ) : (
                      <td>not working</td>
                    )} */}
                    <td>
                      {transaction.transactionType === "deposit"
                        ? account.deposits ===
                            parseFloat(transaction.transactionAmount) && 
                            <td>
                              <CurrencyFormat
                                value={Math.abs(
                                  account.deposits - account.withdrawals
                                ).toFixed(2)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                              />{" "}
                            </td> && console.log("balance: " + account.deposits - account.withdrawals)
                          
                        : account.withdrawals ===
                            parseFloat(transaction.transactionAmount) && 
                            <td>
                              <CurrencyFormat
                                value={Math.abs(
                                  account.deposits - account.withdrawals
                                ).toFixed(2)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                              />{" "}
                            </td>
                          }
                    </td>
                    <td>
                      {moment.utc(account.asOfDate).format("MMM-DD-YYYY")}
                    </td>
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
