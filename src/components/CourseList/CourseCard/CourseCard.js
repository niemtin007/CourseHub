import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";

import { Favorite, Share, ExpandMore } from "@material-ui/icons";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
  },
  title: {
    height: 70,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const CourseCard = ({ course }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/courses/${course.maKhoaHoc}`}>
        <CardMedia
          className={classes.media}
          image={course.hinhAnh}
          title={course.tenKhoaHoc}
        />
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="subtitle2"
            component="h5"
          >
            {course.tenKhoaHoc}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {course.luotXem} views
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="body2">
            {course.moTa}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CourseCard;
