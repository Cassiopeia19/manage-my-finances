/* eslint-disable no-lone-blocks */

import React, { Component } from "react";
import TextArea from "../components/formContainer/TextArea";
import Select from "../components/formContainer/Select";
import Button from "../components/formContainer/Button";
import CurrencyInput from "react-currency-input";
import { Form } from "react-bootstrap";

const accountNameOptions = ["Ally", "BOA", "Cash", "RCU", "VCU"];
const transactionTypeOptions = ["Deposit", "Withdrawal"];
const depositCategoryOptions = [
  "interest earned",
  "Janice",
  "Jennie",
  "payroll",
  "rewards"
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
  state = {
    amount: 0
  };

  handleFormSubmit = event => {
    event.preventDefault();
    //event.target.reset(); will reset the form upon submitting, but it wipes out most of the data within the object
    console.log("Submitting The Form...");

    const transactionformData = Object.fromEntries(
      [...event.target.elements].map(element => [
        element["name"],
        element["value"]
      ])
    );
    console.log("Form Contents", { transactionformData });

    //   ***** what do i need to do with the code below to have it post to the database?? *****
    // ******* also, the submitted form needs to update both the transactions list AND the accounts balance list ******
    // ******also, the submitted form needs to update the list of transactions within update/delete tab
    fetch("https://example.com", {
      method: "POST",
      body: JSON.stringify(transactionformData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      console.log("The remote resource has responded with", { response });
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  };

  handleFormReset = event => {
    this.setState({ amount: 0 });
  };

  handleAmountChange = (event, maskedValue, floatValue) => {
    this.setState({ amount: maskedValue });
  };

  handleTransactionTypeChange = event => {
    this.setState({ transactionType: event.target.value });
  };

  render() {
    console.log(this.state.transactionType);
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
          />
        </Form.Group>{" "}
        <Select
          title={"Account"}
          name={"accountName"}
          options={accountNameOptions}
          placeholder={"select an account"}
        />{" "}
        {/*Transaction type*/}
        <Select
          title={"Type"}
          name={"transactionType"}
          options={transactionTypeOptions}
          placeholder={"select type of transaction"}
          onChange={this.handleTransactionTypeChange}
        />{" "}
        {this.state.transactionType === "Deposit" ? (
          <Select
            title={"Deposit Category"}
            name={"depositCategory"}
            options={depositCategoryOptions}
            placeholder={"select deposit category"}
          />
        ) : (
          <Select
            title={"Withdrawal Category"}
            name={"withdrawalCategory"}
            options={withdrawalCategoryOptions}
            placeholder={"select withdrawal category"}
          />
        )}
        {/*Transaction Amount*/}
        <label>
        Amount  
        <CurrencyInput
          prefix="$ "
          decimalSeparator="."
          thousandSeparator=","
          name={"transactionAmount"}
          onChangeEvent={this.handleAmountChange}
          value={this.state.amount}
        />{" "}
        </label>
        {/* Notes */}
        <TextArea
          title={"Notes"}
          rows={5}
          name={"notes"}
          placeholder={"enter any transaction notes here"}
        />{" "}
        {/*Submit */}
        <Button
          className="btn btn-success"
          type="submit"
          theme={"primary"}
          title={"submit"}
          style={{
            margin: "10px 10px 10px 10px",
            backgroundColor: "forestgreen"
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
            color: "black"
          }}
        />{" "}
      </form>
    );
  }
}
