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
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const DropMenu = (props) => {
  const classes = useStyles();
  const { isAuthenticated } = props;
  const matchSM = useMediaQuery("(min-width:600px)");

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(false);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuRender = isAuthenticated ? (
    <Box
      display="flex"
      flexDirection={matchSM ? "row" : "column-reverse"}
      alignItems="center"
      minWidth={matchSM ? 0 : 180}
    >
      <Box m={matchSM ? 0 : 1}>
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
      <Box m={matchSM ? 0 : 1}>
        <DarkThemeSwitch />
      </Box>
      <Box m={matchSM ? 0 : 1}>
        <IconButton disableRipple style={{ padding: 0 }}>
          <AvatarItem />
        </IconButton>
      </Box>
    </Box>
  ) : (
    <Box m={matchSM ? 0 : 1} minWidth={matchSM ? 0 : 180}>
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
  };
};

export default connect(mapStateToProps)(DropMenu);
