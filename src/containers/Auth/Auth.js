import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, useField } from "formik";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, CssBaseline, FormGroup } from "@material-ui/core";
import { NativeSelect } from "@material-ui/core";

import { useSnackbar } from "notistack";

import * as Yup from "yup";
import * as actions from "../../store/actions";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    background: "linear-gradient(120deg, #2980b9, #8e44ad)",
  },

  loginForm: {
    width: "20rem",
    background: "#f1f1f1",
    minHeight: "35rem",
    padding: "0 2rem",
    borderRadius: "1rem",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },

  formItem: {
    width: "100%",
    position: "relative",
    height: "3rem",
    margin: "0.2rem 0",
    overflow: "hidden",

    "& input": {
      width: "100%",
      height: "100%",
      color: "#333",
      outline: "none",
      border: "none",
      background: "none",
      padding: "2rem 0",

      "&:focus+label span, &:valid+label span": {
        transform: "translateY(-90%)",
        color: "#adadad",
        fontSize: "0.9rem",
      },

      "&:focus+label::after, &:valid+label::after": {
        transform: "translateX(0)",
      },
    },

    "& label": {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      borderBottom: "1px solid #adadad",

      "&:after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: "-0.15rem",
        width: "100%",
        height: "100%",
        borderBottom: "3px solid #2980b9",
        borderImage: "linear-gradient(120deg, #2980b9, #8e44ad) 1 round",
        transform: "translateX(-100%)",
        transition: "transform 0.6s ease",
      },

      "& span": {
        position: "absolute",
        bottom: "0.3rem",
        left: 0,
        color: "#adadad",
        transition: "all 0.3s ease",
      },
    },
  },

  logbtn: {
    marginTop: "2rem",
    display: "block",
    width: "100%",
    height: "3rem",
    border: "none",
    borderRadius: "3px",
    background: "linear-gradient(120deg, #2980b9, #8e44ad, #2980b9)",
    backgroundSize: "200%",
    color: "#fff",
    outline: "none",
    transition: "0.5s",
    cursor: "pointer",

    "&:hover": {
      backgroundPosition: "right",
    },
  },

  bottomText: {
    textAlign: "center",
    fontSize: "0.9rem",
  },

  link: {
    textDecoration: "none",
  },
}));

const CustomInput = ({ label, ...props }) => {
  const classes = useStyles();
  const [field, meta] = useField(props);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (meta.touched && meta.error) {
      enqueueSnackbar(meta.error, {
        preventDuplicate: true,
        variant: "info",
      });
    }
  }, [meta, enqueueSnackbar]);

  return (
    <Fragment>
      <Box className={classes.formItem}>
        <Typography component={Field} required {...field} {...props} />
        <Typography component="label" htmlFor={props.id || props.name}>
          <span>{label}</span>
        </Typography>
      </Box>
    </Fragment>
  );
};

export const Auth = (props) => {
  const classes = useStyles();
  const { error, success } = props;
  const { onAuth, onMessageReset, history, match } = props;
  const isSignUp = match && match.url === "/sign-up";

  const { enqueueSnackbar } = useSnackbar();

  let initialValues = { username: "", password: "" };
  let validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(15, "Name must be 15 characters or less")
      .required("Must enter a name"),
    password: Yup.string()
      .min(3, "Password must be at least 3 characters")
      .required("Password is required"),
  });

  if (isSignUp) {
    initialValues = {
      username: "",
      password: "",
      confirmPassword: "",
      name: "",
      phone: "",
      group: "GP08",
      email: "",
    };
    validationSchema = Yup.object().shape({
      username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .max(15, "Username must be 15 characters or less")
        .required("Must enter a username"),
      password: Yup.string()
        .min(3, "Password must be at least 3 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(15, "Name must be 15 characters or less")
        .required("Must enter a name"),
      group: Yup.string().required("Group is required"),
      phone: Yup.number()
        .min(10, "Phone number must be at least 10 characters")
        .required("Must enter a phone number"),
      email: Yup.string()
        .email("Must be a valid email address")
        .required("Must enter an email"),
    });
  }

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
    } else if (success) {
      enqueueSnackbar(success, { variant: "success" });
    }
    onMessageReset();
  }, [error, success, enqueueSnackbar, onMessageReset]);

  const onSubmit = (values, { setSubmitting }) => {
    onAuth(values, history, isSignUp);
    setSubmitting(false);
  };

  return (
    <Box className={classes.container}>
      <CssBaseline />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form className={classes.loginForm}>
            <Box mt={isSignUp ? 5 : 10} mb={isSignUp ? 3 : 5}>
              <Typography variant="h3" align="center">
                {isSignUp ? "Sign Up" : "Login"}
              </Typography>
            </Box>
            <FormGroup>
              <CustomInput label="Username" name="username" type="text" />
              <CustomInput label="Password" name="password" type="password" />
            </FormGroup>
            {isSignUp ? (
              <FormGroup>
                <CustomInput
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <CustomInput label="Name" name="name" type="text" />
                <CustomInput label="Phone" name="phone" type="text" />
                <CustomInput label="Email" name="email" type="email" />
                <NativeSelect
                  value={props.values.group}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  name="group"
                  style={{ marginTop: 16 }}
                >
                  <option value={"GP01"}>Group 01</option>
                  <option value={"GP02"}>Group 02</option>
                  <option value={"GP03"}>Group 03</option>
                  <option value={"GP04"}>Group 04</option>
                  <option value={"GP05"}>Group 05</option>
                  <option value={"GP06"}>Group 06</option>
                  <option value={"GP07"}>Group 07</option>
                  <option value={"GP08"}>Group 08</option>
                  <option value={"GP09"}>Group 09</option>
                  <option value={"GP10"}>Group 10</option>
                  <option value={"GP11"}>Group 11</option>
                  <option value={"GP12"}>Group 12</option>
                  <option value={"GP13"}>Group 13</option>
                  <option value={"GP14"}>Group 14</option>
                  <option value={"GP15"}>Group 15</option>
                </NativeSelect>
              </FormGroup>
            ) : null}

            <Typography
              component="button"
              type="submit"
              className={classes.logbtn}
            >
              {props.isSubmitting
                ? "Loading..."
                : isSignUp
                ? "Sign Up"
                : "Login"}
            </Typography>

            <Box
              mt={isSignUp ? 5 : 10}
              mb={isSignUp ? 5 : 0}
              className={classes.bottomText}
            >
              <Typography component="p">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}
                {isSignUp ? (
                  <Link to="/sign-in" className={classes.link}>
                    Sign In
                  </Link>
                ) : (
                  <Link to="/sign-up" className={classes.link}>
                    Sign Up
                  </Link>
                )}
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    success: state.auth.success,
    // loading: state.auth.loading,
    // isAuthenticated: state.auth.token !== null,
    // authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (values, history, isSignUp) =>
      dispatch(actions.auth(values, history, isSignUp)),
    onMessageReset: () => dispatch(actions.authStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
