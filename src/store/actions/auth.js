import axios from "../../axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (authData, message) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData,
    message: message,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (values, history, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    let url = "/QuanLyNguoiDung/DangNhap";
    let authData = {
      taiKhoan: values.username,
      matKhau: values.password,
    };
    if (isSignUp) {
      url = "/QuanLyNguoiDung/DangKy";
      authData = {
        taiKhoan: values.username,
        matKhau: values.password,
        hoTen: values.name,
        soDT: values.phone,
        maNhom: values.group,
        email: values.email,
      };
    }
    axios
      .post(url, authData)
      .then((response) => {
        if (isSignUp) {
          dispatch(authSuccess(response.data, "Create account successfuly!"));
          history.push("/sign-in");
        } else {
          dispatch(authSuccess(response.data, "Login successfuly!"));
          localStorage.setItem("user", JSON.stringify(response.data));
          history.push("/");
        }
      })
      .catch((error) => {
        dispatch(authFail(error.response.data));
      });
  };
};

export const logout = () => {
  localStorage.removeItem("user");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

// export const setAuthRedirectPath = (path) => {
//   return {
//     type: actionTypes.SET_AUTH_REDIRECT_PATH,
//     path: path,
//   };
// };

export const authCheckState = () => {
  return (dispatch) => {
    const user = localStorage.getItem("user");
    if (!user) {
      dispatch(logout());
    } else {
      dispatch(authSuccess("user"));
    }
  };
};

export const chooseGroup = (group) => {
  return {
    type: actionTypes.CHOOSE_GROUP,
    group: group,
  };
};
