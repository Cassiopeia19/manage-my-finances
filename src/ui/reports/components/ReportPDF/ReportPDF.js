import React, { Component } from "react";
//import "./ReportPDF.css";
import User from "../User/User";

class ReportPDF extends Component {
  render() {
    const data = [
      { firstName: "John", lastName: "Smath" },
      { firstName: "Paul", lastName: "Smeth" },
      { firstName: "Cody", lastName: "Smith" },
      { firstName: "Jordan", lastName: "Smoth" },
      { firstName: "Jim", lastName: "Smuth" },
    ];

    return (
      <div className="App">
        <div className="pdf">
          {data.map((user) => (
            <User user={user} key={user.lastName} />
          ))}
        </div>
      </div>
    );
  }
}

export default ReportPDF;
