import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import { useSnackbar } from "notistack";

import { Typography, useMediaQuery, Tooltip } from "@material-ui/core";

import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import BlockIcon from "@material-ui/icons/Block";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddUsers from "./AddUsers";
import Spinner from "../UI/Spinner/Spinner";

const useStyles = makeStyles(({ palette, typography }) => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    margin: "auto",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: "0.875em",
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
  expanseHeading: {
    fontSize: typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: typography.pxToRem(15),
    color: palette.text.secondary,
  },
}));

const UserDetails = (props) => {
  const styles = useStyles();
  const matches = useMediaQuery("(min-width:1050px)");
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: "50%",
  });

  const {
    success,
    error,
    loading,
    selectedUser,
    avatarIndex,
    coursesPendingList,
    coursesApprovedList,
    coursesNoneEnrollList,
  } = props;
  const { onApproveCoursePending, onDisapproveCourse, onMessageReset } = props;

  const { enqueueSnackbar } = useSnackbar();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
    onMessageReset();
  }, [error, success, enqueueSnackbar, onMessageReset]);

  let coursesPendingRender;
  if (coursesPendingList && coursesPendingList.length) {
    coursesPendingRender = (
      <Box p={2} width={"100%"} className={borderedGridStyles.item}>
        <List dense>
          {coursesPendingList.map((course, index) => (
            <ListItem key={`${course.maKhoaHoc}${index}`}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={course.tenKhoaHoc}
                style={{ paddingRight: 60 }}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="allow"
                  onClick={() =>
                    onApproveCoursePending(course.maKhoaHoc, selectedUser)
                  }
                >
                  <Tooltip title="Approve" placement="left">
                    <ThumbUpAltIcon />
                  </Tooltip>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="quickAllow"
                  onClick={() =>
                    onDisapproveCourse(course.maKhoaHoc, selectedUser)
                  }
                >
                  <Tooltip title="Ban" placement="right">
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

  let coursesApprovedRender;
  if (coursesApprovedList && coursesApprovedList.length) {
    coursesApprovedRender = (
      <Box p={2} width={"100%"} className={borderedGridStyles.item}>
        <List dense>
          {coursesApprovedList.map((course, index) => (
            <ListItem key={`${course.maKhoaHoc}${index}`}>
              <ListItemAvatar>
                <Avatar>
                  <FolderSharedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={course.tenKhoaHoc} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="quickAllow"
                  onClick={() =>
                    onDisapproveCourse(course.maKhoaHoc, selectedUser)
                  }
                >
                  <Tooltip title="Ban" placement="right">
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

  let coursesNoneEnrollListRender;
  if (coursesNoneEnrollList && coursesNoneEnrollList.length) {
    coursesNoneEnrollListRender = (
      <Box p={2} width={"100%"} className={borderedGridStyles.item}>
        <List dense>
          {coursesNoneEnrollList.map((course, index) => (
            <ListItem key={`${course.maKhoaHoc}${index}`}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={course.tenKhoaHoc} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="block"
                  onClick={() =>
                    onApproveCoursePending(course.maKhoaHoc, selectedUser)
                  }
                >
                  <Tooltip title="Approve" placement="right">
                    <ThumbUpAltIcon />
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
    <Card className={cx(styles.card, shadowStyles.root)}>
      <Box
        display="flex"
        alignItems="center"
        flexWrap={matches ? "nowrap" : "wrap"}
      >
        <Box flexGrow={1} m={2}>
          <CardContent>
            <Avatar
              className={styles.avatar}
              src={`https://i.pravatar.cc/150?img=${avatarIndex + 1}`}
            />
            <h3 className={styles.heading}>{selectedUser.taiKhoan}</h3>
          </CardContent>

          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            disabled={loading}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={styles.expanseHeading}>
                Pending Courses
              </Typography>
              <Typography className={styles.secondaryHeading}>
                Need approve to allow the user accessing
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {coursesPendingRender}
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            disabled={loading}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={styles.expanseHeading}>
                Approved Courses
              </Typography>
              <Typography className={styles.secondaryHeading}>
                The courses have already accessed by user
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {coursesApprovedRender}
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            disabled={loading}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={styles.expanseHeading}>
                Available courses
              </Typography>
              <Typography className={styles.secondaryHeading}>
                Registing a course quickly for user
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {coursesNoneEnrollListRender}
            </ExpansionPanelDetails>
          </ExpansionPanel>
          {loading ? <Spinner /> : null}
        </Box>

        <Box flexGrow={1} alignSelf="flex-start" minWidth={250} m={2}>
          <AddUsers selectedUser={selectedUser} preview={true} />
        </Box>
      </Box>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.usersManager.error,
    success: state.usersManager.success,
    loading: state.usersManager.loading,
    selectedUser: state.usersManager.selectedUser,
    avatarIndex: state.usersManager.avatarIndex,
    coursesPendingList: state.usersManager.coursesPendingList,
    coursesApprovedList: state.usersManager.coursesApprovedList,
    coursesNoneEnrollList: state.usersManager.coursesNoneEnrollList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onApproveCoursePending: (courseId, selectedUser) =>
      dispatch(actions.approveCoursePending(courseId, selectedUser)),
    onDisapproveCourse: (courseId, selectedUser) =>
      dispatch(actions.disapproveCourse(courseId, selectedUser)),
    onMessageReset: () => dispatch(actions.clearMessage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
