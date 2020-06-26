import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { connect } from "react-redux";
import { groupItems } from "./GroupList";

import * as actions from "../../../store/actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
}));

const ChooseGroup = (props) => {
  const classes = useStyles();
  const { courseIndex, courseType, group } = props;
  const { onChooseGroup, onChooseCourseType, onFetchCourseList } = props;

  const handleChooseCourseType = (event) => {
    onChooseCourseType(event.target.value);
    onFetchCourseList(null, group, event.target.value);
  };

  const handleChooseGroup = (event) => {
    onChooseGroup(event.target.value);
    onFetchCourseList(null, event.target.value, courseType);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select value={courseType} onChange={handleChooseCourseType}>
          <MenuItem value="all">All Courses</MenuItem>
          {courseIndex.map((item, index) => (
            <MenuItem key={index} value={item.value || item.maDanhMuc}>
              {item.label || item.tenDanhMuc}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select value={group} onChange={handleChooseGroup}>
          {groupItems.map((item, index) => (
            <MenuItem
              key={item.value || item.maDanhMuc}
              value={item.value || item.maDanhMuc}
            >
              {item.label || item.tenDanhMuc}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courseIndex: state.courses.courseIndex,
    courseType: state.coursesManager.courseType,
    group: state.auth.group,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChooseGroup: (group) => dispatch(actions.chooseGroup(group)),
    onChooseCourseType: (courseType) =>
      dispatch(actions.chooseCourseType(courseType)),
    onFetchCourseList: (keyWord, group, courseType) =>
      dispatch(actions.fetchCoursesList(keyWord, group, courseType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseGroup);
