import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  courseIndex: [],
  courseList: [],
  courseDetail: [],
  userDetail: [],
  loading: false,
};

// ----------------- Course Index ------------------ //
const fetchCourseIndexStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchCourseIndexSuccess = (state, action) => {
  return updateObject(state, {
    courseIndex: action.courseIndex,
    loading: false,
  });
};

const fetchCourseIndexFail = (state, action) => {
  return updateObject(state, { loading: false });
};

// ----------------- Courses List ------------------ //
const fetchCoursesStart = (state, action) => {
  return updateObject(state, { loading: true, courseList: [] });
};

const fetchCoursesSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    courseList: action.courseList,
  });
};

const fetchCoursesFail = (state, action) => {
  return updateObject(state, { loading: true });
};

// ----------------- Course Detail ------------------ //
const fetchCourseDetailStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchCourseDetailSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    courseDetail: action.courseDetail,
  });
};

const fetchCourseDetailFail = (state, action) => {
  return updateObject(state, { loading: true });
};

// ----------------- User Detail ------------------ //
const fetchUserDetailStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchUserDetailSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    userDetail: action.userDetail,
  });
};

const fetchUserDetailFail = (state, action) => {
  return updateObject(state, { loading: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Course Index
    case actionTypes.FETCH_COURSE_INDEX_START:
      return fetchCourseIndexStart(state, action);
    case actionTypes.FETCH_COURSE_INDEX_SUCCESS:
      return fetchCourseIndexSuccess(state, action);
    case actionTypes.FETCH_COURSE_INDEX_FAIL:
      return fetchCourseIndexFail(state, action);
    // Courses List
    case actionTypes.FETCH_COURSES_START:
      return fetchCoursesStart(state, action);
    case actionTypes.FETCH_COURSES_SUCCESS:
      return fetchCoursesSuccess(state, action);
    case actionTypes.FETCH_COURSES_FAIL:
      return fetchCoursesFail(state, action);
    // Course Detail
    case actionTypes.FETCH_COURSE_DETAIL_START:
      return fetchCourseDetailStart(state, action);
    case actionTypes.FETCH_COURSE_DETAIL_SUCCESS:
      return fetchCourseDetailSuccess(state, action);
    case actionTypes.FETCH_COURSE_DETAIL_FAIL:
      return fetchCourseDetailFail(state, action);
    // User Detail
    case actionTypes.FETCH_USER_DETAIL_START:
      return fetchUserDetailStart(state, action);
    case actionTypes.FETCH_USER_DETAIL_SUCCESS:
      return fetchUserDetailSuccess(state, action);
    case actionTypes.FETCH_USER_DETAIL_FAIL:
      return fetchUserDetailFail(state, action);
    // Return Defalt
    default:
      return state;
  }
};

export default reducer;
