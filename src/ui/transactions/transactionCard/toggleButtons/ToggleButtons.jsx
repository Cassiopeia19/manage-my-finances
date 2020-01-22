//https://www.youtube.com/watch?v=akxsFgM7DPA

import React, { Component } from "react";

import "./ToggleButtons.css";

class ToggleButtons extends Component {


  render() {
    return (
      <div className="btn-group btn-group-lg" role="group">
        <button type="button" className="btn" id="toggle1" >
          Current
        </button>
        <button type="button" className="btn" id="toggle2">
          All
        </button>
      </div>      
    );
  }
}

export default ToggleButtons
