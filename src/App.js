import React, { Component } from "react";
import Routes from "./components/routes/Routes.jsx";
import "./App.css";
import "./bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import IdleTimerContainer from './components/IdleTimerContainer'

class App extends Component {
  render() {
    library.add(faKey);
    library.add(faKey);
    return (
      <div>
        <Routes />
        <IdleTimerContainer />
      </div>
    );
  }
}

export default App;