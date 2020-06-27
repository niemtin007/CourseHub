import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

const ChooseGroup = (props) => {
  const classes = useStyles();
  const { sortBy, onChangeSortBy } = props;

  const handleChooseGroup = (event) => {
    onChangeSortBy(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      className={classes.formControl}
    >
      <InputLabel>Sort by</InputLabel>
      <Select value={sortBy} onChange={handleChooseGroup} label="Sort by">
        <MenuItem value="date">Created Date</MenuItem>
        <MenuItem value="a-z">Title: A-to-Z</MenuItem>
        <MenuItem value="z-a">Title: Z-to-A</MenuItem>
        <MenuItem value="id">Course ID</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ChooseGroup;
