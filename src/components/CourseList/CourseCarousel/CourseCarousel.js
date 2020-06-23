import React from "react";

import { Grid, useMediaQuery } from "@material-ui/core";

import Carousel from "../../UI/Carousel";
import CourseCard from "../CourseCard/CourseCard";

const CourseCarousel = ({ courseList }) => {
  let totalItems = 1;
  if (useMediaQuery("(min-width:800px)")) {
    totalItems = 2;
  }
  if (useMediaQuery("(min-width:1000px)")) {
    totalItems = 3;
  }
  if (useMediaQuery("(min-width:1204px)")) {
    totalItems = 4;
  }
  if (useMediaQuery("(min-width:1450px)")) {
    totalItems = 5;
  }
  if (useMediaQuery("(min-width:1632px)")) {
    totalItems = 6;
  }

  // let screenSize = window.innerWidth;
  let courseLength = courseList.length;

  if (courseLength <= totalItems) {
    totalItems = courseLength;
  }

  let groupItems = courseList.length / totalItems;

  let groupList = [];
  for (let i = 0; i <= groupItems; i++) {
    groupList.push(i);
  }

  const CourseItems = ({ index, courseList }) => {
    let itemStart = index * totalItems;
    let itemEnd = itemStart + totalItems;
    if (itemEnd > courseLength) {
      itemEnd = courseLength;
      itemStart = courseLength - totalItems;
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

    return (
      <Grid container justify="center" spacing={2}>
        {items}
      </Grid>
    );
  };

  return (
    <div style={{ color: "#494949" }}>
      <Carousel
        autoPlay={false}
        timer={500}
        animation={"slide"}
        indicators={false}
        timeout={300}
        navButtonsAlwaysVisible={false}
      >
        {groupList.map((course, index) => (
          <CourseItems key={index} index={index} courseList={courseList} />
        ))}
      </Carousel>
    </div>
  );
};

export default CourseCarousel;
