import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  sideOpen: false,
  sideDraw: false,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
