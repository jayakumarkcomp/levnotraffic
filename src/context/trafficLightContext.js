import React, { createContext, useReducer } from "react";
import {trafficLightReducer, initialState } from "./trafficLightReducer";

// Create Context
export const TrafficLightContext = createContext(initialState);

// Context Provider
export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};
