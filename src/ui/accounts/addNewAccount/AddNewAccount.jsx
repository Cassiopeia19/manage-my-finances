import React, { useState } from "react";
import "./AddNewAccount.scss";
import Axios from "axios";
import AuthenticationService from '../../../components/authentication/AuthenticationService'

function AddNewAccount() {
  const [accountNameRegister, setAccountNameRegister] = useState("");
  const [depositsRegister, setDepositsRegister] = useState("");
  const [asOfDateRegister, setAsOfDateRegister] = useState("");
  const [message, setMessage] = useState("");

  const register = () => {
    let username = AuthenticationService.getLoggedInUserName();
    Axios.post(`http://localhost:8080/jpa/users/${username}/accounts`, {
      accountName: accountNameRegister,
      deposits: depositsRegister,
      asOfDate: asOfDateRegister,
    }).then((response) => {
      console.log(response);
    });
    setMessage({
      message: `The new account has been successfully added!`,
    });
  };

  return (
    <div className="base-container">
      {/* ref={this.props.containerRef} above*/}
      {message.message && (
        <div className="alert alert-success">{message.message}</div>
      )}
      <br />
      <div className="header">Add new account</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="accountName">Account Name</label>
            <input
              type="text"
              name="accountName"
              placeholder="account name"
              onChange={(e) => {
                setAccountNameRegister(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="deposits">Balance</label>
            <input
              type="number"
              name="deposits"
              placeholder="balance"
              onChange={(e) => {
                setDepositsRegister(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="asOfDate">As of</label>
            <input
              type="date"
              name="asOfDate"
              placeholder="As of date"
              onChange={(e) => {
                setAsOfDateRegister(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-success" onClick={register}>
        Save
      </button>
    </div>
  );
}

export default AddNewAccount;
