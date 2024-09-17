// src/context/trafficLightReducer.js
export const initialState = {
    currentLight: "green",
    pedestrianRequest: false,
    emergencyOverride: false,
    timers: {
      red: 7,
      yellow: 3,
      green: 10,
    },
  };
  
  export const trafficLightReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_LIGHT":
        return {
          ...state,
          currentLight: action.payload,
        };
      case "REQUEST_CROSSING":
        return {
          ...state,
          pedestrianRequest: true,
        };
      case "RESET_PEDESTRIAN_REQUEST":
        return {
          ...state,
          pedestrianRequest: false,
        };
      case "RESET_TIMER":
        return {
          ...state,
          timers: {
            ...state.timers,
            [state.currentLight]: action.payload,
          },
        };
      case "EMERGENCY_OVERRIDE":
        return {
          ...state,
          emergencyOverride: true,
        };
      default:
        return state;
    }
  };
  
  export default trafficLightReducer;
  