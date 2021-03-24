import React, { useState } from "react";
import "./AddNewAccount.scss";
import Axios from "axios";
import AuthenticationService from '../../../components/authentication/AuthenticationService'
import Button from "../../transactions/addTransaction/components/Button";

function AddNewAccount() {
  const [accountNameRegister, setAccountNameRegister] = useState("");
  const [depositsRegister, setDepositsRegister] = useState("");
  const [asOfDateRegister, setAsOfDateRegister] = useState("");
  const [message, setMessage] = useState("");
  const [state,setState] = useState("");

  const register = () => {
    let username = AuthenticationService.getLoggedInUsername();
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

  const handleFormReset = (e) => {
    setState({ username: "", password: "", email: "" });
  };

  return (
    <form className="base-container" onReset={handleFormReset}>
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
        <center>
          <button type="button" className="btn btn-success" onClick={register}>
            Save
          </button>
          <Button
            className="btn btn-warning"
            type="reset"
            theme={"secondary"}
            title={"reset form"}
            style={{
              margin: "10px 10px 10px 10px",
              backgroundColor: "#ffce42",
              color: "black",
            }}
          />{" "}
        </center>
      </div>
    </form>
  );
}

export default AddNewAccount;
