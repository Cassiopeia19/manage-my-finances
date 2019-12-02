import React, { Component } from "react";
import SelectBox from "./features/select-box/select-box";

class AddTransaction extends Component {
  //do i need a constructor for this component??

  /* constructor(props) {
    super(props);
    this.state = {
      accountId: this.props.match.params.accountId,
      accountName: "",
      transactionDate: moment(new Date()).format("YYYY-MM-DD"),
      transactionType: "",
      transactionCategory: "",
      transactionAmount: "",
      notes: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  } */
  render() {
    return (
      <>
        <div>
          <h1>Add Transactions</h1>
          <div style={{ margin: "50px 250px", position: "relative" }}>
            <h6 style={{ float: "left" }}>Select an account</h6>
            <br></br>
            <SelectBox
              // would like to add default value of "select an option", but nothing tried has succeeded
              name="accountName[accountId]"
              items={[
                { defaultValue: "" },
                { value: "Ally", id: 1 },
                { value: "BOA", id: 2 },
                { value: "Cash", id: 3 },
                { value: "RCU", id: 4 },
                { value: "VCU", id: 5 }
              ]}
            />
          </div>
        </div>
      </>
    );
  }
}

export default AddTransaction;
