import React, { Component } from "react";
import TransactionsTabsHeader from "../../containers/transactionsTabsHeader/TransactionsTabsHeader.jsx";
import "./Transactions.css";

class TransactionsHome extends Component {
  render() {
    return (
      <div id="backgroundImage">
        <TransactionsTabsHeader />
      </div>
    );
  }
}

export default TransactionsHome;
