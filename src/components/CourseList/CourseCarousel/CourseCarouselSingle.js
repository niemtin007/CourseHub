import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Grid } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

import CourseCard from "../CourseCard/CourseCard";

const CourseCarouselSingle = ({ courseList }) => {
  let totalItems = 1;

  if (useMediaQuery("(min-width:800px)")) {
    totalItems = 2;
  }
  if (useMediaQuery("(min-width:1024px)")) {
    totalItems = 3;
  }
  if (useMediaQuery("(min-width:1280px)")) {
    totalItems = 4;
  }
  if (useMediaQuery("(min-width:1450px)")) {
    totalItems = 5;
  }
  if (useMediaQuery("(min-width:1620px)")) {
    totalItems = 6;
  }

  const CourseItems = ({ itemStart, courseList }) => {
    let itemGap = null;
    let itemEnd = itemStart + totalItems;
    let maxIndex = courseList.length - 1;
    if (itemEnd > maxIndex) {
      itemGap = itemEnd - maxIndex;
      itemEnd = maxIndex;
    }

    let items = [];

    for (let i = itemStart; i < itemEnd; i++) {
      const course = courseList[i];
      const courseItem = (
        <Grid item key={i}>
          <CourseCard course={course} />
        </Grid>
      );
      items.push(courseItem);
    }

    if (itemGap) {
      for (let i = 0; i < itemGap; i++) {
        const course = courseList[i];
        const courseItem = (
          <Grid item key={i}>
            <CourseCard course={course} />
          </Grid>
        );
        items.push(courseItem);
      }
    }

    return (
      <Grid container justify="center" spacing={2}>
        {items}
      </Grid>
    );
  };

  return (
    <div style={{ margin: "50px 0", color: "#494949" }}>
      <Carousel
        // autoPlay={false}
        timer={500}
        animation={"slide"}
        indicators={false}
        timeout={900}
        // navButtonsAlwaysVisible={true}
      >
        {courseList.map((course, index) => (
          <CourseItems key={index} itemStart={index} courseList={courseList} />
        ))}
      </Carousel>
    </div>
  );
};

export default CourseCarouselSingle;
