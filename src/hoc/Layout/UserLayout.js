import React from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions";

import { SnackbarProvider } from "notistack";
import { CssBaseline } from "@material-ui/core";
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Appbar from "../../components/Navigation/Appbar/Appbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

// import theme from "../../components/UI/Theme";

const UserLayout = (props) => {
  const { sideOpen, sideDraw, darkTheme } = props;
  const { onSideOpen, onDrawOpen, onDrawclose } = props;
  const localTheme = JSON.parse(localStorage.getItem("darkTheme"));

  let isTheme = darkTheme;
  if (!darkTheme) {
    isTheme = localTheme;
  }

  const theme = responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: isTheme ? "dark" : "light",
      },
      mixins: {
        toolbar: {
          height: 56,
        },
      },
    })
  );

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

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider preventDuplicate maxSnack={3}>
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
      </SnackbarProvider>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    sideOpen: state.ui.sideOpen,
    sideDraw: state.ui.sideDraw,
    darkTheme: state.ui.darkTheme,
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
