import React, { Fragment } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { Box, Divider, Hidden } from "@material-ui/core";
import { Drawer, SwipeableDrawer } from "@material-ui/core";

import MenuList from "../NavigationItems/MenuList";
import AvatarInfo from "../Avatar/AvatarInfo";

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  drawer: {
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    overflow: "hidden",
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

  const menuRender = (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box flexGrow={1}>
        <MenuList />
      </Box>
      {openSidebar || drawSidebar ? (
        <Box>
          <AvatarInfo />
          <Divider />
        </Box>
      ) : null}
    </Box>
  );

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
          {menuRender}
        </Drawer>
      </Hidden>
      {/* Left menu for mobile */}
      <SwipeableDrawer
        anchor="left"
        open={drawSidebar}
        onClose={close}
        onOpen={open}
      >
        {menuRender}
      </SwipeableDrawer>
    </Fragment>
  );
};

export default Sidebar;
