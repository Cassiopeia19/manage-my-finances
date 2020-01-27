import React, { Component } from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

class Welcome extends Component {
 
  render() {
    return (
      <>
        <div className="welcome">
          <h1>Welcome Back, Tim!</h1>
          <Link to="/new-user"  className="btn"
            id="all"
            onClick={this.routeChange}
            style={{ position: "absolute", left: "100px", top: "150px" }}
          >
            Add new user
          </Link>
          <audio controls>
            <source
              src="http://sprott.physics.wisc.edu/wop/sounds/transport.wav"
              type="audio/wav"
            />
          </audio>
          <div id="stars-back">
            <div id="stars-front">
              <div id="planet"></div>
              <div id="spaceship"></div>
              <div id="planet2"></div>
            </div>
            {/* stars-front    */}
          </div>
          {/* stars-back */}
          <div className="sound"></div>
          {/* sound */}
        </div>
      </>
    );
  }
}

export default Welcome;