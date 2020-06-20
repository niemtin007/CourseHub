import React, { Fragment } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { Drawer, SwipeableDrawer, Hidden } from "@material-ui/core";

import MenuList from "../NavigationItems/MenuList";

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  drawer: {
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    width: 0,
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1,
    },
  },
}));

const Sidebar = ({ openSidebar, drawSidebar, open, close }) => {
  const classes = useStyles();

  return (
    <Fragment>
      {/* Left menu for desktop */}
      <Hidden xsDown>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: openSidebar,
            [classes.drawerClose]: !openSidebar,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: openSidebar,
              [classes.drawerClose]: !openSidebar,
            }),
          }}
        >
          <MenuList />
        </Drawer>
      </Hidden>
      {/* Left menu for mobile */}
      <SwipeableDrawer
        anchor="left"
        open={drawSidebar}
        onClose={close}
        onOpen={open}
      >
        <MenuList close={close} />
      </SwipeableDrawer>
    </Fragment>
  );
};

export default Sidebar;
