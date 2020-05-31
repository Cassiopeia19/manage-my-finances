import React, { Component } from "react";
import TransactionsTabsHeader from "../transactionsTabsHeader/TransactionsTabsHeader.jsx";
import "./TransactionsHome.css";

class TransactionsHome extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div id="backgroundImage">
        <TransactionsTabsHeader />
      </div>
    );
  }
}

export default TransactionsHome;
