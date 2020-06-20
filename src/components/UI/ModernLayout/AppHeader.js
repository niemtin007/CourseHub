import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Fab, Zoom, useScrollTrigger } from "@material-ui/core";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import logo from "../../../assets/images/logo.png";

import Searchbar from "../../Navigation/Searchbar/Searchbar";
import DropMenu from "../../Navigation/NavigationItems/DropMenu";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  logo: {
    height: 50,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  toobarGutters: {
    paddingLeft: theme.spacing(1) + 4,
    [theme.breakpoints.up("sm")]: {
      paddingRight: theme.spacing(2),
    },
  },
  scrollTop: {
    zIndex: 2000,
    position: "fixed",
    bottom: theme.spacing(1),
    right: theme.spacing(7),
  },
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.scrollTop}
      >
        {children}
      </div>
    </Zoom>
  );
}

const Appbar = (props) => {
  const classes = useStyles();

  return (
    <ElevationScroll {...props}>
      <Fragment>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toobarGutters} disableGutters>
            {/* Collapse Button */}
            {props.children}
            {/* Logo */}
            <img className={classes.logo} src={logo} alt="Logo" />
            <Typography className={classes.title} variant="h6" noWrap />
            {/* Search Bar */}
            <Searchbar />
            {/* Right menu */}
            <DropMenu />
          </Toolbar>
        </AppBar>
        {/* ScrollTop */}
        <Toolbar id="back-to-top-anchor" disableGutters />
        <ScrollTop {...props}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Fragment>
    </ElevationScroll>
  );
};

export default Appbar;
