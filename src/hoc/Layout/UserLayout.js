import React from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import theme from "../../components/UI/Theme";

import Appbar from "../../components/Navigation/Appbar/Appbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    marginBottom: 48,
  },
  content: {
    flexGrow: 1,
    overflow: "hidden",
    paddingTop: theme.spacing(1),
  },
}));

const UserLayout = (props) => {
  const classes = useStyles();

  let { sideOpen, sideDraw } = props;
  let { onSideOpen, onDrawOpen, onDrawclose } = props;

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Appbar
          openToggleClicked={onSideOpen}
          drawerToggleClicked={onDrawOpen}
        />
        <SideDrawer
          openSidebar={sideOpen}
          drawSidebar={sideDraw}
          open={onDrawOpen}
          close={onDrawclose}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {props.children}
        </main>
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    sideOpen: state.ui.sideOpen,
    sideDraw: state.ui.sideDraw,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSideOpen: () => dispatch(actions.openSidebar()),
    onDrawOpen: () => dispatch(actions.drawOpen()),
    onDrawclose: () => dispatch(actions.drawClose()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout);
