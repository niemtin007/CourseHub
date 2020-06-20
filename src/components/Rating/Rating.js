import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

// const labels = {
//   0.5: "Useless",
//   1: "Useless+",
//   1.5: "Poor",
//   2: "Poor+",
//   2.5: "Ok",
//   3: "Ok+",
//   3.5: "Good",
//   4: "Good+",
//   4.5: "Excellent",
//   5: "Excellent+",
// };

export default function HoverRating() {
  // const [value, setValue] = React.useState(4);
  // const [hover, setHover] = React.useState(-1);

  return (
    <Box
      display="flex"
      alignItems="center"
      // justifyItems="center"
      // minWidth={203}
      // alignContent="center"
      // justifyContent="center"
    >
      <Box flexGrow={1}>
        <Rating
          name="hover-feedback"
          value={4}
          precision={0.5}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
          // onChangeActive={(event, newHover) => {
          //   setHover(newHover);
          // }}
        />
      </Box>

      {/* {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
      )} */}
    </Box>
  );
}
