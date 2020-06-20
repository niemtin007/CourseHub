import * as actionTypes from "./actionTypes";
import axios from "../../axios";

// ----------------- Course Index ------------------ //
export const fetchCourseIndexStart = () => {
  return {
    type: actionTypes.FETCH_COURSE_INDEX_START,
  };
};

export const fetchCourseIndexSuccess = (courseIndex) => {
  return {
    type: actionTypes.FETCH_COURSE_INDEX_SUCCESS,
    courseIndex: courseIndex,
  };
};

export const fetchCourseIndexFail = (error) => {
  return {
    type: actionTypes.FETCH_COURSE_INDEX_FAIL,
    error: error,
  };
};

export const fetchCourseIndex = () => {
  return (dispatch) => {
    dispatch(fetchCourseIndexStart());
    axios
      .get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
      .then((response) => {
        dispatch(fetchCourseIndexSuccess(response.data));
        dispatch(fetchCourses(response.data[0].maDanhMuc));
      })
      .catch((error) => {
        dispatch(fetchCourseIndexFail(error));
      });
  };
};

// ----------------- Courses List ------------------ //
export const fetchCoursesStart = () => {
  return {
    type: actionTypes.FETCH_COURSES_START,
  };
};

export const fetchCoursesSuccess = (courseList) => {
  return {
    type: actionTypes.FETCH_COURSES_SUCCESS,
    courseList: courseList,
  };
};

export const fetchCoursesFail = (error) => {
  return {
    type: actionTypes.FETCH_COURSES_FAIL,
    error: error,
  };
};

export const fetchCourses = (maDanhMuc) => {
  return (dispatch) => {
    dispatch(fetchCoursesStart());
    axios
      .get(
        `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP08`
      )
      .then((response) => {
        dispatch(fetchCoursesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCoursesFail(error));
      });
  };
};

// ----------------- Course Detail ------------------ //
export const fetchCourseDetailStart = () => {
  return {
    type: actionTypes.FETCH_COURSE_DETAIL_START,
  };
};

export const fetchCourseDetailSuccess = (courseDetail) => {
  return {
    type: actionTypes.FETCH_COURSE_DETAIL_SUCCESS,
    courseDetail: courseDetail,
  };
};

export const fetchCourseDetailFail = (error) => {
  return {
    type: actionTypes.FETCH_COURSE_DETAIL_FAIL,
    error: error,
  };
};

export const fetchCourseDetail = (courseId) => {
  return (dispatch) => {
    dispatch(fetchCourseDetailStart());
    axios
      .get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`)
      .then((response) => {
        dispatch(fetchCourseDetailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCourseDetailFail(error));
      });
  };
};
