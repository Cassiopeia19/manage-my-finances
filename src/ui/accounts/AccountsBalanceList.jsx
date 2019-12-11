import React, { Component } from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import AccountDataService from "../../api/AccountDataService.js";
import AuthenticationService from "../../components/authentication/AuthenticationService.js";
import "./Accounts.css";
import Cube from "./Cube";

class AccountsBalanceList extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      accounts: [],
      message: null
    };
    this.deleteAccountClicked = this.deleteAccountClicked.bind(this);
    this.updateAccountClicked = this.updateAccountClicked.bind(this);
    this.addAccountClicked = this.addAccountClicked.bind(this);
    this.refreshAccounts = this.refreshAccounts.bind(this);
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
    console.log("componentDidMount");
    this.refreshAccounts();
    console.log(this.state);
  }

  refreshAccounts() {
    let username = AuthenticationService.getLoggedInUserName();
    AccountDataService.retrieveAllAccounts(username).then(response => {
      this.setState({ accounts: response.data });
    });
  }

  deleteAccountClicked(accountId) {
    let username = AuthenticationService.getLoggedInUserName();
    AccountDataService.deleteAccount(username, accountId).then(response => {
      this.setState({
        message: `Deletion of account ${accountId} was successful`
      });
      this.refreshAccounts();
    });
  }

  addAccountClicked() {
    this.props.history.push(`/accounts/-1`);
  }

  updateAccountClicked(accountId) {
    console.log("update" + accountId);
    this.props.history.push(`/accounts/${accountId}`);
  }

  render() {
    console.log("render");
    return (
      <>
        <Cube />
        <h1>Accounts and their Current Balances</h1>
        {this.state.message && (
          <div class="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Account Name</th>
                <th>Balance</th>
                <th>As of</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.accounts.map(account => (
                <tr key={account.accountId}>
                  <td>{account.accountName}</td>
                  <td>
                    <CurrencyFormat
                      value={account.balance.toFixed(2)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </td>
                  <td>{moment(account.asOfDate)
                      .utcOffset("+0100")
                      .format("MMM-DD-YYYY")}</td>
                  <td>{account.done.toString}</td>

                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        this.updateAccountClicked(account.accountId)
                      }
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() =>
                        this.deleteAccountClicked(account.accountId)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <button
              className="btn btn-success"
              onClick={this.addAccountClicked}
            >
              Add
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default AccountsBalanceList;
