import React, { Component } from "react";
import TransactionsTabsHeader from "../transactionsTabsHeader/TransactionsTabsHeader.jsx";
import "./TransactionsHome.css";

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
