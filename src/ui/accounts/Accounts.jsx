import React, { Component } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AccountDataService from "../../api/AccountDataService.js";
import AuthenticationService from "../../components/authentication/AuthenticationService.js";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountId: this.props.match.params.accountId,
      accountName: "",
      balance: "",
      asOfDate: moment(new Date()).format("YYYY-MM-DD")
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    if (this.state.accountId === -1) {
      return;
    }
    let username = AuthenticationService.getLoggedInUserName();
    AccountDataService.retrieveAccount(username, this.state.accountId).then(
      response =>
        this.setState({
          accountName: response.data.accountName,
          balance: response.data.balance,
          asOfDate: moment(response.data.asOfDate).format("YYYY-MM-DD")
        })
    );
  }

  validate(values) {
    let errors = {};

    if (!values.accountName) {
      errors.accountName = "Enter an account name";
    } else if (values.accountName.length < 3) {
      errors.accountName = "Account name must be at least 3 characters";
    }

    if (!values.balance) {
      errors.balance = "Enter a balance";
    }

    if (!moment(values.asOfDate).isValid()) {
      errors.asOfDate = "Select a date";
    }

    return errors;
  }

  onSubmit(values) {
    let username = AuthenticationService.getLoggedInUserName();

    let account = {
      accountId: this.state.accountId,
      accountName: values.accountName,
      balance: values.balance,
      asOfDate: values.asOfDate
    };

    if (this.state.accountId === -1) {
      AccountDataService.createAccount(username, account).then(() =>
        this.props.history.push("/accounts")
      );
    } else {
      AccountDataService.updateAccount(
        username,
        this.state.accountId,
        account
      ).then(() => this.props.history.push("/accounts"));
    }

    console.log(values);
  }

  render() {
    let { accountName, balance, asOfDate } = this.state;

    return (
      <div>
        <h1>Account Updates/Additions</h1>
        <div className="container">
          <Formik
            initialValues={{ accountName, balance, asOfDate }}
            onSubmit={this.onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validate={this.validate}
            enableReinitialize={true}
          >
            {props => (
              <Form>
                <ErrorMessage
                  name="accountName"
                  component="div"
                  className="alert alert-danger"
                />
                <ErrorMessage
                  name="balance"
                  component="div"
                  className="alert alert-danger"
                />
                <ErrorMessage
                  name="asOfDate"
                  component="div"
                  className="alert alert-danger"
                />

                <fieldset className="form-group">
                  <label>Account Name</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="accountName"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Balance</label>
                  <Field
                    className="form-control"
                    type="number"
                    name="balance"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>As of</label>
                  <Field className="form-control" type="date" name="asOfDate" />
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Account;
