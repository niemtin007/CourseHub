import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";

import CourseList from "../../components/Courses/CourseList";
import AddCourses from "../../components/Courses/AddCourses";
import CourseDetails from "../../components/Courses/CourseDetails";

const useStyles = makeStyles((theme) => ({
  list: {
    flex: 1,
    minWidth: 390,
  },
  detail: {
    flex: 1,
    zIndex: 1000,
    minWidth: 390,
    overflowY: "auto",
    background: "linear-gradient(120deg, #2980b9, #8e44ad)",
    "@media (min-width: 836px)": {
      height: "92.4vh",
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function CoursesManager({ tabIndex }) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item className={classes.list}>
        <Box>
          <CourseList />
        </Box>
      </Grid>

      <Grid item className={classes.detail}>
        <TabPanel value={tabIndex} index={-1}>
          <AddCourses />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <AddCourses />
        </TabPanel>

        <TabPanel value={tabIndex} index={-2}>
          <CourseDetails />
        </TabPanel>
        <TabPanel value={tabIndex} index={2}>
          <CourseDetails />
        </TabPanel>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    tabIndex: state.coursesManager.tabIndex,
  };
};

export default connect(mapStateToProps)(CoursesManager);
