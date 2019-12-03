/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import "./Reports.css";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: []
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    console.log(firstName, lastName);
    if (firstName.length > 0 && lastName.length > 0) {
      const person = `${firstName} ${lastName} `;
      this.setState({
        people: [...this.state.people, person],
        firstName: "",
        lastName: ""
      });
    }
  };

  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <label>
              Report Type
              <input
                type="text"
                name="reportType"
                value={this.state.reportType}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <button type="submit">submit</button>
          </form>
        </article>
        <article>
          <h1>people</h1>
          <div>{this.state.people}</div>
        </article>
      </section>
    );
  }
}

class Reports extends Component {
  render() {
    return <Form />;
  }
}

export default Reports;


