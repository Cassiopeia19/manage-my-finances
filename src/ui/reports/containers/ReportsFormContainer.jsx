import React, { Component } from "react";
import Button from "../components/Button";
import { Form } from "react-bootstrap";
import ReportType from '../components/radioButton/ReportType'
import ReportTimeframe from '../components/radioButton/ReportTimeframe'
import CarCheckbox from '../components/checkbox/CarCheckbox'
import AccountCheckbox from "../components/checkbox/AccountCheckbox"
import FamilyCheckbox from "../components/checkbox/FamilyCheckbox"
import HomeCheckbox from "../components/checkbox/HomeCheckbox"
import UtilitiesCheckbox from "../components/checkbox/UtilitiesCheckbox"
import Misc from "../components/checkbox/MiscCheckbox"
import AccountRelated from "../components/checkbox/AccountRelatedCheckbox"
import moment from 'moment'

export default class ReportsFormContainer extends Component {
                 state = {
                   amount: 0
                 };


                 populateEndingDate = event => {
                   console.log(event.target.value);
                   let endDate = {};

                   if (event.target.value.reportTimeframe === "monthly") {
                     endDate.date = moment()
                       .add(30, "days")
                       .calendar(event.target.value.begDate);
                   } else {
                     moment()
                       .add(365, "days")
                       .calendar(event.target.value.begDate);
                   }
                   this.setState({ endDate });
                   return endDate;
                 };

                 render() {
                   return (
                     <form
                       onSubmit={this.handleFormSubmit}
                       onReset={this.handleFormReset}
                       className="container-fluid p-5 my-3 border bg-dark text-white"
                       style={{
                         textAlign: "left",
                         fontSize: "22px",
                         margin: "275px",
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
                         <ReportTimeframe />
                         <Form.Group controlid="begDate">
                           <Form.Label>Beginning</Form.Label>
                           <Form.Control
                             type="date"
                             name="begDate"
                             required
                             onChange={this.populateEndingDate}
                           />
                           <Form.Label>Ending</Form.Label>
                           <Form.Control type="date" name="endDate" disabled />
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
        