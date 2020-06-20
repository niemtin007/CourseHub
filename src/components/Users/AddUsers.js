import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import { Formik, Form, Field, useField } from "formik";
import { TextField, Select } from "formik-material-ui";

import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import {
  Box,
  Button,
  FormControl,
  Typography,
  Input,
  FormHelperText,
} from "@material-ui/core";

import * as Yup from "yup";
import * as actions from "../../store/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 304,
    margin: "auto",
  },
  content: {
    padding: 24,
  },
  button: {
    marginTop: "2rem",
    display: "block",
    width: "100%",
    height: "3rem",
    border: "none",
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
}));

const FormikField = ({ label, name, type = "text", disabled }) => {
  return (
    <Box my={1}>
      <Field
        fullWidth
        component={TextField}
        label={label}
        name={name}
        type={type}
        disabled={disabled}
      />
    </Box>
  );
};

const FormikPassword = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl fullWidth error={meta.touched && meta.error ? true : false}>
      <InputLabel>{label}</InputLabel>
      <Input
        {...field}
        {...props}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              style={{ padding: 0 }}
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={(event) => event.preventDefault()}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      {meta.touched && meta.error ? (
        <FormHelperText>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

const FormikSelect = ({ label, name, items, disabled }) => {
  return (
    <Box my={1} textAlign="left">
      <FormControl disabled={disabled} fullWidth>
        <InputLabel>{label}</InputLabel>
        <Field component={Select} name={name} disabled={disabled}>
          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Field>
      </FormControl>
    </Box>
  );
};

const userTypeItems = [
  { label: "Học Viên", value: "HV" },
  { label: "Giảng Viên", value: "GV" },
];

const userItems = [
  { label: "Group 01", value: "GP01" },
  { label: "Group 02", value: "GP02" },
  { label: "Group 03", value: "GP03" },
  { label: "Group 04", value: "GP04" },
  { label: "Group 05", value: "GP05" },
  { label: "Group 06", value: "GP06" },
  { label: "Group 07", value: "GP07" },
  { label: "Group 08", value: "GP08" },
  { label: "Group 09", value: "GP09" },
  { label: "Group 10", value: "GP10" },
  { label: "Group 11", value: "GP11" },
  { label: "Group 12", value: "GP12" },
  { label: "Group 13", value: "GP13" },
  { label: "Group 14", value: "GP14" },
  { label: "Group 15", value: "GP15" },
];

export const AddUsers = (props) => {
  const classes = useStyles();
  const {
    preview,
    group,
    isEdit,
    tabIndex,
    selectedUser,
    success,
    error,
  } = props;
  const { onAddUser } = props;

  const { enqueueSnackbar } = useSnackbar();

  const cardStyles = useStyles();
  const shadowStyles = useSoftRiseShadowStyles();

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, {
        variant: "error",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
      });
    } else if (success) {
      enqueueSnackbar(success, {
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
      });
    }
  }, [error, success, enqueueSnackbar]);

  let initialValues = {
    username: "",
    password: "",
    email: "",
    accountType: "",
    name: "",
    phone: "",
    group: "",
  };

  if ((isEdit && selectedUser) || (preview && selectedUser)) {
    initialValues = {
      username: selectedUser.taiKhoan,
      password: "",
      email: selectedUser.email,
      accountType: selectedUser.maLoaiNguoiDung,
      name: selectedUser.hoTen,
      phone: selectedUser.soDt,
      group: group,
    };
  }

  let validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .max(15, "Username must be 15 characters or less")
      .required("Must enter a username"),
    password: Yup.string()
      .min(3, "Password must be at least 3 characters")
      .required("Password is required"),
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(15, "Name must be 15 characters or less")
      .required("Must enter a name"),
    accountType: Yup.string().required("Account type is required"),
    group: Yup.string().required("Group is required"),
    phone: Yup.number()
      .min(10, "Phone number must be at least 10 characters")
      .required("Must enter a phone number"),
    email: Yup.string()
      .email("Must be a valid email address")
      .required("Must enter an email"),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    onAddUser(values, isEdit, tabIndex, group);
    resetForm();
    setSubmitting(false);
  };

  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <CardContent className={classes.content}>
        {preview ? null : (
          <Typography variant="h4" align="center">
            {isEdit ? "Edit User" : "Add User"}
          </Typography>
        )}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ submitForm, dirty, isValid, ...props }) => (
            <Form>
              <FormikField
                label="Username"
                name="username"
                disabled={isEdit || preview}
              />

              <FormikField
                label="Email"
                name="email"
                type="email"
                disabled={preview}
              />

              {preview ? null : (
                <FormikPassword label="Password" name="password" />
              )}

              <FormikSelect
                label="Account type"
                name="accountType"
                items={userTypeItems}
                disabled={preview}
              />
              <FormikField label="Name" name="name" disabled={preview} />
              <FormikField label="Phone" name="phone" disabled={preview} />

              {preview ? null : (
                <FormikSelect
                  label="Choose a group"
                  name="group"
                  items={userItems}
                />
              )}

              {preview ? null : (
                <Box align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!dirty || !isValid}
                    onClick={submitForm}
                    className={classes.button}
                  >
                    Submit
                  </Button>
                </Box>
              )}
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    group: state.auth.group,
    error: state.usersManager.error,
    success: state.usersManager.success,
    isEdit: state.usersManager.isEdit,
    tabIndex: state.usersManager.tabIndex,
    selectedUser: state.usersManager.selectedUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUser: (values, isEdit, tabIndex, group) =>
      dispatch(actions.addUser(values, isEdit, tabIndex, group)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUsers);
