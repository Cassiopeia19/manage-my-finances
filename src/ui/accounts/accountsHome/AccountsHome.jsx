import React, { Component } from "react";
import AccountsTabsHeader from "../accountsTabsHeader/AccountsTabsHeader";
import "./AccountsHome.css";

class UsersHome extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      // <div id="backgroundImage">
      <AccountsTabsHeader />
      // </div>
    );
  }
}

export default UsersHome;
