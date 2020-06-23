import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  userList: [],
  tabIndex: null,
  avatarIndex: null,
  isEdit: null,
  selectedUser: null,
  coursesPendingList: [],
  coursesApprovedList: [],
  coursesNoneEnrollList: [],
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

const fetchInfoClick = (state, action) => {
  return updateObject(state, {
    isEdit: null,
    tabIndex: action.tabIndex,
    selectedUser: action.selectedUser,
    avatarIndex: action.avatarIndex,
  });
};

const editUserClick = (state, action) => {
  return updateObject(state, {
    isEdit: action.isEdit,
    tabIndex: action.tabIndex,
    selectedUser: action.selectedUser,
  });
};

const addUserClick = (state, action) => {
  return updateObject(state, {
    isEdit: action.isEdit,
    tabIndex: action.tabIndex,
    selectedUser: null,
  });
};

const fetchUsersStart = (state, action) => {
  return updateObject(state, {
    userList: [],
    error: null,
    success: null,
    loading: true,
  });
};

const fetchUsersSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    userList: action.userList,
    loading: false,
  });
};

const fetchUsersFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const addUserStart = (state, action) => {
  return updateObject(state, {
    error: null,
    success: null,
  });
};

const addUserSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    success: action.success,
  });
};

const addUserFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
  });
};

const deleteUserStart = (state, action) => {
  return updateObject(state, {
    error: null,
    success: null,
    loading: true,
  });
};

const deleteUserSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    success: action.success,
    loading: false,
  });
};

const deleteUserFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const fetchCourseApprovalPendingStart = (state, action) => {
  return updateObject(state, {
    error: null,
    success: null,
    loading: true,
  });
};

const fetchCourseApprovalPendingSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    coursesPendingList: action.success,
    selectedUser: action.selectedUser,
    loading: false,
  });
};

const fetchCourseApprovalPendingFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const approveCoursePendingStart = (state, action) => {
  return updateObject(state, {
    error: null,
    success: null,
    loading: true,
  });
};

const approveCoursePendingSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    success: action.success,
    loading: false,
  });
};

const approveCoursePendingFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const fetchCourseApprovedStart = (state, action) => {
  return updateObject(state, {
    error: null,
    success: null,
    loading: true,
  });
};

const fetchCourseApprovedSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    coursesApprovedList: action.success,
    selectedUser: action.selectedUser,
    loading: false,
  });
};

const fetchCourseApprovedFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const disapproveCourseStart = (state, action) => {
  return updateObject(state, {
    error: null,
    success: null,
    loading: true,
  });
};

const disapproveCourseSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    success: action.success,
    loading: false,
  });
};

const disapproveCourseFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const fetchCourseNoneEnrollStart = (state, action) => {
  return updateObject(state, {
    error: null,
    success: null,
    loading: true,
  });
};

const fetchCourseNoneEnrollSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    coursesNoneEnrollList: action.success,
    loading: false,
  });
};

const fetchCourseNoneEnrollFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    success: null,
    loading: false,
  });
};

const searchUserStart = (state, action) => {
  return updateObject(state, {
    userList: [],
    error: null,
    success: null,
    loading: true,
  });
};

const searchUserSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    userList: action.userList,
    loading: false,
  });
};

const searchUserFail = (state, action) => {
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

    case actionTypes.FETCH_USERS_START:
      return fetchUsersStart(state, action);
    case actionTypes.FETCH_USERS_SUCCESS:
      return fetchUsersSuccess(state, action);
    case actionTypes.FETCH_USERS_FAIL:
      return fetchUsersFail(state, action);

    case actionTypes.FETCH_INFO_CLICK:
      return fetchInfoClick(state, action);
    case actionTypes.EDIT_USER_CLICK:
      return editUserClick(state, action);
    case actionTypes.ADD_USER_CLICK:
      return addUserClick(state, action);

    case actionTypes.ADD_USER_START:
      return addUserStart(state, action);
    case actionTypes.ADD_USER_SUCCESS:
      return addUserSuccess(state, action);
    case actionTypes.ADD_USER_FAIL:
      return addUserFail(state, action);

    case actionTypes.DELETE_USER_START:
      return deleteUserStart(state, action);
    case actionTypes.DELETE_USER_SUCCESS:
      return deleteUserSuccess(state, action);
    case actionTypes.DELETE_USER_FAIL:
      return deleteUserFail(state, action);

    case actionTypes.FETCH_COURSE_APPROVAL_PENDING_START:
      return fetchCourseApprovalPendingStart(state, action);
    case actionTypes.FETCH_COURSE_APPROVAL_PENDING_SUCCESS:
      return fetchCourseApprovalPendingSuccess(state, action);
    case actionTypes.FETCH_COURSE_APPROVAL_PENDING_FAIL:
      return fetchCourseApprovalPendingFail(state, action);

    case actionTypes.APPROVE_COURSE_PENDING_START:
      return approveCoursePendingStart(state, action);
    case actionTypes.APPROVE_COURSE_PENDING_SUCCESS:
      return approveCoursePendingSuccess(state, action);
    case actionTypes.APPROVE_COURSE_PENDING_FAIL:
      return approveCoursePendingFail(state, action);

    case actionTypes.FETCH_COURSE_APPROVED_START:
      return fetchCourseApprovedStart(state, action);
    case actionTypes.FETCH_COURSE_APPROVED_SUCCESS:
      return fetchCourseApprovedSuccess(state, action);
    case actionTypes.FETCH_COURSE_APPROVED_FAIL:
      return fetchCourseApprovedFail(state, action);

    case actionTypes.DISAPPROVE_COURSE_START:
      return disapproveCourseStart(state, action);
    case actionTypes.DISAPPROVE_COURSE_SUCCESS:
      return disapproveCourseSuccess(state, action);
    case actionTypes.DISAPPROVE_COURSE_FAIL:
      return disapproveCourseFail(state, action);

    case actionTypes.FETCH_COURSE_NONE_ENROLL_START:
      return fetchCourseNoneEnrollStart(state, action);
    case actionTypes.FETCH_COURSE_NONE_ENROLL_SUCCESS:
      return fetchCourseNoneEnrollSuccess(state, action);
    case actionTypes.FETCH_COURSE_NONE_ENROLL_FAIL:
      return fetchCourseNoneEnrollFail(state, action);

    case actionTypes.SEARCH_USER_START:
      return searchUserStart(state, action);
    case actionTypes.SEARCH_USER_SUCCESS:
      return searchUserSuccess(state, action);
    case actionTypes.SEARCH_USER_FAIL:
      return searchUserFail(state, action);

    default:
      return state;
  }
};

export default reducer;
