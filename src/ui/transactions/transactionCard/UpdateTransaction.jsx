/* eslint-disable no-lone-blocks */

import React, { Component } from "react";
import Select from "../addTransaction/components/Select";
import Button from "../addTransaction/components/Button";
import CurrencyInput from "react-currency-input";
import { Form } from "react-bootstrap";
import AuthenticationService from "../../../components/authentication/AuthenticationService";
import TransactionDataService from '../../../api/TransactionDataService'
import { Formik } from "formik";

const accountNameOptions = ["Ally", "BOA", "Cash", "RCU", "VCU"];
const transactionTypeOptions = ["Deposit", "Withdrawal"];
const depositCategoryOptions = [
  "interest earned",
  "Janice",
  "Jennie",
  "payroll",
  "rewards",
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
  "water/sewer",
];

class UpdateTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.transactionId,
      transactionDate: "",
      accountName: "",
      transactionType: "",
      depositCategory: "",
      withdrawalCategory: "",
      transactionAmount: "",
      notes: "",
    };
    console.log(this.props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    transactionAmount: "",
    notes: "",
  };

  componentDidMount() {
    let username = AuthenticationService.getLoggedInUsername();
    TransactionDataService.retrieveTransaction(username, this.state.id).then(
      (response) =>
        this.setState({
          transactionDate: response.data.transactionDate,
          accountName: response.data.accountName,
          transactionType: response.data.transactionType,
          depositCategory: response.data.depositCategory,
          withdrawalCategory: response.data.withdrawalCategory,
          transactionAmount: response.data.transactionAmount,
          notes: response.data.notes,
        })
    );
  }

  routeChange = () => {
    let path = `/transactions-home`;
    this.props.history.push(path);
  };

  onSubmit(values) {
    let username = AuthenticationService.getLoggedInUsername();

    let transaction = {
      id: this.state.id,
      transactionDate: values.transactionDate,
      accountName: values.accountName,
      transactionType: values.transactionType,
      depositCategory: values.depositCategory,
      withdrawalCategory: values.withdrawalCategory,
      transactionAmount: values.transactionAmount,
      notes: values.notes,
    };
    console.log(values);

    TransactionDataService.updateTransaction(
      username,
      this.state.id,
      transaction
    ).then(() => this.props.history.push(`/transactions/${transaction.id}`));
  }

  handleFormReset = (e) => {
    this.setState({ transactionAmount: "", notes: "" });
  };

  handleTransactionDateChange = (event) => {
    this.setState({ transactionDate: event.target.value });
  };

  handleAccountNameChange = (event) => {
    this.setState({ accountName: event.target.value });
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
    this.setState({ transactionAmount: maskedValue });
  };

  handleNotesChange = (event) => {
    this.setState({ notes: event.target.value });
  };

  render() {
    let {
      transactionDate,
      accountName,
      transactionType,
      depositCategory,
      withdrawalCategory,
      transactionAmount,
      notes,
    } = this.state;
    return (
      <Formik
        initialValues={{
          transactionDate,
          accountName,
          transactionType,
          depositCategory,
          withdrawalCategory,
          transactionAmount,
          notes,
        }}
        onSubmit={this.onSubmit && this.routeChange}
        onReset={this.handleFormReset}
        enableReinitialize={true}
      >
        <form
          className="container-fluid p-5 my-3 border bg-dark text-white"
          style={{ textalign: "left", fontSize: "22px" }}
        >
          <Form.Group controlid="transactionDate">
            <Form.Label>Transaction Date</Form.Label>
            <Form.Control
              type="date"
              name="transactionDate"
              required
              placeholder="transactionDate"
              onChange={this.handleTransactionDateChange}
              value={this.state.transactionDate || transactionDate}
            />
          </Form.Group>{" "}
          <Select
            title={"Account"}
            name={"accountName"}
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
          {this.state.transactionType === "Deposit" ? (
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
              prefix="$ "
              decimalSeparator="."
              thousandSeparator=","
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
      </Formik>
    );
  }
}

export default UpdateTransaction
