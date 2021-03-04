import React, { Component } from "react";
import { render } from "react-dom"
import TransactionsFormContainer from "./containers/TransactionsFormContainer";

const styles= {
  fontFamily: "sans-serif",
  textalign: "center"
};

class AddTransaction extends Component {
  render() {
    return (
      <>
        <div className="form-center">
          <div className="form-group">
            <div className="col-md-6" {...styles}>
              <TransactionsFormContainer />
            </div>
          </div>
        </div>
      </>
    );
  }
}
render (<AddTransaction />, document.getElementById("root"));

export default AddTransaction