import axios from "../../axios";
import * as actionTypes from "./actionTypes";

export const userClearMessage = () => {
  return {
    type: actionTypes.USER_CLEAR_MESSAGE,
  };
};

export const enrollCourseStart = () => {
  return {
    type: actionTypes.ENROLL_COURSE_START,
  };
};

export const enrollCourseSuccess = (success) => {
  return {
    type: actionTypes.ENROLL_COURSE_SUCCESS,
    success: success,
  };
};

export const enrollCourseFail = (error) => {
  return {
    type: actionTypes.ENROLL_COURSE_FAIL,
    error: error,
  };
};

export const EnrollCourse = (courseId, isMe) => {
  return (dispatch) => {
    dispatch(enrollCourseStart());
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.accessToken}`,
    };
    const data = {
      maKhoaHoc: courseId,
      taiKhoan: user.taiKhoan,
    };
    let url = "/QuanLyKhoaHoc/DangKyKhoaHoc";
    if (isMe) {
      url = "/QuanLyKhoaHoc/HuyGhiDanh";
    }
    axios({ method: "post", url, headers, data })
      .then((response) => {
        dispatch(enrollCourseSuccess(response.data));
        dispatch(fetchUserListInThisCourse(courseId));
      })
      .catch((error) => {
        dispatch(enrollCourseFail(error.response.data));
      });
  };
};

export const fetchUserListInThisCourseStart = () => {
  return {
    type: actionTypes.FETCH_USER_LIST_IN_THIS_COURSE_START,
  };
};

export const fetchUserListInThisCourseSuccess = (userList) => {
  return {
    type: actionTypes.FETCH_USER_LIST_IN_THIS_COURSE_SUCCESS,
    userList: userList,
  };
};

export const fetchUserListInThisCourseFail = (error) => {
  return {
    type: actionTypes.FETCH_USER_LIST_IN_THIS_COURSE_FAIL,
    error: error,
  };
};

export const fetchUserListInThisCourse = (courseId) => {
  return (dispatch) => {
    dispatch(fetchUserListInThisCourseStart());
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
      let config = {
        method: "get",
        url: `/QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc?maKhoaHoc=${courseId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
      };

      axios(config)
        .then((response) => {
          // console.log(response.data);
          dispatch(fetchUserListInThisCourseSuccess(response.data));
        })
        .catch((error) => {
          // console.log(error);
          dispatch(fetchUserListInThisCourseFail(error.response.data));
        });
    }
  };
};
