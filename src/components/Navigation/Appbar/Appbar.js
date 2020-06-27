import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar } from "@material-ui/core";
import { Hidden, useScrollTrigger } from "@material-ui/core";
import { IconButton, Typography } from "@material-ui/core";
import { Fab, Zoom } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import DropMenu from "../NavigationItems/DropMenu";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "linear-gradient(120deg, #2980b9, #8e44ad)",
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  toobarGutters: {
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(2),
    },
  },
  scrollTop: {
    zIndex: 2000,
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
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
  let { openToggleClicked, drawerToggleClicked } = props;

  return (
    <ElevationScroll {...props}>
      <Fragment>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toobarGutters} disableGutters>
            <Hidden xsDown>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={openToggleClicked}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Logo />
            </Hidden>
            <Hidden smUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={drawerToggleClicked}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
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
