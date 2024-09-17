// src/actions/changeLight.js
export const changeLight = (dispatch, newLight) => {
    dispatch({
      type: "CHANGE_LIGHT",
      payload: newLight,
    });
  };
  