import React, {Component} from "react";
import "./ToggleButtons.css";

class ToggleButtons extends Component {

  render() {
    return (
      <>
        {/* <div className="btn-group btn-group-lg" role="group">
          <button
            type="button"
            className="btn"
            id="current"
            onClick={(e) => this.props.setFilterLastThirtyDays(true)}
          >
            30 Days{this.props.filterLastThirtyDays && "(selected)"}
          </button>
          <button
            type="button"
            className="btn"
            id="all"
            onClick={(e) => this.props.setFilterLastThirtyDays(false)}
          >
            Year{!this.props.filterLastThirtyDays && "(selected)"}
          </button>
        </div> */}

        <label className="switch">
          {
            <>
              {" "}
              <input
                type="checkbox"
                id="togBtn"
                onChange={(e) =>{
                  console.log(e.target.checked)
                  this.props.setFilterLastThirtyDays(e.target.checked)}}
                  checked={this.props.filterLastThirtyDays}
              />
              <div type="button" className="slider round">
                <span className="on">30 Days</span>
                <span className="off">Year</span>
              </div>
            </>
          }
        </label>
      </>
    );
            }
  }

export default ToggleButtons;
