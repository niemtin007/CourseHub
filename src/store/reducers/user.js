import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  userList: [],
  success: null,
  error: null,
  loading: false,
};

const userClearMessage = (state, action) => {
  return updateObject(state, { error: null, success: null, loading: false });
};

const enrollCourseStart = (state, action) => {
  return updateObject(state, { error: null, success: null, loading: true });
};

const enrollCourseSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    success: action.success,
    loading: false,
  });
};

const enrollCourseFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const fetchUserListInThisCourseStart = (state, action) => {
  return updateObject(state, {
    userList: [],
    error: null,
    success: null,
    loading: true,
  });
};

const fetchUserListInThisCourseSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    userList: action.userList,
    success: action.success,
    loading: false,
  });
};

const fetchUserListInThisCourseFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_CLEAR_MESSAGE:
      return userClearMessage(state, action);

    case actionTypes.ENROLL_COURSE_START:
      return enrollCourseStart(state, action);
    case actionTypes.ENROLL_COURSE_SUCCESS:
      return enrollCourseSuccess(state, action);
    case actionTypes.ENROLL_COURSE_FAIL:
      return enrollCourseFail(state, action);

    case actionTypes.FETCH_USER_LIST_IN_THIS_COURSE_START:
      return fetchUserListInThisCourseStart(state, action);
    case actionTypes.FETCH_USER_LIST_IN_THIS_COURSE_SUCCESS:
      return fetchUserListInThisCourseSuccess(state, action);
    case actionTypes.FETCH_USER_LIST_IN_THIS_COURSE_FAIL:
      return fetchUserListInThisCourseFail(state, action);

    default:
      return state;
  }
};

export default reducer;
