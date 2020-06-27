import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import {
  Box,
  Grid,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Tooltip,
  ListItem,
  ListItemSecondaryAction,
  Card,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import BlockIcon from "@material-ui/icons/Block";

import Spinner from "../../components/UI/Spinner/Spinner";
import DataLength from "../../components/DataDisplay/DataLength";

import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 700,
    margin: "auto",
  },
  content: {
    padding: 24,
  },
  avatar: {
    width: 50,
    height: 50,
    border: "2px solid #fff",
    margin: "-48px 32px 0 auto",
    "& > img": {
      margin: 0,
    },
  },
  background: {
    background: "linear-gradient(120deg, #2980b9, #8e44ad)",
  },
  link: {
    textDecoration: "none",
    textTransform: "none",
    color: "inherit",
  },
  title: {
    display: "inline",
    fontWeight: 700,
    background: "linear-gradient(120deg, #2980b9, #8e44ad)",
    "-webkit-background-clip": "text",
    color: "transparent",
    transition: "0.5s",

    "&:hover": {
      background: "linear-gradient(right, #2980b9, #8e44ad)",
      color: "transparent",
      "-webkit-background-clip": "text",
    },
  },
}));

const Courses = (props) => {
  const { history } = props;
  const { userDetail, success, error } = props;
  const { onFetchUserDetail, onEnroll, onUserClearMessage } = props;
  const [isMe, setIsMe] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const cardStyles = useStyles();
  const shadowStyles = useSoftRiseShadowStyles();

  const { enqueueSnackbar } = useSnackbar();

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
    onUserClearMessage();
    onFetchUserDetail();
  }, [error, success, enqueueSnackbar, onUserClearMessage, onFetchUserDetail]);

  useEffect(() => {
    if (history.location.pathname === "/my-courses") {
      setIsMe(true);
    } else {
      setIsMe(false);
    }
  }, [history.location.pathname, user]);

  useEffect(() => {
    if (isMe) {
      onFetchUserDetail();
    }
  }, [onFetchUserDetail, isMe]);

  let courseListRender = <Spinner />;

  if (isMe && userDetail && userDetail.chiTietKhoaHocGhiDanh) {
    courseListRender = (
      <Box my={5} mx={2}>
        <List dense>
          {userDetail.chiTietKhoaHocGhiDanh.map((course, index) => (
            <ListItem key={`${course.maKhoaHoc}${index}`}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <Link
                to={`/courses/${course.maKhoaHoc}`}
                className={cardStyles.link}
              >
                <ListItemText primary={course.tenKhoaHoc} />
              </Link>
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  onClick={() => onEnroll(course.maKhoaHoc, isMe)}
                >
                  <Tooltip title="Leave This Course" placement="right">
                    <BlockIcon />
                  </Tooltip>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      minHeight={"92.2vh"}
      className={cardStyles.background}
    >
      <Card className={cx(cardStyles.root, shadowStyles.root)}>
        <Box display="flex" justifyContent="center" mt={3}>
          <Typography variant="h3" className={cardStyles.title}>
            My Courses
          </Typography>
        </Box>

        {isMe && userDetail && userDetail.chiTietKhoaHocGhiDanh ? (
          <Box display="flex" justifyContent="center" mt={3}>
            <DataLength
              items={userDetail.chiTietKhoaHocGhiDanh.length}
              type={"courses"}
            />
          </Box>
        ) : null}

        <Grid container spacing={2} justify="center">
          {courseListRender}
        </Grid>
      </Card>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    userDetail: state.courses.userDetail,
    error: state.user.error,
    success: state.user.success,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUserDetail: () => dispatch(actions.fetchUserDetail()),
    onEnroll: (courseId, isMe) =>
      dispatch(actions.EnrollCourse(courseId, isMe)),
    onUserClearMessage: () => dispatch(actions.userClearMessage()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Courses));
