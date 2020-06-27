import React, { useState, Fragment } from "react";
import Hidden from "@material-ui/core/Hidden";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

import { Link, withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, Tooltip } from "@material-ui/core";
import { Box, List, IconButton } from "@material-ui/core";

import {
  Menu,
  Info,
  Home,
  People,
  ViewList,
  InsertDriveFile,
} from "@material-ui/icons";

import GmailSidebarItem from "@mui-treasury/components/sidebarItem/gmail";

import Logo from "../Logo/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 5,
  },
  list: {
    width: "219px",
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  appbar: {
    background: "linear-gradient(120deg, #2980b9, #8e44ad)",
  },
  navlink: {
    color: "inherit",
    textDecoration: "none",
  },
  navIcon: {
    marginRight: "1px !important",
    fontSize: "24px !important",
  },
  collapsed: {
    padding: "0px 4px !important",
  },
}));

const MenuList = (props) => {
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem("user"));
  const { close, collapsed, sideDraw, history } = props;
  const { onDrawclose } = props;

  const [index, setIndex] = useState(history.location.pathname);

  const commonProps = (i) => ({
    selected: index === i,
    onClick: () => setIndex(i),
    collapsed: sideDraw ? false : collapsed,
    dotOnCollapsed: true,
  });

  const Dashboard = React.forwardRef(function MyComponent(props, ref) {
    //  Spread the props to the underlying DOM element.
    return (
      <div {...props} ref={ref}>
        <Link to="/" className={classes.navlink}>
          <GmailSidebarItem
            classes={{ collapsed: classes.collapsed, root: classes.root }}
            color={"#da3125"}
            startIcon={<Home className={classes.navIcon} />}
            label={"Dashboard"}
            amount={""}
            {...commonProps("/")}
            dotOnCollapsed={false}
          />
        </Link>
      </div>
    );
  });

  const Courses = React.forwardRef(function MyComponent(props, ref) {
    //  Spread the props to the underlying DOM element.
    return (
      <div {...props} ref={ref}>
        <Link to="/courses" className={classes.navlink}>
          <GmailSidebarItem
            classes={{ collapsed: classes.collapsed, root: classes.root }}
            color={"#1a73e8"}
            startIcon={<ViewList className={classes.navIcon} />}
            label={"Courses"}
            amount={""}
            {...commonProps("/courses")}
            dotOnCollapsed={false}
          />
        </Link>
      </div>
    );
  });

  const CoursesManage = React.forwardRef(function MyComponent(props, ref) {
    //  Spread the props to the underlying DOM element.
    return (
      <div {...props} ref={ref}>
        <Link to="/courses-management" className={classes.navlink}>
          <GmailSidebarItem
            classes={{ collapsed: classes.collapsed, root: classes.root }}
            color={"#8e44ad"}
            startIcon={<InsertDriveFile className={classes.navIcon} />}
            label={"Courses Manage"}
            amount={1000}
            {...commonProps("/courses-management")}
            dotOnCollapsed={true}
          />
        </Link>
      </div>
    );
  });

  const StudentsManage = React.forwardRef(function MyComponent(props, ref) {
    //  Spread the props to the underlying DOM element.
    return (
      <div {...props} ref={ref}>
        <Link to="/users-management" className={classes.navlink}>
          <GmailSidebarItem
            classes={{ collapsed: classes.collapsed, root: classes.root }}
            color={"#e37400"}
            startIcon={<People className={classes.navIcon} />}
            label={"Students Manage"}
            amount={969}
            {...commonProps("/users-management")}
            dotOnCollapsed={true}
          />
        </Link>
      </div>
    );
  });

  const About = React.forwardRef(function MyComponent(props, ref) {
    //  Spread the props to the underlying DOM element.
    return (
      <div {...props} ref={ref}>
        <Link to="/about" className={classes.navlink}>
          <GmailSidebarItem
            classes={{ collapsed: classes.collapsed, root: classes.root }}
            color={""}
            startIcon={<Info className={classes.navIcon} />}
            label={"About"}
            amount={""}
            {...commonProps("/about")}
            dotOnCollapsed={true}
          />
        </Link>
      </div>
    );
  });

  return (
    <Box
      className={classes.list}
      role="presentation"
      onClick={close}
      onKeyDown={close}
    >
      <Box className={classes.toolbar}>
        <Hidden smUp>
          <AppBar position="absolute">
            <Toolbar className={classes.appbar}>
              <IconButton color="inherit" edge="start" onClick={onDrawclose}>
                <Menu />
              </IconButton>
              <Logo />
            </Toolbar>
          </AppBar>
        </Hidden>
      </Box>

      <List style={{ marginLeft: "-9px" }}>
        <Tooltip title="Dashboard">
          <Dashboard />
        </Tooltip>

        <Tooltip title="Courses">
          <Courses />
        </Tooltip>

        {user && user.maLoaiNguoiDung === "GV" ? (
          <Fragment>
            <Tooltip title="Courses Manage">
              <CoursesManage />
            </Tooltip>

            <Tooltip title="Students Manage">
              <StudentsManage />
            </Tooltip>
          </Fragment>
        ) : null}

        <Tooltip title="About">
          <About />
        </Tooltip>
      </List>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    collapsed: !state.ui.sideOpen,
    sideDraw: state.ui.sideDraw,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDrawclose: () => dispatch(actions.drawClose()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MenuList));
