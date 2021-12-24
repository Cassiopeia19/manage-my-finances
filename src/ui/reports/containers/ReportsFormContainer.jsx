import React, { useState, useEffect, useReducer } from "react";
import Button from "../components/Button";
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
//import FormSerialize from "form-serialize";
import AuthenticationService from "../../../components/authentication/AuthenticationService";
import axios from "axios";
import Moment from "moment";
import { extendMoment } from "moment-range";
import generatePDF from "../services/reportGenerator";
import { ACTIONS, initialState, reducer } from "../components/reducer"

export default function ReportsFormContainer() {
 
  const [transactionTypeChoice, setTransactionTypeChoice] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [filteredChoices, setFilteredChoices] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getAllTransactions = async () => {
      try {
        let username = AuthenticationService.getLoggedInUsername();
        const response = await axios.get(
          `http://localhost:8080/jpa/users/${username}/transactions`
        );
        setTransactions(response.data);
      } catch (err) {
        console.log("error");
      }
    };
    getAllTransactions();
  }, []);

   useEffect(() => {
     let transactionTypeChoice = null;

     if (state.reportType === "deposits") {
       transactionTypeChoice = "deposit";
     } else {
       transactionTypeChoice = "withdrawal";
     }
     setTransactionTypeChoice(transactionTypeChoice);
   }, [state.reportType, transactionTypeChoice]);

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
  console.log({ filteredChoices });

  const moment = extendMoment(Moment);

  var startDate = new Date(state.beginningDate),
      endingDate = new Date(state.endDate),
      range = moment().range(startDate, endingDate);
      console.log("startDate: " + startDate + " endingDate: " + endingDate)

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

  return (
    <>
      <form
        onSubmit={(event) => {
          // const formData = FormSerialize(event.target, { hash: true });
          // console.log("Form Contents", { formData });
          console.log(filteredTransactions);
          event.preventDefault();
          generatePDF(filteredTransactions);
        }}
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
          <ReportTimeframe
            onChange={(e) =>
              dispatch({
                type: ACTIONS.SET_REPORT_TIMEFRAME,
                payload: e.target.value,
              })
            }
            value={state.reportTimeframe}
          />
          <Form.Group controlid="begDate">
            <Form.Label>Beginning</Form.Label>
            <Form.Control
              type="date"
              name="begDate"
              required
              onChange={(e) =>
                dispatch({
                  type: ACTIONS.SET_BEGINNING_DATE,
                  payload: e.target.value,
                })
              }
            />
            <Form.Label>Ending</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              disabled
              value={state.endDate}
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
          <ReportType
            onChange={(e) =>
              dispatch({
                type: ACTIONS.SET_REPORT_TYPE,
                payload: e.target.value,
              })
            }
            value={state.reportType}
          />
          <AccountCheckbox
            onChange={addToReport}
            filteredChoices={filteredChoices}
          />
          <AccountRelated
            onChange={addToReport}
            filteredChoices={filteredChoices}
          />
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
            transactionTypeChoice={transactionTypeChoice}
            filteredChoices={filteredChoices}
            style={{
              margin: "10px 10px 10px 10px",
              backgroundColor: "forestgreen",
            }}
          />{" "}
          {/* Clear the form */}
          <button
            className="btn btn-warning"
            type="reset"
            style={{
              margin: "10px 10px 10px 10px",
              backgroundColor: "#ffce42",
              color: "black",
            }}
            onClick={() =>
              dispatch({
                type: ACTIONS.RESET_FORM,
              })
            }
          >
            reset form
          </button>
        </div>
      </form>
    </>
  );
}
