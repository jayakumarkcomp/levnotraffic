// src/components/TrafficLight.js
import React, { useEffect, useContext } from "react";
import GreenLight from "./GreenLight";
import YellowLight from "./YellowLight";
import RedLight from "./RedLight";
import { TrafficLightContext } from "../context/trafficLightContext";
import { changeLight } from "../actions/changeLight";
import { resetTimer } from "../actions/resetTimer";

const TrafficLight = () => {
  const { state, dispatch } = useContext(TrafficLightContext);

  useEffect(() => {
    const handleLightChange = () => {
      let newLight = state.currentLight;
      const lightTimers = { red: 7, yellow: 3, green: 10 }; // Default durations for lights

      if (state.pedestrianRequest) {
        newLight = "red"; // Set light to red for pedestrian crossing
        dispatch({ type: "RESET_PEDESTRIAN_REQUEST" });
        resetTimer(dispatch, 5); // Set additional time for pedestrian crossing
      } else {
        // Default light sequence
        if (state.currentLight === "green") {
          newLight = "yellow";
        } else if (state.currentLight === "yellow") {
          newLight = "red";
        } else if (state.currentLight === "red") {
          newLight = "green";
        }
      }

      // Change the light and set the timer for the new light
      changeLight(dispatch, newLight);
      resetTimer(dispatch, lightTimers[newLight]);
    };

    const interval = setInterval(() => {
      if (state.timers[state.currentLight] <= 0) {
        handleLightChange();
      } else {
        resetTimer(dispatch, state.timers[state.currentLight] - 1);
      }
    }, 1000); // Interval for timer update

    return () => clearInterval(interval);
  }, [state, dispatch]);

  return (
    <div className="traffic-light">
      <RedLight isActive={state.currentLight === "red"} timer={state.timers.red} />
      <YellowLight isActive={state.currentLight === "yellow"} timer={state.timers.yellow} />
      <GreenLight isActive={state.currentLight === "green"} timer={state.timers.green} />
    </div>
  );
};

export default TrafficLight;
