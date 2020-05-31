import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Idler.css";
import Login from "../login/Login";

class Idler extends React.Component {

  render() {
    return (
      <div className="Idler">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/" render={(props) => <Layout {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

Idler.propTypes = {
  match: PropTypes.any.isRequired,
  history: PropTypes.func.isRequired,
};

export default Idler;
