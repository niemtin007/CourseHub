import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Typography,
  Button,
  Box,
  useMediaQuery,
  CardHeader,
  Avatar,
} from "@material-ui/core";

import { LiveTv, AllInclusive, Bookmark } from "@material-ui/icons";

import { blue } from "@material-ui/core/colors";

import CourseList from "../../components/CourseList/CourseList";

import heroImage from "../../assets/images/home-hero.jpg";

const useStyles = makeStyles((theme) => ({
  heroText: {
    position: "absolute",
    margin: "0 10% 0 10%",
    color: "white",
  },
  header: {
    height: "60vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
  },
  avatar: {
    backgroundColor: blue[600],
  },
}));

function Dashboard() {
  const classes = useStyles();

  const matchSM = useMediaQuery("(min-width:600px)");

  return (
    <Fragment>
      <Grid container alignItems="center" className={classes.header}>
        <Grid item className={classes.heroText}>
          <Typography variant="h4" gutterBottom>
            Learn HTML , CSS , Web Apps & More
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Learn How To Build Websites & Apps Write A Code Or Start A Business
          </Typography>
          <Button variant="contained" color="primary">
            Free trailer
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        direction={matchSM ? "row" : "column"}
        justify="space-between"
        style={{
          background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
        }}
      >
        <Box mx={3}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <LiveTv />
              </Avatar>
            }
            title="100 online courses"
            subheader="Enjoy a variety of fresh topics"
          />
        </Box>
        <Box mx={3}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <Bookmark />
              </Avatar>
            }
            title="Expert instruction"
            subheader="Find the right instructor for you"
          />
        </Box>
        <Box mx={3}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <AllInclusive />
              </Avatar>
            }
            title="Lifetime access"
            subheader="Learn on your schedule"
          />
        </Box>
      </Grid>

      <CourseList />
    </Fragment>
  );
}

export default Dashboard;
