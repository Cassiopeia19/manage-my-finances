import React, { Component } from "react";
import UsersTabsHeader from "../usersTabsHeader/UsersTabsHeader.jsx";
import "./UsersHome.css";

class UsersHome extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      // <div id="backgroundImage">
        <UsersTabsHeader />
      // </div>
    );
  }
}

export default UsersHome;
