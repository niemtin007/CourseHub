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

export const fetchCourseIndex = (init) => {
  return (dispatch) => {
    dispatch(fetchCourseIndexStart());
    axios
      .get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
      .then((response) => {
        dispatch(fetchCourseIndexSuccess(response.data));
        if (init) {
          dispatch(fetchCourses(response.data[0].maDanhMuc));
        }
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

export const fetchCourses = (courseType, group, keyWord) => {
  return (dispatch) => {
    dispatch(fetchCoursesStart());
    if (group === undefined) {
      group = "GP08";
    }
    let url = `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${courseType}&MaNhom=${group}`;
    if (courseType === "all") {
      url = `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${group}`;
    }
    if (keyWord) {
      url = `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${keyWord}&MaNhom=${group}`;
    }

    axios
      .get(url)
      .then((response) => {
        // console.log("Courses List: ", response.data);
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

// ----------------- User Detail ------------------ //
export const fetchUserDetailStart = () => {
  return {
    type: actionTypes.FETCH_USER_DETAIL_FAIL,
  };
};

export const fetchUserDetailSuccess = (userDetail) => {
  return {
    type: actionTypes.FETCH_USER_DETAIL_SUCCESS,
    userDetail: userDetail,
  };
};

export const fetchUserDetailFail = (error) => {
  return {
    type: actionTypes.FETCH_USER_DETAIL_FAIL,
    error: error,
  };
};

export const fetchUserDetail = () => {
  return (dispatch) => {
    dispatch(fetchUserDetailStart());
    const user = JSON.parse(localStorage.getItem("user"));
    const url = "/QuanLyNguoiDung/ThongTinTaiKhoan";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.accessToken}`,
    };
    const data = {
      taiKhoan: user.taiKhoan,
    };

    axios({ method: "post", url, headers, data })
      .then((response) => {
        // console.log("User Detail: ", response.data);
        dispatch(fetchUserDetailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserDetailFail(error));
      });
  };
};
