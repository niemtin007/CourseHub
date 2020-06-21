import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import * as actions from "../../../store/actions";

import Skeleton from "@material-ui/lab/Skeleton";

import { Card, CardMedia } from "@material-ui/core";
import { Button, Box, Avatar, Typography } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import FindInPageIcon from "@material-ui/icons/FindInPage";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import BuildIcon from "@material-ui/icons/Build";

import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";
import { useSlopeCardMediaStyles } from "@mui-treasury/styles/cardMedia/slope";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 310,
    minWidth: 270,
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
  button: {
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

const ShowcaseCard = (props) => {
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();

  const { isMe, error, success } = props;
  const { imageLink, courseId, onEnroll, onUserClearMessage } = props;

  const user = JSON.parse(localStorage.getItem("user"));

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (success) {
      enqueueSnackbar(success, { variant: "success" });
      onUserClearMessage();
    }
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      onUserClearMessage();
    }
  }, [error, success, enqueueSnackbar, onUserClearMessage]);

  const infoList = [
    { icon: <FindInPageIcon fontSize="small" />, text: "1 article" },
    {
      icon: <AllInclusiveIcon fontSize="small" />,
      text: "Full lifetime accesso",
    },
    {
      icon: <PhoneIphoneIcon fontSize="small" />,
      text: "Access on mobile and TV",
    },
    {
      icon: <BuildIcon fontSize="small" />,
      text: "SkillsFuture Credit eligible",
    },
    {
      icon: <VerifiedUserIcon fontSize="small" />,
      text: "Certificate of Completion",
    },
  ];

  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      {imageLink ? (
        <CardMedia classes={mediaStyles} image={imageLink} />
      ) : (
        <Skeleton variant="rect" width={"100%"} height={150} />
      )}
      <Avatar className={cardStyles.avatar} src={"https://i.pravatar.cc/300"} />

      <Box mt={2}>
        <Typography align="center" variant="h5" gutterBottom>
          Free 100%
        </Typography>
      </Box>

      {user && user.accessToken ? (
        <Box mx={2}>
          <Button
            size="small"
            onClick={() => onEnroll(courseId, isMe)}
            className={cardStyles.button}
          >
            {isMe ? "Leave this course" : "Enroll Now"}
          </Button>
        </Box>
      ) : (
        <Box mx={2}>
          <Box
            component={Link}
            to={"/sign-in"}
            style={{ textDecoration: "none" }}
          >
            <Button size="small" className={cardStyles.button}>
              Login to Enroll
            </Button>
          </Box>
        </Box>
      )}

      <Box mt={2}>
        <Box ml={2}>
          <Typography variant="subtitle1">This course includes</Typography>
        </Box>
        <List disablePadding dense>
          {infoList.map((info, index) => (
            <ListItem key={index}>
              <ListItemIcon style={{ minWidth: 32 }}>{info.icon}</ListItemIcon>
              <ListItemText secondary={info.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.user.error,
    success: state.user.success,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEnroll: (courseId, isMe) =>
      dispatch(actions.EnrollCourse(courseId, isMe)),
    onUserClearMessage: () => dispatch(actions.userClearMessage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowcaseCard);
