import React, { Component } from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import AccountDataService from "../../api/AccountDataService";
import AuthenticationService from "../../components/authentication/AuthenticationService.js";
import "./Accounts.css";
import Cube from "./Cube.jsx";
import { withRouter } from "react-router-dom";

class AccountsBalanceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      message: null,
    };
    this.deleteAccountClicked = this.deleteAccountClicked.bind(this);
    this.archiveAccountClicked = this.archiveAccountClicked.bind(this);
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
    this.refreshAccounts();
    console.log(this.state);
  }

  refreshAccounts() {
    let username = AuthenticationService.getLoggedInUsername();
    AccountDataService.retrieveAllAccounts(username).then((response) => {
      this.setState({ accounts: response.data });
    });
  }

  deleteAccountClicked(id) {
    let username = AuthenticationService.getLoggedInUsername();
    AccountDataService.deleteAccount(username, id).then((response) => {
      this.setState({
        message: `Deletion of account ${id} was successful`,
      });
      this.refreshAccounts();
    });
  }

  archiveAccountClicked(id) {
     console.log("archive " + id);
       this.props.history.push(`/accounts/${id}`);
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
                  <th>Archive</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.accounts.map((account) => (
                  <tr key={account.id}>
                    <td>{account.accountName}</td>
                    <td>
                      <CurrencyFormat
                        value={Math.abs(
                          account.deposits - account.withdrawals
                        ).toFixed(2)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                    </td>
                    <td>
                      {moment.utc(account.asOfDate).format("MMM-DD-YYYY")}
                    </td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() => this.archiveAccountClicked(account.id)}
                      >
                        Archive
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => this.deleteAccountClicked(account.id)}
                      >
                        Delete
                      </button>
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
