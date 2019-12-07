/* eslint-disable no-lone-blocks */

import React, {Component, useState} from 'react';   
import TextArea from '../components/TextArea';  
import Select from '../components/Select';
import Button from '../components/Button'
import CurrencyInput from "react-currency-input";
import DatePicker from "react-datepicker"

export default class FormContainer extends Component {
                 constructor(props) {
                   super(props);

                   this.state = {
                     newUser: {
                       transactionDate: new Date(),
                       accountName: "",
                       transactionType: "",
                       depositCategory: "",
                       withdrawalCategory: "",
                       transactionAmount: "",
                       notes: ""
                     },
                     accountNameOptions: ["Ally", "BOA", "Cash", "RCU", "VCU"],
                     transactionTypeOptions: ["Deposit", "Withdrawal"],
                     depositCategoryOptions: [
                       "interest earned",
                       "Janice",
                       "Jennie",
                       "payroll",
                       "rewards"
                     ],
                     withdrawalCategoryOptions: [
                       "bank fees",
                       "cable",
                       "cellphone",
                       "car insurance",
                       "car maintenance",
                       "car payment",
                       "Cathy",
                       "electric",
                       "entertainment",
                       "garbage",
                       "gas bill",
                       "gasoline",
                       "groceries",
                       "misc",
                       "mortgage",
                       "pest control",
                       "personal property taxes",
                       "property taxes",
                       "water/sewer"
                     ]
                   };

                  //  this.handleTransactionDate = this.handleTransactionDate.bind(
                  //    this
                  //  );
                   this.handleAccountName = this.handleAccountName.bind(this);
                   this.handleTransactionType = this.handleTransactionType.bind(
                     this
                   );
                   this.handleDepositCategory = this.handleDepositCategory.bind(
                     this
                   );
                   this.handleWithdrawalCategory = this.handleWithdrawalCategory.bind(
                     this
                   );
                  //  this.handleTransactionAmount = this.handleTransactionAmount.bind(
                  //    this
                  //  );
                   this.handleInput = this.handleInput.bind(this);
                   this.handleTextArea = this.handleTextArea.bind(this);

                   this.handleFormSubmit = this.handleFormSubmit.bind(this);
                   this.handleClearForm = this.handleClearForm.bind(this);
                   this.handleChange = this.handleChange.bind(this);
                 }

                 handleChange = date => {
                   this.setState({
                     transactionDate: date
                   });
                 };

                 handleAccountName(e) {
                   let value = e.target.value;
                   this.setState(
                     prevState => ({
                       newUser: { ...prevState.newUser, accountName: value }
                     }),
                     () => console.log(this.state.newUser)
                   );
                 }

                 handleTransactionType(e) {
                   let value = e.target.value;
                   this.setState(
                     prevState => ({
                       newUser: { ...prevState.newUser, transactionType: value }
                     }),
                     () => console.log(this.state.newUser)
                   );
                 }

                 handleDepositCategory(e) {
                   let value = e.target.value;
                   this.setState(
                     prevState => ({
                       newUser: { ...prevState.newUser, depositCategory: value }
                     }),
                     () => console.log(this.state.newUser)
                   );
                 }

                 handleWithdrawalCategory(e) {
                   let value = e.target.value;
                   this.setState(
                     prevState => ({
                       newUser: {
                         ...prevState.newUser,
                         withdrawalCategory: value
                       }
                     }),
                     () => console.log(this.state.newUser)
                   );
                 }

                 handleInput(e) {
                   let value = e.target.value;
                   let name = e.target.name;
                   this.setState(
                     prevState => ({
                       newUser: { ...prevState.newUser, [name]: value }
                     }),
                     () => console.log(this.state.newUser)
                   );
                 }

                 handleTextArea(e) {
                   let value = e.target.value;
                   this.setState(
                     prevState => ({
                       newUser: {
                         ...prevState.newUser,
                         notes: value
                       }
                     }),
                     () => console.log(this.state.newUser)
                   );
                 }

                 handleFormSubmit(e) {
                   e.preventDefault();
                   let userData = this.state.newUser;

                   //   ***** what do i need to do with the code below to have it post to the database?? *****
                   // ******* also, the submitted form needs to update both the transactions list AND the accounts balance list ******
                   // ******also, the submitted form needs to update the list of transactions within update/delete tab
                   fetch("http://example.com", {
                     method: "POST",
                     body: JSON.stringify(userData),
                     headers: {
                       Accept: "application/json",
                       "Content-Type": "application/json"
                     }
                   }).then(response => {
                     response.json().then(data => {
                       console.log("Successful" + data);
                     });
                   });
                 }

                 handleClearForm(e) {
                   e.preventDefault();
                   this.setState({
                     newUser: {
                       transactionDate: "",
                       accountName: "",
                       transactionType: "",
                       depositCategory: "",
                       withdrawalCategory: "",
                       transactionAmount: "",
                       notes: ""
                     }
                   });
                 }

                 render() {
                   return (
                     <form
                       onSubmit={this.handleFormSubmit}
                       className="container-fluid"
                     >
                       <div form-group>
                         Transaction Date
                         {() => {
                           const [
                             transactionDate,
                             setTransactionDate
                           ] = useState(new Date());
                           return (
                             <DatePicker
                               selected={transactionDate}
                               onChange={date => setTransactionDate(date)}
                               monthsShown={2}
                             />
                           );
                         }}
                       </div>{" "}
                       <Select
                         title={"Account"}
                         name={"accountName"}
                         options={this.state.accountNameOptions}
                         value={this.state.newUser.accountName}
                         placeholder={"select an account"}
                         handleChange={this.handleInput}
                       />{" "}
                       {/*Transaction type*/}
                       <Select
                         title={"Type"}
                         name={"transactionType"}
                         options={this.state.transactionTypeOptions}
                         value={this.state.newUser.transactionType}
                         placeholder={"select type of transaction"}
                         handleChange={this.handleInput}
                       />{" "}
                       {/*Deposit category*/}
                       <Select
                         title={"Deposit Category"}
                         name={"depositCategory"}
                         options={this.state.depositCategoryOptions}
                         value={this.state.newUser.depositCategory}
                         placeholder={"select deposit category"}
                         handleChange={this.handleInput}
                       />{" "}
                       {/*Withdrawal category*/}
                       <Select
                         title={"Withdrawal Category"}
                         name={"withdrawalCategory"}
                         options={this.state.withdrawalCategoryOptions}
                         value={this.state.newUser.withdrawalCategory}
                         placeholder={"select withdrawal category"}
                         handleChange={this.handleInput}
                       />{" "}
                       {/*Transaction Amount*/}
                       <label>
                         Amount
                         <CurrencyInput
                           prefix="$ "
                           decimalSeparator="."
                           thousandSeparator=","
                           name={"transactionAmount"}
                           value={this.state.newUser.transactionAmount}
                           handleChange={this.handleInput}
                         />{" "}
                       </label>
                       {/* Notes */}
                       <TextArea
                         title={"Notes"}
                         rows={5}
                         value={this.state.newUser.notes}
                         name={"notes"}
                         handleChange={
                           this.handleTextArea && this.state.newUser.notes
                         }
                         placeholder={"enter any transaction notes here"}
                       />{" "}
                       <Button
                         className="btn btn-success"
                         action={this.handleFormSubmit}
                         type={"primary"}
                         title={"submit"}
                         style={{
                           margin: "10px 10px 10px 10px",
                           backgroundColor: "forestgreen"
                         }}
                       />{" "}
                       {/*Submit */}
                       <Button
                         className="btn btn-warning"
                         action={this.handleClearForm}
                         type={"secondary"}
                         title={"reset form"}
                         style={{
                           margin: "10px 10px 10px 10px",
                           backgroundColor: "#ffce42",
                           color: "black"
                         }}
                       />{" "}
                       {/* Clear the form */}
                     </form>
                   );
                 }
               }
               

