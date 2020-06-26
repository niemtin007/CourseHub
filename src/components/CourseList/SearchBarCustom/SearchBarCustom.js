import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const SearchBarCustom = ({ onChangeKeyWord }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        label="Search courses"
        type="search"
        size="small"
        variant="outlined"
        className={classes.input}
        onChange={(event) => onChangeKeyWord(event.target.value)}
      />
    </form>
  );
};

export default SearchBarCustom;
