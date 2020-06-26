import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import { Formik, Form } from "formik";

import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";

import Rating from "../Rating/Rating";

import { Box, Button, Typography, CardMedia, Grid } from "@material-ui/core";

import * as Yup from "yup";
import * as actions from "../../store/actions";
import { DropzoneArea } from "material-ui-dropzone";
import DatePicker from "../DatePicker/DatePicker";

import { groupItems } from "./InputCustom/GroupList";
import FormikField from "./InputCustom/FormikField";
import FormikSelect from "./InputCustom/FormikSelect";

const useStyles = makeStyles((theme) => ({
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
  formItem: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const AddCourses = (props) => {
  const classes = useStyles();
  const {
    preview,
    group,
    courseType,
    isEdit,
    courseIndex,
    selectedCourse,
    loading,
    success,
    error,
    tabIndex,
  } = props;
  const { onAddCourse } = props;

  const user = JSON.parse(localStorage.getItem("user"));
  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const { enqueueSnackbar } = useSnackbar();

  const cardStyles = useStyles();
  const shadowStyles = useSoftRiseShadowStyles();

  useEffect(() => {
    if (selectedCourse && selectedCourse.ngayTao) {
      const arr = selectedCourse.ngayTao.split("/");
      const dd = arr[0];
      const mm = arr[1];
      const yyyy = arr[2];
      setSelectedDate(`${yyyy}-${mm}-${dd}`);
    }
  }, [selectedCourse]);

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
    courseId: "",
    urlName: "",
    courseName: "",
    detail: "",
    views: 0,
    rate: 0,
    imageUrl: "",
    group: group,
    dateCreated: selectedDate,
    courseCode: "",
    creator: user ? user.taiKhoan : "",
  };

  if ((isEdit && selectedCourse) || (preview && selectedCourse)) {
    initialValues = {
      courseId: selectedCourse.maKhoaHoc,
      urlName: selectedCourse.biDanh,
      courseName: selectedCourse.tenKhoaHoc,
      detail: selectedCourse.moTa,
      views: selectedCourse.luotXem,
      rate: selectedCourse.danhGia,
      imageUrl: selectedCourse.hinhAnh,
      group: selectedCourse.maNhom,
      dateCreated: selectedDate,
      courseCode: selectedCourse.danhMucKhoaHoc.maDanhMucKhoahoc,
      creator: selectedCourse.nguoiTao.taiKhoan,
    };
  }

  let validationSchema = Yup.object().shape({
    courseId: Yup.string().required("Must enter a courseId"),
    urlName: Yup.string(),
    courseName: Yup.string().required("Must enter a courseName"),
    detail: Yup.string().required("Detail is required"),
    views: Yup.number(),
    imageUrl: Yup.string(),
    group: Yup.string().required("Group is required"),
    dateCreated: Yup.date().required("Must enter a created day"),
    creator: Yup.string().required("Must input creator"),
    courseCode: Yup.string().required("Must input courseIndex"),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    onAddCourse(
      values,
      selectedImage,
      isEdit,
      group,
      courseType,
      tabIndex,
      selectedDate
    );
    resetForm();
    setSubmitting(false);
  };

  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <CardContent className={classes.content}>
        {preview ? null : (
          <Box mb={5}>
            <Typography variant="h4" align="center">
              {isEdit ? "EDIT COURSE" : "ADD COURSE"}
            </Typography>
          </Box>
        )}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ submitForm, dirty, isValid, values, ...props }) => {
            // console.log(values);

            return (
              <Form style={{ overflow: "hidden" }}>
                <Box mb={2} display={"flex"} flexWrap="nowrap">
                  <Box flexGrow={1} alignSelf="flex-end" mr={1}>
                    <Card style={{ height: "100% !important", padding: 0 }}>
                      <Box>
                        {values.imageUrl ? (
                          <CardMedia
                            className={classes.media}
                            image={values.imageUrl}
                          />
                        ) : (
                          <Box
                            m={1}
                            p={1}
                            border={1}
                            height={176}
                            display={"flex"}
                            alignItems="center"
                            justifyContent="center"
                            borderColor="grey.400"
                          >
                            <Typography align="center" color="textSecondary">
                              Please upload an image for preview
                            </Typography>
                          </Box>
                        )}
                      </Box>
                      <Box m={1}>
                        <Rating />
                      </Box>
                      <Box mb={1}>
                        <FormikField
                          label="Course Name"
                          name="courseName"
                          disabled={isEdit || preview}
                        />
                      </Box>
                    </Card>
                  </Box>

                  <Box flexGrow={1} alignSelf="flex-end">
                    <Card style={{ height: "100%", padding: 0 }}>
                      <Grid
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="stretch"
                      >
                        <FormikField
                          label="Course ID"
                          name="courseId"
                          disabled={isEdit || preview}
                        />
                        <FormikField
                          label="Creator"
                          name="creator"
                          disabled={preview}
                        />
                        <FormikField
                          label="Views"
                          name="views"
                          disabled={preview}
                        />
                        <Box mx={1}>
                          <DatePicker
                            disabled={preview}
                            value={selectedDate}
                            pickSelectedDate={(date) => setSelectedDate(date)}
                          />
                        </Box>
                      </Grid>
                    </Card>
                  </Box>
                </Box>

                <Card style={{ padding: 0 }}>
                  <FormikField
                    label="Description"
                    name="detail"
                    disabled={preview}
                  />
                  <Box display={"flex"} flexWrap="wrap">
                    <Box flexGrow={1}>
                      <FormikSelect
                        label="Course Type"
                        name="courseCode"
                        items={courseIndex}
                        disabled={preview}
                      />
                    </Box>
                    <Box flexGrow={1}>
                      <FormikSelect
                        label="Group"
                        name="group"
                        items={groupItems}
                        disabled={preview}
                      />
                    </Box>
                  </Box>

                  {/* {preview ? null : (
                    <Box m={1}>
                      <FormikFieldIcon label="Image URL" name="imageUrl" />
                    </Box>
                  )} */}

                  {preview ? null : (
                    <Box m={1}>
                      <DropzoneArea
                        filesLimit={1}
                        showAlerts={false}
                        acceptedFiles={["image/*"]}
                        dropzoneText={"Drag and drop an image here or click"}
                        onChange={(image) => setSelectedImage(image[0])}
                      />
                    </Box>
                  )}
                </Card>

                {preview ? null : (
                  <Box align="center" mx={1}>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={loading || !isValid}
                      onClick={submitForm}
                      className={classes.button}
                    >
                      Submit
                    </Button>
                  </Box>
                )}
              </Form>
            );
          }}
        </Formik>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    group: state.auth.group,
    courseType: state.coursesManager.courseType,
    courseIndex: state.courses.courseIndex,
    error: state.coursesManager.error,
    success: state.coursesManager.success,
    loading: state.coursesManager.loading,
    isEdit: state.coursesManager.isEdit,
    tabIndex: state.coursesManager.tabIndex,
    selectedCourse: state.coursesManager.selectedCourse,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCourse: (
      values,
      selectedImage,
      isEdit,
      group,
      courseType,
      tabIndex,
      selectedDate
    ) =>
      dispatch(
        actions.addCourse(
          values,
          selectedImage,
          isEdit,
          group,
          courseType,
          tabIndex,
          selectedDate
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCourses);
