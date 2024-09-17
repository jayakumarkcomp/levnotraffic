// src/components/PedestrianButton.js
import React, { useContext } from "react";
import { requestCrossing } from "../actions/requestCrossing";
import { TrafficLightContext } from "../context/trafficLightContext";

const PedestrianButton = () => {
  const { state, dispatch } = useContext(TrafficLightContext);

  const handleClick = () => {
    requestCrossing(dispatch);
  };

  // Button text changes based on the pedestrian request status
  const buttonText = state.pedestrianRequest ? "Wait" : "Request Pedestrian Crossing";

  return (
    <button 
      className="pedestrian-button" 
      onClick={handleClick} 
      disabled={state.pedestrianRequest} // Disable button if request is active
    >
      {buttonText}
    </button>
  );
};

export default PedestrianButton;
