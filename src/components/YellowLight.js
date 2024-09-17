import React from "react";

const YellowLight = ({ isActive, timer }) => (
  <div className="light-timer-box">
    <div className={`light yellow ${isActive ? "on" : ""}`}></div>
    <div className="timer-box">{timer} s</div>
  </div>
);

export default YellowLight;
