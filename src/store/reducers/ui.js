import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  sideOpen: false,
  sideDraw: false,
  darkTheme: null,
};

const openAnchor = (state, action) => {
  return updateObject(state, { sideOpen: !state.sideOpen });
};

const drawOpen = (state, action) => {
  return updateObject(state, { sideDraw: true });
};

const drawClose = (state, action) => {
  return updateObject(state, { sideDraw: false });
};

const darkTheme = (state, action) => {
  localStorage.setItem("darkTheme", JSON.stringify(action.darkTheme));
  return updateObject(state, { darkTheme: action.darkTheme });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DARK_THEME:
      return darkTheme(state, action);

    case actionTypes.OPEN_SIDEBAR:
      return openAnchor(state, action);

    case actionTypes.DRAW_SIDEBAR_OPEN:
      return drawOpen(state, action);

    case actionTypes.DRAW_SIDEBAR_CLOSE:
      return drawClose(state, action);

    default:
      return state;
  }
};

export default reducer;
