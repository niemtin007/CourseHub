import * as actionTypes from "./actionTypes";

export const openSidebar = () => {
  return {
    type: actionTypes.OPEN_SIDEBAR,
  };
};

export const drawOpen = () => {
  return {
    type: actionTypes.DRAW_SIDEBAR_OPEN,
  };
};

export const drawClose = () => {
  return {
    type: actionTypes.DRAW_SIDEBAR_CLOSE,
  };
};

export const darkTheme = (open) => {
  return {
    type: actionTypes.DARK_THEME,
    darkTheme: open,
  };
};

export const clearMessage = () => {
  return {
    type: actionTypes.CLEAR_MESSAGE,
    success: null,
    error: null,
  };
};
