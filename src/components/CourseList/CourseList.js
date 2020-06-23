import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";

import { Grid, Box } from "@material-ui/core";
import { GmailTabs, GmailTabItem } from "@mui-treasury/components/tabs/gmail";

import CourseCarousel from "./CourseCarousel/CourseCarousel";

import * as actions from "../../store/actions";
import SkeletonCard from "../UI/SkeletonCard";

function TabPanel({ children, tabNum, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={tabNum !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {tabNum === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

function CourseList(props) {
  const [tabNum, setTabNum] = useState(0);
  const { courseIndex, courseList, loading } = props;
  const { onfetchCourseIndex, onfetchCourses } = props;

  useEffect(() => {
    onfetchCourseIndex();
  }, [onfetchCourseIndex]);

  const handleChange = (_, newValue) => {
    setTabNum(newValue);
    onfetchCourses(courseIndex[newValue].maDanhMuc);
  };

  let courseRender = <SkeletonCard />;

  if (!loading) {
    courseRender = courseIndex.map((tab, index) => (
      <TabPanel tabNum={tabNum} index={index} key={tab.maDanhMuc}>
        <Grid container justify="center" spacing={2}>
          <CourseCarousel courseList={courseList} />
        </Grid>
      </TabPanel>
    ));
  }

  return (
    <Fragment>
      <Grid container justify="center">
        <GmailTabs
          value={tabNum}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable force tabs"
          style={{ backgroundColor: "inherit" }}
        >
          {courseIndex.map((tab, index) => (
            <GmailTabItem
              key={tab.maDanhMuc}
              label={tab.tenDanhMuc}
              {...a11yProps(index)}
            />
          ))}
        </GmailTabs>
        {courseRender}
      </Grid>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    courseIndex: state.courses.courseIndex,
    courseList: state.courses.courseList,
    loading: state.courses.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onfetchCourseIndex: () => dispatch(actions.fetchCourseIndex()),
    onfetchCourses: (courseIndex) =>
      dispatch(actions.fetchCourses(courseIndex)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
