import React from "react";

const GreenLight = ({ isActive, timer }) => (
  <div className="light-timer-box">
    <div className={`light green ${isActive ? "on" : ""}`}></div>
    <div className="timer-box">{timer} s</div>
  </div>
);

export default GreenLight;
