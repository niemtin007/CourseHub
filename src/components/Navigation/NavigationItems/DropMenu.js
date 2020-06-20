import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { Menu, Box } from "@material-ui/core";
import { Button, ButtonGroup, IconButton } from "@material-ui/core";

import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoreIcon from "@material-ui/icons/MoreVert";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import AvatarItem from "../Avatar/AvatarItem";

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

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(false);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuRender = isAuthenticated ? (
    <Box>
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
      <IconButton disableRipple style={{ padding: 0 }}>
        <AvatarItem />
      </IconButton>
    </Box>
  ) : (
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
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAuth: (values, history) => dispatch(actions.auth(values, history)),
//   };
// };

export default connect(mapStateToProps)(DropMenu);
