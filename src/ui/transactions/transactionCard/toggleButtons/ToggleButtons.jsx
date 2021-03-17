//https://www.youtube.com/watch?v=cfHqScX0sMM

import React, {Component} from "react";
import "./ToggleButtons.css";

class ToggleButtons extends Component {
  // constructor() {
  //   super();
  //   this.state = { checked: false };
  // }
//date range for transactionslist
  // thirtyDays = (props) => {
  //   console.log("the past 30 days of transactions");
  //   var now = new Date();
  //   now.setDate(now.getDate() - 30);
  // };

  // year = (props) => {
  //   console.log("year of transactions");
  //   var now = new Date();
  //   now.setDate(now.getDate() - 365);
  // };

  // handleChange = (checked) => {
  //   console.log(checked);
  //   this.setState({ checked });
  //   if (checked) {
  //     this.thirtyDays();
  //   } else {
  //     this.year();
  //   }
  // };

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

//       <label>
//         <Switch
//           onChange={this.handleChange}
//           checked={this.state.checked}
//           width={140}
//           uncheckedIcon={
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: "100%",
//                 fontSize: 12,
//                 color: "white",
//                 paddingRight: 2,
//               }}
//             >
//               30 Days
//             </div>
//           }
//           checkedIcon={
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: "100%",
//                 fontSize: 12,
//                 color: "orange",
//                 paddingRight: 2,
//               }}
//             >
//               Year
//             </div>
//           }
//         />
//       </label>
//     );
//   }
// }


export default ToggleButtons;
