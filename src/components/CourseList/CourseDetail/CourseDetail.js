import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Box, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { Avatar, Tooltip, Chip } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

import Switch from "@material-ui/core/Switch";
import { useN01SwitchStyles } from "@mui-treasury/styles/switch/n01";

import PersonAddIcon from "@material-ui/icons/PersonAdd";

import HoverRating from "../../Rating/Rating";
import CourseTabs from "./CourseTabs/CourseTabs";
import ShowcaseCard from "../CourseCard/ShowcaseCard";

import * as actions from "../../../store/actions";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  position: {
    marginTop: "5%",
    [theme.breakpoints.up("md")]: {
      position: "fixed",
      marginTop: "8%",
      marginLeft: "5%",
    },
  },
  chipBox: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function CourseDetail(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.up("md"));
  const myInfo = JSON.parse(localStorage.getItem("user"));
  const { courseDetail, loading, match, userList } = props;
  const { onFetchCourseDetail, onFetchUserListInThisCourse } = props;

  const switchStyles = useN01SwitchStyles();
  const [onShow, setOnShow] = useState(false);

  let nguoiTao;
  if (courseDetail.nguoiTao) {
    nguoiTao = courseDetail.nguoiTao.hoTen;
  }

  useEffect(() => {
    onFetchCourseDetail(match.params.id);
  }, [match.params.id, onFetchCourseDetail]);

  useEffect(() => {
    onFetchUserListInThisCourse(match.params.id);
  }, [match.params.id, onFetchUserListInThisCourse]);

  let nameList = [];
  let userListRender;
  if (userList && userList.lstHocVien) {
    userListRender = (
      <Box mx={3}>
        <AvatarGroup max={6}>
          {userList.lstHocVien.map((user, index) => {
            nameList.push(user.taiKhoan);
            return (
              <Tooltip key={user.taiKhoan} title={user.taiKhoan}>
                <Avatar
                  alt={user.hoTen}
                  src={`https://i.pravatar.cc/150?img=${index + 1}`}
                />
              </Tooltip>
            );
          })}
        </AvatarGroup>
      </Box>
    );
  }

  let showAllUserRender;
  if (onShow && nameList) {
    showAllUserRender = (
      <Box className={classes.chipBox}>
        {nameList.map((name, index) => (
          <Chip
            key={`${name}${index}`}
            avatar={
              <Avatar
                alt={name}
                src={`https://i.pravatar.cc/150?img=${index + 1}`}
              />
            }
            label={name}
          />
        ))}
      </Box>
    );
  }

  let isMe = false;
  if (nameList && myInfo && nameList.length > 0) {
    isMe = nameList.includes(myInfo.taiKhoan);
  }

  return (
    <Grid container direction={matchMD ? "row" : "column-reverse"}>
      <Grid item xs={matchMD ? 8 : 12}>
        <Box py={onShow ? 5 : 0}>
          <Grid container alignItems="center" style={{ minHeight: 350 }}>
            <Box mx={7} width={"100%"}>
              <Typography variant="h4" gutterBottom>
                {loading ? (
                  <Skeleton variant="text" width={"100%"} />
                ) : (
                  courseDetail.tenKhoaHoc
                )}
              </Typography>
              <Typography gutterBottom>
                {loading ? (
                  <Skeleton variant="text" width={"100%"} />
                ) : (
                  courseDetail.moTa
                )}
              </Typography>
              <HoverRating />

              <Box>
                {loading ? (
                  <Skeleton variant="text" width={"50%"} />
                ) : (
                  <Grid container alignItems="center">
                    <Box mr={3}>Created by {nguoiTao}</Box>
                    <Box>Last updated {courseDetail.ngayTao}</Box>
                  </Grid>
                )}
              </Box>

              {myInfo ? (
                <Box my={2}>
                  {loading ? (
                    <Skeleton variant="text" width={"60%"} />
                  ) : (
                    <Grid container alignItems="center">
                      <Box display="flex" flexDirection="column" ml={1}>
                        <Box display="flex" alignItems="center">
                          <PersonAddIcon
                            fontSize="small"
                            style={{ margin: "0 10" }}
                          />
                          {userList && userList.lstHocVien
                            ? userList.lstHocVien.length
                            : "0"}
                        </Box>
                        <Typography>Enerolled</Typography>
                      </Box>
                      {userListRender}
                      <Tooltip title="Show All">
                        <Switch
                          classes={switchStyles}
                          checked={onShow}
                          onChange={(e) => setOnShow(e.target.checked)}
                        />
                      </Tooltip>
                    </Grid>
                  )}
                </Box>
              ) : null}

              {showAllUserRender}
            </Box>
          </Grid>
        </Box>
        {/* Detail */}
        <CourseTabs />
      </Grid>

      <Grid item xs={matchMD ? 4 : 12}>
        <Box mx={2} className={classes.position}>
          <ShowcaseCard
            isMe={isMe}
            loading={loading}
            imageLink={courseDetail.hinhAnh}
            courseId={match.params.id}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    courseDetail: state.courses.courseDetail,
    loading: state.courses.loading,
    userList: state.user.userList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCourseDetail: (courseId) =>
      dispatch(actions.fetchCourseDetail(courseId)),
    onFetchUserListInThisCourse: (courseId) =>
      dispatch(actions.fetchUserListInThisCourse(courseId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CourseDetail));
