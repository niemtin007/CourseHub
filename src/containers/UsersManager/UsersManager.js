import React from "react";

import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";

import UserList from "../../components/Users/UserList";
import AddUsers from "../../components/Users/AddUsers";
import UserDetails from "../../components/Users/UserDetails";

const useStyles = makeStyles((theme) => ({
  userList: {
    flex: 2,
  },
  detail: {
    flex: 3,
    minWidth: 350,
    overflowY: "auto",
    background: "linear-gradient(120deg, #2980b9, #8e44ad)",
    "@media (min-width: 756px)": {
      height: "92.4vh",
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function UsersManager({ tabIndex }) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm={"auto"} className={classes.userList}>
        <Box>
          <UserList />
        </Box>
      </Grid>
      <Grid item className={classes.detail}>
        <TabPanel value={tabIndex} index={-1}>
          <AddUsers />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <AddUsers />
        </TabPanel>

        <TabPanel value={tabIndex} index={-2}>
          <UserDetails />
        </TabPanel>
        <TabPanel value={tabIndex} index={2}>
          <UserDetails />
        </TabPanel>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    tabIndex: state.usersManager.tabIndex,
  };
};

export default connect(mapStateToProps)(UsersManager);
