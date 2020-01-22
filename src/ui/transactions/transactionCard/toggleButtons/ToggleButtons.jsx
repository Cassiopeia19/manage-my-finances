//https://www.youtube.com/watch?v=akxsFgM7DPA

import React, { Component } from "react";

import "./ToggleButtons.css";

class ToggleButtons extends Component {

  thirtyDays() {
    console.log("30 days of transactions")
    // event.Date.today()
    //   .add(-30)
    //   .days();
  }

  render() {
    return (
      <div className="btn-group btn-group-lg" role="group">
        <button type="button" className="btn" id="current" onClick= {this.thirtyDays()}>
          Current
        </button>
        <button type="button" className="btn" id="all">
          All
        </button>
      </div>
    );
  }
}

export default ToggleButtons
