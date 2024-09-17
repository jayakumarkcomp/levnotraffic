import React from "react";
import TrafficLight from "./components/TrafficLight";
import PedestrianButton from "./components/PedestrianButton";
import { TrafficLightProvider } from "./context/trafficLightContext";
import "./styles/trafficLight.css";

const App = () => {
  return (
    <TrafficLightProvider>
      <div className="app">
        <TrafficLight />
        <PedestrianButton />
      </div>
    </TrafficLightProvider>
  );
};

export default App;
