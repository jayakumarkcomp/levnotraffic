// src/actions/resetTimer.js
export const resetTimer = (dispatch, time) => {
    dispatch({
      type: "RESET_TIMER",
      payload: time,
    });
  };
  