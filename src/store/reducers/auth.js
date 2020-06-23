import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  success: null,
  error: null,
  loading: false,
  group: "GP08",
  accountName: null,
  authRedirectPath: "/",
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, success: null, loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.authData.accessToken,
    accountName: action.authData.taiKhoan,
    error: null,
    success: action.message,
    loading: false,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null });
};

// const setAuthRedirectPath = (state, action) => {
//   return updateObject(state, { authRedirectPath: action.path });
// };

const chooseGroup = (state, action) => {
  return updateObject(state, {
    group: action.group,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);

    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);

    case actionTypes.CHOOSE_GROUP:
      return chooseGroup(state, action);

    // case actionTypes.SET_AUTH_REDIRECT_PATH:
    //   return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default reducer;
