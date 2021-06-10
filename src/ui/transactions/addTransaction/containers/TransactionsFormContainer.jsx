/* eslint-disable no-lone-blocks */

import React, { Component } from "react";
import Select from "../components/Select";
import Select2 from "../components/Select2"
import Button from "../components/Button";
import CurrencyInput from "react-currency-input";
import { Form } from "react-bootstrap";
import AuthenticationService from "../../../../components/authentication/AuthenticationService"

const accountNameOptions = [
  { value: 1001, text: "Ally" },
  { value: 1002, text: "BOA" },
  { value: 1003, text: "Cash" },
  { value: 1004, text: "RCU" },
  { value: 1005, text: "VCU" },
];
const transactionTypeOptions = ["deposit", "withdrawal"];
const depositCategoryOptions = [
  "opening balance",
  "interest earned",
  "Janice",
  "Jennie",
  "payroll",
  "rewards",
  "misc"
];

const withdrawalCategoryOptions = [
  "bank fees",
  "cable/internet",
  "cellphone",
  "car insurance",
  "car maintenance",
  "car payment",
  "car parts",
  "car repairs",
  "car washes",
  "Cathy",
  "church donations",
  "electric",
  "entertainment",
  "Erin & Dulany",
  "garbage",
  "gas bill",
  "gasoline",
  "groceries",
  "home owners insurance",
  "home maintenance",
  "home repairs",
  "Janice",
  "Jennie",
  "Jessica",
  "medical bills",
  "misc",
  "mortgage",
  "pest control",
  "personal property taxes",
  "property taxes",
  "student loans",
  "water/sewer"
];

export default class TransactionsFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }

  state = {
    transactionAmount: 0,
    notes: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Your transaction has successfully been added");
    console.log("Submitting The Form...");

    const transaction = Object.fromEntries(
      [...event.target.elements].map((element) => [
        element["name"],
        element["value"],
      ])
    );
    console.log("Form Contents", transaction);

    // ******* the submitted form needs to update the accounts balance list ******

    let username = AuthenticationService.getLoggedInUsername();
    
    fetch(`http://localhost:8080/jpa/users/${username}/transactions`, {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        transactionDate: this.state.transactionDate,
        transactionType: this.state.transactionType,
        depositCategory: this.state.depositCategory,
        withdrawalCategory: this.state.withdrawalCategory,
        transactionAmount: this.state.transactionAmount,
        notes: this.state.notes,
        account: ({
          id: this.state.accountId,
          username: this.state.username,
          accountName: this.state.accountName,
          asOfDate: this.state.asOfDate
        })
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.text())
      .then((data) => console.log(data));
  };

  handleFormReset = (e) => {
    this.setState({ transactionAmount: 0, notes: "" });
  };

  handleTransactionDateChange = (event) => {
    this.setState({ transactionDate: event.target.value });
  };

  handleAccountNameChange = (event) => {
    this.setState({ accountId: event.target.value });
  };

  handleTransactionTypeChange = (event) => {
    this.setState({ transactionType: event.target.value });
  };

  handleDepositCategoryChange = (event) => {
    this.setState({ depositCategory: event.target.value });
  };

  handleWithdrawalCategoryChange = (event) => {
    this.setState({ withdrawalCategory: event.target.value });
  };

  handleTransactionAmountChange = (event, maskedValue, floatValue) => {
    this.setState({ transactionAmount: floatValue });
  };

  handleNotesChange = (event) => {
    this.setState({ notes: event.target.value });
  };

  render() {
    return (
      <form
        onSubmit={this.handleFormSubmit}
        onReset={this.handleFormReset}
        className="container-fluid p-5 my-3 border bg-dark text-white"
        style={{ textalign: "left", fontSize: "22px", margin: "370px" }}
      >
        <Form.Group controlid="transactionDate">
          <Form.Label>Transaction Date</Form.Label>
          <Form.Control
            type="date"
            name="transactionDate"
            required
            placeholder="transactionDate"
            onChange={this.handleTransactionDateChange}
          />
        </Form.Group>{" "}
        <Select2
          title={"Account"}
          name={"accountId"}
          options={accountNameOptions}
          placeholder={"select an account"}
          onChange={this.handleAccountNameChange}
        />{" "}
        {/*Transaction type*/}
        <Select
          title={"Type"}
          name={"transactionType"}
          options={transactionTypeOptions}
          placeholder={"select type of transaction"}
          onChange={this.handleTransactionTypeChange}
        />{" "}
        {this.state.transactionType === "deposit" ? (
          <Select
            title={"Deposit Category"}
            name={"depositCategory"}
            options={depositCategoryOptions}
            placeholder={"select deposit category"}
            onChange={this.handleDepositCategoryChange}
          />
        ) : (
          <Select
            title={"Withdrawal Category"}
            name={"withdrawalCategory"}
            options={withdrawalCategoryOptions}
            placeholder={"select withdrawal category"}
            onChange={this.handleWithdrawalCategoryChange}
          />
        )}
        {/*Transaction Amount*/}
        <div>Amount</div>
        <label>
          <CurrencyInput
            // prefix="$ "
            // decimalSeparator="."
            // thousandSeparator=","
            name={"transactionAmount"}
            onChangeEvent={this.handleTransactionAmountChange}
            value={this.state.transactionAmount}
          />{" "}
        </label>
        <br />
        {/* Notes */}
        <div>Notes</div>
        <textarea
          id="noter-text-area"
          rows={5}
          name={"notes"}
          placeholder={"enter any transaction notes here"}
          value={this.state.notes}
          onChange={this.handleNotesChange}
          style={{
            resize: "none",
            webkitBoxSizing: "border-box",
            mozBoxSizing: "border-box",
            boxSizing: "border-box",
            width: "100%",
          }}
        />
        <br />
        <center>
          {/*Submit */}
          <Button
            className="btn btn-success"
            type="submit"
            theme={"primary"}
            title={"submit"}
            style={{
              margin: "10px 10px 10px 10px",
              backgroundColor: "forestgreen",
            }}
          />{" "}
          {/* Clear the form */}
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
      </form>
    );
  }
}
