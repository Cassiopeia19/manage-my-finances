import React, { Component } from "react";
import TransactionsHeader from "../../containers/TransactionsHeader";
import "./Transactions.css";

class TransactionsHome extends Component {
  render() {
    return (
      <div id="backgroundImage">
        <TransactionsHeader />
      </div>
    );
  }
}

export default TransactionsHome;
