import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  courseList: [],
  userApprovedList: [],
  userPendingList: [],
  userRefuseList: [],
  courseType: "all",
  tabIndex: null,
  isEdit: null,
  selectedCourse: null,
  success: null,
  error: null,
  loading: false,
};

const clearMessage = (state, action) => {
  return updateObject(state, {
    success: action.success,
    error: action.error,
  });
};

const fetchUsersClick = (state, action) => {
  return updateObject(state, {
    isEdit: null,
    tabIndex: action.tabIndex,
    selectedCourse: action.selectedCourse,
  });
};

const editCourseClick = (state, action) => {
  return updateObject(state, {
    isEdit: action.isEdit,
    tabIndex: action.tabIndex,
    selectedCourse: action.selectedCourse,
  });
};

const addCourseClick = (state, action) => {
  return updateObject(state, {
    isEdit: action.isEdit,
    tabIndex: action.tabIndex,
    selectedCourse: null,
  });
};

const chooseCourseType = (state, action) => {
  return updateObject(state, {
    courseType: action.courseType,
  });
};

const fetchCoursesListStart = (state, action) => {
  return updateObject(state, {
    courseList: [],
    userApprovedList: [],
    error: null,
    success: null,
    loading: true,
  });
};

const fetchCoursesListSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    courseList: action.courseList,
    loading: false,
  });
};

const fetchCoursesListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const fetchUserListOfCourseStart = (state, action) => {
  return updateObject(state, {
    userApprovedList: [],
    error: null,
    success: null,
    loading: true,
  });
};

const fetchUserListOfCourseSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    userApprovedList: action.userApprovedList,
    loading: false,
  });
};

const fetchUserListOfCourseFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const fetchUserPendingListOfCourseStart = (state, action) => {
  return updateObject(state, {
    userPendingList: [],
    error: null,
    success: null,
    loading: true,
  });
};

const fetchUserPendingListOfCourseSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    userPendingList: action.userPendingList,
    loading: false,
  });
};

const fetchUserPendingListOfCourseFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const fetchUserRefuseListOfCourseStart = (state, action) => {
  return updateObject(state, {
    userRefuseList: [],
    error: null,
    success: null,
    loading: true,
  });
};

const fetchUserRefuseListOfCourseSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    userRefuseList: action.userRefuseList,
    loading: false,
  });
};

const fetchUserRefuseListOfCourseFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const approveUserPendingStart = (state, action) => {
  return updateObject(state, {
    error: null,
    success: null,
    loading: true,
  });
};

const approveUserPendingSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    success: action.success,
    loading: false,
  });
};

const approveUserPendingFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const disapproveUserStart = (state, action) => {
  return updateObject(state, {
    error: null,
    success: null,
    loading: true,
  });
};

const disapproveUserSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    success: action.success,
    loading: false,
  });
};

const disapproveUserFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const deleteCourseStart = (state, action) => {
  return updateObject(state, {
    error: null,
    success: null,
    loading: true,
  });
};

const deleteCourseSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    success: action.success,
    loading: false,
  });
};

const deleteCourseFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const uploadImageStart = (state, action) => {
  return updateObject(state, {
    error: null,
    success: null,
    loading: true,
  });
};

const uploadImageSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    success: action.success,
    loading: false,
  });
};

const uploadImageFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const addCourseStart = (state, action) => {
  return updateObject(state, {
    error: null,
    success: null,
    loading: true,
  });
};

const addCourseSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    success: action.success,
    // selectedCourse: action.selectedCourse,
    loading: false,
  });
};

const addCourseFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_MESSAGE:
      return clearMessage(state, action);

    case actionTypes.CHOOSE_COURSE_TYPE:
      return chooseCourseType(state, action);

    case actionTypes.FETCH_USERS_CLICK:
      return fetchUsersClick(state, action);
    case actionTypes.EDIT_COURSE_CLICK:
      return editCourseClick(state, action);
    case actionTypes.ADD_COURSE_CLICK:
      return addCourseClick(state, action);

    case actionTypes.FETCH_COURSES_LIST_START:
      return fetchCoursesListStart(state, action);
    case actionTypes.FETCH_COURSES_LIST_SUCCESS:
      return fetchCoursesListSuccess(state, action);
    case actionTypes.FETCH_COURSES_LIST_FAIL:
      return fetchCoursesListFail(state, action);

    case actionTypes.FETCH_USER_LIST_OF_COURSE_START:
      return fetchUserListOfCourseStart(state, action);
    case actionTypes.FETCH_USER_LIST_OF_COURSE_SUCCESS:
      return fetchUserListOfCourseSuccess(state, action);
    case actionTypes.FETCH_USER_LIST_OF_COURSE_FAIL:
      return fetchUserListOfCourseFail(state, action);

    case actionTypes.FETCH_USER_PENDING_LIST_OF_COURSE_START:
      return fetchUserPendingListOfCourseStart(state, action);
    case actionTypes.FETCH_USER_PENDING_LIST_OF_COURSE_SUCCESS:
      return fetchUserPendingListOfCourseSuccess(state, action);
    case actionTypes.FETCH_USER_PENDING_LIST_OF_COURSE_FAIL:
      return fetchUserPendingListOfCourseFail(state, action);

    case actionTypes.FETCH_USER_REFUSE_LIST_OF_COURSE_START:
      return fetchUserRefuseListOfCourseStart(state, action);
    case actionTypes.FETCH_USER_REFUSE_LIST_OF_COURSE_SUCCESS:
      return fetchUserRefuseListOfCourseSuccess(state, action);
    case actionTypes.FETCH_USER_REFUSE_LIST_OF_COURSE_FAIL:
      return fetchUserRefuseListOfCourseFail(state, action);

    case actionTypes.APPROVE_USER_PENDING_START:
      return approveUserPendingStart(state, action);
    case actionTypes.APPROVE_USER_PENDING_SUCCESS:
      return approveUserPendingSuccess(state, action);
    case actionTypes.APPROVE_USER_PENDING_FAIL:
      return approveUserPendingFail(state, action);

    case actionTypes.DISAPPROVE_USER_START:
      return disapproveUserStart(state, action);
    case actionTypes.DISAPPROVE_USER_SUCCESS:
      return disapproveUserSuccess(state, action);
    case actionTypes.DISAPPROVE_USER_FAIL:
      return disapproveUserFail(state, action);

    case actionTypes.DELETE_COURSE_START:
      return deleteCourseStart(state, action);
    case actionTypes.DELETE_COURSE_SUCCESS:
      return deleteCourseSuccess(state, action);
    case actionTypes.DELETE_COURSE_FAIL:
      return deleteCourseFail(state, action);

    case actionTypes.UPLOAD_IMAGE_START:
      return uploadImageStart(state, action);
    case actionTypes.UPLOAD_IMAGE_SUCCESS:
      return uploadImageSuccess(state, action);
    case actionTypes.UPLOAD_IMAGE_FAIL:
      return uploadImageFail(state, action);

    case actionTypes.ADD_COURSE_START:
      return addCourseStart(state, action);
    case actionTypes.ADD_COURSE_SUCCESS:
      return addCourseSuccess(state, action);
    case actionTypes.ADD_COURSE_FAIL:
      return addCourseFail(state, action);

    default:
      return state;
  }
};

export default reducer;
