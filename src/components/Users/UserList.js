import React, { useEffect, Fragment } from "react";

import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import { makeStyles } from "@material-ui/core/styles";

import { List, ListItem, ListItemSecondaryAction } from "@material-ui/core";
import { ListItemText, ListItemAvatar, Avatar } from "@material-ui/core";
import { Box, TextField, Button, Grid } from "@material-ui/core";
import { Badge, IconButton, Fab, Tooltip } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Spinner from "../UI/Spinner/Spinner";
import DataLength from "../DataDisplay/DataLength";
import ChooseGroup from "./InputCustom/ChooseGroup";

const useStyles = makeStyles((theme) => ({
  userItems: {
    width: "100%",
    minWidth: 350,
    backgroundColor: theme.palette.background.paper,
  },
  userList: {
    height: "74.5vh",
    overflowY: "auto",
    "@media (max-width: 756px)": {
      height: "25vh",
    },
  },
  childMargin: {
    "& > *": {
      margin: theme.spacing(0),
    },
  },
}));

function UserList(props) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const { group, tabIndex, success, error, userList, loading } = props;
  const {
    onFetchInfoClick,
    onSearchUser,
    onEditUserClick,
    onAddUserClick,
    onFetchUsers,
    onDeleteUser,
    onFetchCourseApprovalPending,
    onFetchCourseApproved,
    onFetchCourseNoneEnroll,
  } = props;

  useEffect(() => {
    onFetchUsers(group);
  }, [onFetchUsers, group]);

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

  const handleInfo = (selectedUser, avatarIndex) => {
    onFetchInfoClick(selectedUser, tabIndex, avatarIndex);
    onFetchCourseApprovalPending(selectedUser);
    onFetchCourseApproved(selectedUser);
    onFetchCourseNoneEnroll(selectedUser);
  };

  const handleDeleteConfirm = (user) => {
    enqueueSnackbar(`Are you sure to delete ${user.taiKhoan}?`, {
      variant: "info",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      action: (
        <Button
          size="small"
          variant="contained"
          onClick={() => onDeleteUser(user, group)}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      ),
    });
  };

  let userListRender = <Spinner />;

  if (userList && userList.length > 0) {
    userListRender = userList.map((user, index) => {
      const isGV = user.maLoaiNguoiDung === "GV";
      const labelId = `checkbox-list-secondary-label-${index}`;
      return (
        <ListItem
          key={user.taiKhoan}
          button
          onClick={() => handleInfo(user, index)}
        >
          <ListItemAvatar>
            <Badge
              badgeContent={isGV ? user.maLoaiNguoiDung : null}
              color="error"
            >
              <Avatar
                alt={`Avatar n°${index + 1}`}
                src={
                  index > 69
                    ? null
                    : `https://i.pravatar.cc/150?img=${index + 1}`
                }
              />
            </Badge>
          </ListItemAvatar>
          <ListItemText
            id={labelId}
            primary={user.taiKhoan}
            secondary={user.email}
          />
          <ListItemSecondaryAction>
            <Tooltip title="Edit" placement="left">
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => onEditUserClick(user, tabIndex)}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete" placement="right">
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteConfirm(user)}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </ListItemSecondaryAction>
        </ListItem>
      );
    });
  }

  return (
    <Fragment>
      <List dense className={classes.userItems}>
        <ListItem>
          <Grid container justify="space-between" alignItems="center">
            <Fab
              color="primary"
              size="small"
              aria-label="add"
              onClick={() => onAddUserClick()}
              disabled={loading}
            >
              <Tooltip title="Add" placement="right">
                <AddIcon />
              </Tooltip>
            </Fab>

            {userList && userList.length ? (
              <DataLength items={userList.length} type={"users"} />
            ) : null}

            <ChooseGroup />
          </Grid>
        </ListItem>

        <ListItem>
          <Box mb={1} mr={1} width={"100%"}>
            <TextField
              id="filled-search"
              label="Search User..."
              type="search"
              fullWidth
              onChange={(event) => onSearchUser(event.target.value, group)}
            />
          </Box>
        </ListItem>

        <Box className={classes.userList}>{userListRender}</Box>
      </List>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    group: state.auth.group,
    tabIndex: state.usersManager.tabIndex,
    userList: state.usersManager.userList,
    error: state.usersManager.error,
    success: state.usersManager.success,
    loading: state.usersManager.loading,
    coursesPendingList: state.usersManager.coursesPendingList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchInfoClick: (selectedUser, tabIndex, avatarIndex) =>
      dispatch(actions.fetchInfoClick(selectedUser, tabIndex, avatarIndex)),
    onSearchUser: (keyWord, group) =>
      dispatch(actions.searchUser(keyWord, group)),
    onEditUserClick: (selectedUser, tabIndex) =>
      dispatch(actions.editUserClick(selectedUser, tabIndex)),
    onAddUserClick: () => dispatch(actions.addUserClick()),
    onFetchUsers: (group) => dispatch(actions.fetchUsers(group)),
    onDeleteUser: (selectedUser, group) =>
      dispatch(actions.deleteUser(selectedUser, group)),
    onFetchCourseApprovalPending: (selectedUser) =>
      dispatch(actions.fetchCourseApprovalPending(selectedUser)),
    onFetchCourseApproved: (selectedUser) =>
      dispatch(actions.fetchCourseApproved(selectedUser)),
    onFetchCourseNoneEnroll: (selectedUser) =>
      dispatch(actions.fetchCourseNoneEnroll(selectedUser)),
    // onMessageReset: () => dispatch(actions.clearMessage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
