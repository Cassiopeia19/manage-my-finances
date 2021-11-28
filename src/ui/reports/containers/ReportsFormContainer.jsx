import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import ButtonTwo from "../components/ButtonTwo";
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
import FormSerialize from "form-serialize";
import AuthenticationService from '../../../components/authentication/AuthenticationService'
import axios from 'axios'
import Moment from "moment";
import { extendMoment } from "moment-range";
import generatePDF from "../services/reportGenerator";

export default function ReportsFormContainer () {
  //const [amount,setAmount] = useState(0);
  const [beginningDate, setBeginningDate] = useState(Moment());
  const [endDate, setEndDate] = useState(Moment());
  const [reportTimeframe, setReportTimeframe] = useState(null);
  const [reportType, setReportType] = useState(null);
  const [transactionTypeChoice, setTransactionTypeChoice] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [filteredChoices, setFilteredChoices] = useState([]);

  useEffect(() => {
    const getAllTransactions = async () => {
      try {
        let username = AuthenticationService.getLoggedInUsername();
        const response = await axios.get(
          `http://localhost:8080/jpa/users/${username}/transactions`
        );
        // console.log({ response });
        setTransactions(response.data);
      } catch (err) {
        console.log("error");
      }
    };
    getAllTransactions();
  }, []);

  useEffect(() => {
    let endDate = null;

    if (reportTimeframe === "monthly") {
      endDate = Moment(beginningDate).add(1, "months");
    } else {
      endDate = Moment(beginningDate).add(1, "years");
    }
    setEndDate(endDate);
  }, [beginningDate, reportTimeframe]);

  useEffect(() => {
    let transactionTypeChoice = null;

    if (reportType === "deposits") {
      transactionTypeChoice = "deposit";
    } else {
      transactionTypeChoice = "withdrawal";
    }
    setTransactionTypeChoice(transactionTypeChoice);
  }, [reportType, transactionTypeChoice]);

  const handleBeginningDateChange = (event) => {
    setBeginningDate(event.target.value);
  };

  const handleReportTimeframeChange = (event) => {
    setReportTimeframe(event.target.value);
  };

  const handleReportTypeChange = (event) => {
    setReportType(event.target.value);
  };

  const addToReport = (checkboxes) => {
    //Array.isArray(checkboxes);
    // console.log(typeof checkboxes);
    const checkedBoxes = [];

    for (const [key, value] of Object.entries(checkboxes)) {
      if (value === true) {
        checkedBoxes.push(key);
      }
    }
    setFilteredChoices(checkedBoxes);
  };
  console.log({filteredChoices});

  const moment = extendMoment(Moment);

  var startDate = new Date(beginningDate),
    endingDate = new Date(endDate),
    range = moment().range(startDate, endingDate);

 var filteredTransactions = transactions.filter((transaction) => {
   if (transaction.transactionType != transactionTypeChoice) {
     return false;
   }

   if (range.contains(moment(transaction.transactionDate)) === false) {
     return false;
   }

    const isDepositCategory = filteredChoices.includes(
      transaction.depositCategory
    );
    const isWithdrawalCategory = filteredChoices.includes(
      transaction.withdrawalCategory
    );

    // filtered by deposit and withdrawl category
    if (!isDepositCategory && !isWithdrawalCategory) {
      return false;
    }
   return true;
 });

  const handleFormReset = () => {};

  const handleFormSubmit = (event) => {
    event.preventDefault();
    generatePDF(filteredTransactions);

    //event.target.reset(); will reset the form upon submitting, but it wipes out most of the data within the object
    //console.log("Submitting The Form...");

    const formData = FormSerialize(event.target, { hash: true });
    console.log("Form Contents", { formData });
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        onReset={handleFormReset}
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
          <ReportTimeframe onChange={handleReportTimeframeChange} />
          {/* is it because of 'controlid' that the begDate field is mandatory prior to reset form?  */}
          <Form.Group controlid="begDate">
            <Form.Label>Beginning</Form.Label>
            <Form.Control
              type="date"
              name="begDate"
              required
              onChange={handleBeginningDateChange}
            />
            <Form.Label>Ending</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              disabled
              value={endDate.format("YYYY-MM-DD")}
            />
          </Form.Group>{" "}
          <CarCheckbox
            onChange={addToReport}
            filteredChoices={filteredChoices}
          />
          <FamilyCheckbox
            onChange={addToReport}
            filteredChoices={filteredChoices}
          />
          <Misc
            style={{ position: "center" }}
            onChange={addToReport}
            filteredChoices={filteredChoices}
          />
        </div>
        <div
          style={{
            width: "40%",
            float: "right",
            padding: "20px 10px",
          }}
        >
          <ReportType onChange={handleReportTypeChange} />
          <AccountCheckbox />
          <AccountRelated />
          <HomeCheckbox
            onChange={addToReport}
            filteredChoices={filteredChoices}
          />
          <UtilitiesCheckbox
            onChange={addToReport}
            filteredChoices={filteredChoices}
          />
          {/* Submit the form */}
          <Button
            type="submit"
            theme={"primary"}
            title={"run report"}
            beginningDate={beginningDate}
            endDate={endDate}
            transactionTypeChoice={transactionTypeChoice}
            filteredChoices={filteredChoices}
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
        </div>
      </form>
    </>
  );
}

