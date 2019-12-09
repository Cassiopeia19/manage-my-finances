import React, { Component } from "react";
import "./Alien.css";

export default class Alien extends Component {
  handleMouseMove = e => {
    const eyes = document.querySelector(".eyes");
    const mouseX = eyes.getBoundingClientRect().left;
    const mouseY = eyes.getBoundingClientRect().top;
    const radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
    const rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
    eyes.style.transform = `rotate(${rotationDegrees}deg)`;
  };

  render() {
    return (
      <>
        <form className="container-fluid">
          <div className="ufo alien" onMouseMove={this.handleMouseMove}>
            <div className="monster" style={{ color: "#7cb342" }}>
              <div className="body">
                <div className="ear" />
                <div className="ear" />
                <div className="vampi-mouth">
                  <div className="vampi-tooth" />
                </div>
              </div>
              <div className="eye-lid">
                <div className="eyes">
                  <div className="eye" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}
