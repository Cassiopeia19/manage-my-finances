import React, { Component } from "react";
import { render } from "react-dom"
import FormContainer from "./containers/FormContainer";

const styles= {
  fontFamily: "sans-serif",
  textAlign: "center"
  
};

class AddTransaction extends Component {
  render() {
    return (
      <>
      <section className="col-md-6" {...styles} >
        <h3>Add Transaction Form</h3>
        <FormContainer />
      </section>
      <aside>
      review of transaction prior to submission
      </aside>
      </>
    );
  }
}
render (<AddTransaction />, document.getElementById("root"));

export default AddTransaction