import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Media() {
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
  return (
    <Grid container justify="center" wrap="nowrap">
      {Array.from(new Array(totalItems)).map((item, index) => (
        <Box key={index} width={200} marginRight={2} my={2}>
          <Skeleton variant="rect" width={200} height={112} />
          <Box pt={2}>
            <Skeleton />
          </Box>
          <Box pt={8}>
            <Skeleton width={70} />
          </Box>
          <Box pt={6} height="50">
            <Skeleton />
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

export default function SkeletonCard() {
  return (
    <Box overflow="hidden">
      <Media />
    </Box>
  );
}
