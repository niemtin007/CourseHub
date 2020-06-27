import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { Menu, Box, useMediaQuery } from "@material-ui/core";
import { Button, ButtonGroup, IconButton } from "@material-ui/core";

import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoreIcon from "@material-ui/icons/MoreVert";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArchiveIcon from "@material-ui/icons/Archive";

import AvatarItem from "../Avatar/AvatarItem";
import DarkThemeSwitch from "../../SwitchButton/DarkThemeSwitch";

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "none",
  },
  marginLeft: {
    marginLeft: theme.spacing(1),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const DropMenu = (props) => {
  const classes = useStyles();
  const { isAuthenticated, darkTheme } = props;
  const matchMD = useMediaQuery("(min-width:960px)");
  const localTheme = JSON.parse(localStorage.getItem("darkTheme"));

  let isTheme = darkTheme;
  if (!darkTheme) {
    isTheme = localTheme;
  }

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(false);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuRender = isAuthenticated ? (
    <Box
      display="flex"
      flexDirection={matchMD ? "row" : "column-reverse"}
      alignItems="center"
      minWidth={matchMD ? 0 : 180}
    >
      <Box m={matchMD ? 0 : 1}>
        <Button
          disableElevation
          color="primary"
          variant="contained"
          size="small"
          startIcon={<ExitToAppIcon />}
          className={classes.button}
          component={Link}
          to={"/logout"}
        >
          Log Out
        </Button>
      </Box>
      <Box my={matchMD ? 0 : 1} ml={matchMD ? 1 : 0}>
        <Button
          disableElevation
          color="default"
          variant={isTheme ? "outlined" : "contained"}
          size="small"
          startIcon={<ArchiveIcon />}
          className={classes.button}
          component={Link}
          to={"/my-courses"}
        >
          My Courses
        </Button>
      </Box>
      <Box m={matchMD ? 0 : 1}>
        <DarkThemeSwitch />
      </Box>
      <Box m={matchMD ? 0 : 1}>
        <IconButton disableRipple style={{ padding: 0 }}>
          <AvatarItem />
        </IconButton>
      </Box>
    </Box>
  ) : (
    <Box
      display="flex"
      flexDirection={matchMD ? "row" : "column"}
      alignItems="center"
      m={matchMD ? 0 : 1}
      minWidth={matchMD ? 0 : 180}
    >
      <Box m={matchMD ? 0 : 1}>
        <DarkThemeSwitch />
      </Box>
      <ButtonGroup disableElevation variant="contained" size="small">
        <Button
          color="primary"
          startIcon={<VpnKeyIcon />}
          component={Link}
          to={"/sign-in"}
          className={classes.button}
        >
          Login
        </Button>
        <Button
          color="default"
          startIcon={<PersonAddIcon />}
          component={Link}
          to={"/sign-up"}
          className={classes.button}
        >
          Sign Up
        </Button>
      </ButtonGroup>
    </Box>
  );

  return (
    <Fragment>
      <div className={classes.sectionDesktop}>{menuRender}</div>

      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls="menu-mobile"
          aria-haspopup="true"
          onClick={(e) => setMobileMoreAnchorEl(e.currentTarget)}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>

      {/* Collapse menu */}
      <Menu
        anchorEl={mobileMoreAnchorEl}
        id="menu-mobile"
        keepMounted
        open={isMobileMenuOpen}
        onClose={() => setMobileMoreAnchorEl(false)}
      >
        {menuRender}
      </Menu>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    darkTheme: state.ui.darkTheme,
  };
};

export default connect(mapStateToProps)(DropMenu);
