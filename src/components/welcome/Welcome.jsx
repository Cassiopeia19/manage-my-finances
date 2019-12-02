import React, { Component } from "react";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <>
        <div className="welcome">
          <h1>Welcome Back, Tim!</h1>
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
