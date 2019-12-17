import React, { Component } from "react";
import Button from "../components/Button";
import { Form } from "react-bootstrap";
import ReportType from '../components/radioButton/ReportType.jsx'
import ReportTimeframe from '../components/radioButton/ReportTimeframe.jsx'
import CarCheckbox from '../components/checkbox/CarCheckbox'
import AccountCheckbox from "../components/checkbox/AccountCheckbox"
import FamilyCheckbox from "../components/checkbox/FamilyCheckbox"
import HomeCheckbox from "../components/checkbox/HomeCheckbox"
import UtilitiesCheckbox from "../components/checkbox/UtilitiesCheckbox"
import Misc from "../components/checkbox/Misc"
import AccountRelated from "../components/checkbox/AccountRelated"
import moment from 'moment'

class ReportsFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { }
    };
  

  populateEndingDate = ({ values }) => {
    let endDate = {};

    if (values.reportTimeframe === "monthly") {
      endDate.date = moment()
        .add(30, "days")
        .calendar(values.begDate);
    } else {
      moment()
        .add(365, "days")
        .calendar(values.begDate);
    }
    return endDate;
  }

  render() {
    console.log(this.state.reportType);
    return (
      <form
        onSubmit={this.handleFormSubmit}
        onReset={this.handleFormReset}
        className="container-fluid p-5 my-3 border text-white"
        style={{
          textAlign: "left",
          fontSize: "22px",
          margin: "275px",
          backgroundColor: "#1a6b1a",
          height: "1825px",
          width: "875px"
        }}
      >
        <center>
          <h1>Report Options</h1>
        </center>
        <div
          style={{
            width: "40%",
            float: "left",
            padding: "20px 10px"
          }}
        >
          <h3>Timeframe </h3>
          <ReportTimeframe />
          <Form.Group controlid="begDate">
            <Form.Label>Beginning</Form.Label>
            <Form.Control type="date" name="begDate" />
          </Form.Group>{" "}
          <Form.Group controlid="endDate">
            <Form.Label>Ending</Form.Label>
            <Form.Control type="date" name="endDate"/>
          </Form.Group>{" "}
          <CarCheckbox />
          <FamilyCheckbox />
          <Misc style={{ position: "center" }} />
        </div>
        <div
          style={{
            width: "40%",
            float: "right",
            padding: "20px 10px"
          }}
        >
          <h3>Report Type </h3>
          <ReportType />
          <AccountCheckbox />
          <AccountRelated />
          <HomeCheckbox />
          <UtilitiesCheckbox />
          {/* Submit the form */}
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
        </div>
      </form>
    );
  }
}
          
export default ReportsFormContainer
        