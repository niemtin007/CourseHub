import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import { useSnackbar } from "notistack";

import { Typography, Tooltip } from "@material-ui/core";

import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import IconButton from "@material-ui/core/IconButton";
import BlockIcon from "@material-ui/icons/Block";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import AddCourses from "./AddCourses";
import Spinner from "../UI/Spinner/Spinner";

const useStyles = makeStyles(({ palette, typography, breakpoints }) => ({
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

const CourseDetails = (props) => {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: "50%",
  });

  const {
    error,
    success,
    loading,
    selectedCourse,
    userPendingList,
    userApprovedList,
    userRefuseList,
  } = props;
  const { onApproveUserPending, onDisapproveUser } = props;

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
  }, [error, success, enqueueSnackbar]);

  let usersPendingRender;
  if (userPendingList && userPendingList.length > 0) {
    usersPendingRender = (
      <Box p={2} width={"100%"} className={borderedGridStyles.item}>
        <List dense>
          {userPendingList.map((user, index) => (
            <ListItem key={user.biDanh} button>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${index + 1}`}
                  src={`https://i.pravatar.cc/150?img=${index + 1}`}
                />
              </ListItemAvatar>
              <ListItemText
                id={user.biDanh}
                primary={user.taiKhoan}
                // style={{ paddingRight: 90 }}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="allow"
                  onClick={() => onApproveUserPending(selectedCourse, user)}
                >
                  <Tooltip title="Approve" placement="left">
                    <ThumbUpAltIcon />
                  </Tooltip>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="disApprovel"
                  onClick={() => onDisapproveUser(selectedCourse, user)}
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

  let usersApprovedRender;
  if (userApprovedList && userApprovedList.length > 0) {
    usersApprovedRender = (
      <Box p={2} width={"100%"} className={borderedGridStyles.item}>
        <List dense>
          {userApprovedList.map((user, index) => (
            <ListItem key={user.biDanh} button>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${index + 1}`}
                  src={`https://i.pravatar.cc/150?img=${index + 1}`}
                />
              </ListItemAvatar>
              <ListItemText id={user.biDanh} primary={user.taiKhoan} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="disApprovel"
                  onClick={() => onDisapproveUser(selectedCourse, user)}
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

  let usersRefuseListRender;
  if (userRefuseList && userRefuseList.length > 0) {
    usersRefuseListRender = (
      <Box p={2} width={"100%"} className={borderedGridStyles.item}>
        <List dense>
          {userRefuseList.map((user, index) => (
            <ListItem key={user.biDanh} button>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${index + 1}`}
                  src={`https://i.pravatar.cc/150?img=${index + 1}`}
                />
              </ListItemAvatar>
              <ListItemText id={user.biDanh} primary={user.taiKhoan} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="allow"
                  onClick={() => onApproveUserPending(selectedCourse, user)}
                >
                  <Tooltip title="Approve" placement="left">
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
    <Fragment>
      <Box mb={1}>
        <AddCourses preview={true} />
      </Box>

      <Card className={cx(styles.card, shadowStyles.root)}>
        {loading ? <Spinner /> : null}
        <Box>
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
                Pending Users
              </Typography>
              <Typography className={styles.secondaryHeading}>
                These users are waiting to access
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>{usersPendingRender}</ExpansionPanelDetails>
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
                Approved Users
              </Typography>
              <Typography className={styles.secondaryHeading}>
                These users had right to access this course
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>{usersApprovedRender}</ExpansionPanelDetails>
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
                Refuse users
              </Typography>
              <Typography className={styles.secondaryHeading}>
                Enroll this course directly for users
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {usersRefuseListRender}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Box>
      </Card>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.coursesManager.error,
    success: state.coursesManager.success,
    loading: state.coursesManager.loading,
    selectedCourse: state.coursesManager.selectedCourse,
    userPendingList: state.coursesManager.userPendingList,
    userApprovedList: state.coursesManager.userApprovedList,
    userRefuseList: state.coursesManager.userRefuseList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onApproveUserPending: (selectedCourse, user) =>
      dispatch(actions.approveUserPending(selectedCourse, user)),
    onDisapproveUser: (selectedCourse, user) =>
      dispatch(actions.disapproveUser(selectedCourse, user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);
