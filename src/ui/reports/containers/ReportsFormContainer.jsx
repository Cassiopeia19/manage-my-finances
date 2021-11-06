import React, { Component } from "react";
import Button from "../components/Button";
import ButtonTwo from "../components/ButtonTwo"
import { Form } from "react-bootstrap";
import ReportType from "../components/radioButton/ReportType";
import ReportTimeframe from "../components/radioButton/ReportTimeframe";
import CarCheckbox from "../components/checkbox/CarCheckbox";
import AccountCheckbox from "../components/checkbox/AccountCheckbox";
import FamilyCheckbox from "../components/checkbox/FamilyCheckbox";
import HomeCheckbox from "../components/checkbox/HomeCheckbox";
import UtilitiesCheckbox from "../components/checkbox/UtilitiesCheckbox";
import Misc from "../components/checkbox/MiscCheckbox";
import AccountRelated from "../components/checkbox/AccountRelatedCheckbox";
import moment from "moment";
import FormSerialize from "form-serialize";

export default class ReportsFormContainer extends Component {
  state = {
    amount: 0,
    beginningDate: moment(),
    endDate: moment(),
    reportTimeframe: null,
    //  transactions: [],
    reportType: null,
    transactionTypeChoice: null,
  };

  populateEndingDate = () => {
    let endDate = null;

    if (this.state.reportTimeframe === "monthly") {
      endDate = moment(this.state.beginningDate).add(1, "months");
    } else {
      endDate = moment(this.state.beginningDate).add(1, "years");
    }
    this.setState({ endDate });
    return endDate;
  };

  handleBeginningDateChange = (event) => {
    this.setState({ beginningDate: event.target.value }, () =>
      this.populateEndingDate()
    );
  };

  handleReportTimeframeChange = (event) => {
    this.setState({ reportTimeframe: event.target.value }, () =>
      this.populateEndingDate()
    );
  };

  handleReportTypeChange = (event) => {
    this.setState({ reportType: event.target.value }, () => {
      this.matchReportType();
    });
  };

  matchReportType = () => {
    let transactionTypeChoice = null;

    if (this.state.reportType === "deposits") {
      transactionTypeChoice = "deposit"
    } else {
      transactionTypeChoice = "withdrawal"
    }
    this.setState({ transactionTypeChoice });
    return transactionTypeChoice;
  };

  handleFormReset = () => {
    this.form.reset();
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    //event.target.reset(); will reset the form upon submitting, but it wipes out most of the data within the object
    console.log("Submitting The Form...");

    const formData = FormSerialize(event.target, { hash: true });
    console.log("Form Contents", { formData });
  };

  render() {
    return (
      <>
        <form
          onSubmit={this.handleFormSubmit}
          onReset={this.handleFormReset}
          className="container-fluid p-5 my-3 border bg-dark text-white"
          style={{
            textAlign: "left",
            fontSize: "22px",
            margin: "275px",
            height: "2025px",
            width: "875px",
          }}
        >
          <center>
            <h1>Report Options</h1>
          </center>
          <div
            style={{
              width: "40%",
              float: "left",
              padding: "20px 10px",
            }}
          >
            <ReportTimeframe onChange={this.handleReportTimeframeChange} />
            {/* is it because of 'controlid' that the begDate field is mandatory prior to reset form?  */}
            <Form.Group controlid="begDate">
              <Form.Label>Beginning</Form.Label>
              <Form.Control
                type="date"
                name="begDate"
                required
                onChange={this.handleBeginningDateChange}
              />
              <Form.Label>Ending</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                disabled
                value={this.state.endDate.format("YYYY-MM-DD")}
              />
            </Form.Group>{" "}
            <CarCheckbox />
            <FamilyCheckbox />
            <Misc style={{ position: "center" }} />
          </div>
          <div
            style={{
              width: "40%",
              float: "right",
              padding: "20px 10px",
            }}
          >
            <ReportType onChange={this.handleReportTypeChange} />
            <AccountCheckbox />
            <AccountRelated />
            <HomeCheckbox />
            <UtilitiesCheckbox />
            {/* Submit the form */}
            <ButtonTwo
              type="submit"
              theme={"primary"}
              title={"run report"}
              beginningDate={this.state.beginningDate}
              endDate={this.state.endDate}
              transactionTypeChoice={this.state.transactionTypeChoice}
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
          </div>
        </form>
      </>
    );
  }
}
