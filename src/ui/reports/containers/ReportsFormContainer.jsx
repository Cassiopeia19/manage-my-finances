import React, { Component } from "react";
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
import moment from "moment";
import FormSerialize from "form-serialize";

export default class ReportsFormContainer extends Component {
                 state = {
                   amount: 0,
                   beginningDate: moment(),
                   endDate: moment(),
                   reportTimeframe: null,
                 };

                 populateEndingDate = () => {
                   let endDate = null;

                   if (this.state.reportTimeframe === "monthly") {
                     console.log("first if comparison");

                     endDate = moment(this.state.beginningDate).add(
                       1,
                       "months"
                     );
                   } else {
                     endDate = moment(this.state.beginningDate).add(1, "years");
                   }
                   console.log(endDate);
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

                 handleFormReset = () => {
                   this.form.reset();
                 };

                 handleFormSubmit = (event) => {
                   event.preventDefault();
                   //event.target.reset(); will reset the form upon submitting, but it wipes out most of the data within the object
                   console.log("Submitting The Form...");

                   //  const transactionformData = Object.fromEntries(
                   //[...event.target.elements].map(element => [
                   //      element["name"],
                   //      element["value"]
                   //    ])
                   //  );
                   const formData = FormSerialize(event.target, { hash: true });
                   console.log("Form Contents", { formData });

                   //   ***** what do i need to do with the code below to have it post to the database?? *****
                   // ******* also, the submitted form needs to update both the transactions list AND the accounts balance list ******
                   // ******also, the submitted form needs to update the list of transactions within update/delete tab
                   fetch("https://example.com", {
                     method: "POST",
                     body: JSON.stringify(formData),
                     headers: {
                       Accept: "application/json",
                       "Content-Type": "application/json",
                     },
                   }).then((response) => {
                     console.log("The remote resource has responded with", {
                       response,
                     });
                     response.json().then((data) => {
                       console.log("Successful" + data);
                     });
                   });
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
                           onChange={this.handleReportTimeframeChange}
                         />
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
                           title={"run report"}
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
                   );
                 }
               }
