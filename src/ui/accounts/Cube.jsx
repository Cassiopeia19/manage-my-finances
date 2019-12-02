import React from "react";

export default function Cube() {
  return (
    <div
      className="stage"
      style={{
        padding: "50px",
        width: "120px",
        height: "120px"
      }}
    >
      <div className="cubespinner" style={{ color: "#C5B358" }}>
        <div className="face1">$</div>
        <div className="face2">$</div>
        <div className="face3">$</div>
        <div className="face4">$</div>
        <div className="face5">$</div>
        <div className="face6">$</div>
      </div>
    </div>
  );
}
