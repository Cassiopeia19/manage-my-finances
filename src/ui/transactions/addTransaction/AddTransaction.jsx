import React, { Component } from "react";
import { render } from "react-dom"
import FormContainer from "./containers/FormContainer";
import Alien from "../../../components/alien/Alien"
import { Container } from "reactstrap";

const styles= {
  fontFamily: "sans-serif",
  textAlign: "center",  
};

class AddTransaction extends Component {
  render() {
    return (
      <>
        <div className="form-center">
          <div className="form-group">
            <Container fluid>
              <Alien />
            </Container>
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