import React, { Component } from "react";
import { render } from "react-dom";
import ReportsFormContainer from "./containers/ReportsFormContainer";

class Reports extends Component {
  render() {
    return (
      <div className="col-md-6">
        <ReportsFormContainer />
      </div>
    );
  }
}

render(<Reports />, document.getElementById("root"));

export default Reports