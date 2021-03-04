/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import AuthenticationService from "../../components/authentication/AuthenticationService";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import ReloadPage from "../../components/ReloadPage.js";
import logo from "../../assets/images/goldDollar.png";
import "./Header.css"

class Header extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return (
      <header className="header">
        <nav
          className="navbar navbar-expand-md navbar-dark bg-custom sticky-nav"
          style={{ fontSize: "24px" }}
        >
          <div>
            {isUserLoggedIn && (
              <div>
                <Link className="navbar-brand" to="/welcome/Tim">
                  <img src={logo} alt="manage my finances logo" />
                </Link>
              </div>
            )}
          </div>
          <ul className="navbar-nav">
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/users">
                  Users
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/accounts">
                  Accounts
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/budget-calculator">
                  Budget Calculator
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/transactions-home">
                  Transactions
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/reports">
                  Reports
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/vacations">
                  Vacations
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!isUserLoggedIn && (
              <li>
                <Link
                  className="nav-link"
                  to="/login"
                  onClick={withRouter && ReloadPage.refresh}
                >
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link
                  className="nav-link"
                  to="/logout"
                  onClick={
                    withRouter &&
                    ReloadPage.refresh &&
                    AuthenticationService.logout
                  }
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
