import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import SearchBarCustom from "../../components/CourseList/SearchBarCustom/SearchBarCustom";
import SortButton from "../../components/CourseList/SortButton/SortButton";
import FilterButton from "../../components/CourseList/FilterButton/FilterButton";
import GroupButton from "../../components/CourseList/GroupButton/GroupButton";
import CourseCardItem from "../../components/CourseList/CourseCard/CourseCard";
import Spinner from "../../components/UI/Spinner/Spinner";
import DataLength from "../../components/DataDisplay/DataLength";

const Courses = (props) => {
  let { courseList } = props;

  const { loading } = props;
  const { onfetchCourses } = props;

  const [courseType, setCourseType] = useState("all");
  const [sortBy, setSortBy] = useState("id");
  const [group, setGroup] = useState("GP08");
  const [keyWord, setKeyWord] = useState(null);

  useEffect(() => {
    onfetchCourses(courseType, group, keyWord);
  }, [onfetchCourses, courseType, group, keyWord]);

  const handleChangeKeyWord = (word) => {
    setCourseType("all");
    setTimeout(() => {
      setKeyWord(word);
    }, 1500);
  };

  switch (sortBy) {
    case "date":
      courseList = courseList.slice(0);
      courseList.sort(function (a, b) {
        var x = parseInt(a.ngayTao.split("/"));
        var y = parseInt(b.ngayTao.split("/"));
        return x - y;
      });
      break;
    case "a-z":
      courseList = courseList.slice(0);
      courseList.sort(function (a, b) {
        var x = a.tenKhoaHoc.toLowerCase();
        var y = b.tenKhoaHoc.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      break;
    case "z-a":
      courseList = courseList.slice(0);
      courseList.sort(function (a, b) {
        var y = a.tenKhoaHoc.toLowerCase();
        var x = b.tenKhoaHoc.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      break;

    default:
      break;
  }

  let courseListRender = <Spinner />;
  if (!loading && courseList.length > 0) {
    courseListRender = courseList.map((course, index) => (
      <Grid item key={index}>
        <CourseCardItem course={course} />
      </Grid>
    ));
  }

  return (
    <Box>
      <Box
        pt={5}
        mb={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box m={1}>
          <SortButton
            sortBy={sortBy}
            onChangeSortBy={(sort) => setSortBy(sort)}
          />
        </Box>
        <Box m={1}>
          <FilterButton
            courseType={courseType}
            onChangeIndex={(code) => setCourseType(code)}
          />
        </Box>
        <Box m={1}>
          <GroupButton
            group={group}
            onChangeGroup={(choosen) => setGroup(choosen)}
          />
        </Box>
        <Box m={1}>
          <SearchBarCustom onChangeKeyWord={handleChangeKeyWord} />
        </Box>
      </Box>

      {courseList && courseList.length ? (
        <Box display="flex" justifyContent="center" m={3}>
          <DataLength items={courseList.length} type={"courses"} />
        </Box>
      ) : null}

      <Grid container spacing={2} justify="center">
        {courseListRender}
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    courseList: state.courses.courseList,
    loading: state.courses.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onfetchCourses: (courseType, group, keyWord) =>
      dispatch(actions.fetchCourses(courseType, group, keyWord)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
