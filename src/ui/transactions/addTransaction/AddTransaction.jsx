import React, { Component } from "react";
import { render } from "react-dom"
import FormContainer from "./containers/TransactionsFormContainer";

const styles= {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class AddTransaction extends Component {
  render() {
    return (
      <>
        <div className="form-center">
          <div className="form-group">
            <div className="col-md-6" {...styles}>
              <FormContainer />
            </div>
          </div>
        </div>
      </>
    );
  }
}
render (<AddTransaction />, document.getElementById("root"));

export default AddTransaction