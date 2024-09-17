import React from "react";

const RedLight = ({ isActive, timer }) => (
  <div className="light-timer-box">
    <div className={`light red ${isActive ? "on" : ""}`}></div>
    <div className="timer-box">{timer} s</div>
  </div>
);

export default RedLight;
