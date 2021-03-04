//https://www.youtube.com/watch?v=akxsFgM7DPA

import React, { Component } from "react";

import "./ToggleButtons.css";

class ToggleButtons extends Component {

  thirtyDays() {
    console.log("the past 30 days of transactions")
    // event.Date.today()
    //   .add(-30)
    //   .days();
  }

  render() {
    return (
      // <div className="btn-group btn-group-lg" role="group">
      //   <button type="button" className="btn" id="current" onClick= {this.thirtyDays()}>
      //     Current
      //   </button>
      //   <button type="button" className="btn" id="all">
      //     All
      //   </button>
      // </div>
      <>
      <label className="switch">
      <input type="checkbox" id="togBtn" />
      <div className="slider round">
      
        <span className="on">All</span>
        <span className="off">Current</span>

      </div>
      </label>
      </>
    );
  }
}


export default ToggleButtons
