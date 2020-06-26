import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { connect } from "react-redux";
import { InputLabel } from "@material-ui/core";

// import * as actions from "../../../store/actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

const ChooseGroup = (props) => {
  const classes = useStyles();
  const { sortBy, onChangeSortBy } = props;

  const handleChooseGroup = (event) => {
    onChangeSortBy(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      className={classes.formControl}
    >
      <InputLabel>Sort by</InputLabel>
      <Select value={sortBy} onChange={handleChooseGroup} label="Sort by">
        <MenuItem value="date">Created Date</MenuItem>
        <MenuItem value="a-z">Title: A-to-Z</MenuItem>
        <MenuItem value="z-a">Title: Z-to-A</MenuItem>
      </Select>
    </FormControl>
  );
};

const mapStateToProps = (state) => {
  return {
    // courseIndex: state.courses.courseIndex,
    // courseType: state.coursesManager.courseType,
    // group: state.auth.group,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onChooseGroup: (group) => dispatch(actions.chooseGroup(group)),
    // onChooseCourseType: (courseType) =>
    //   dispatch(actions.chooseCourseType(courseType)),
    // onFetchCourseList: (keyWord, group, courseType) =>
    //   dispatch(actions.fetchCoursesList(keyWord, group, courseType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseGroup);
