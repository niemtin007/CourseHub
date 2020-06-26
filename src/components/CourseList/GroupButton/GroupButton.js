import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { InputLabel } from "@material-ui/core";
import { groupItems } from "../../Courses/InputCustom/GroupList";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

const GroupButton = (props) => {
  const classes = useStyles();
  const { group, onChangeGroup, isMe } = props;

  return (
    <FormControl
      variant="outlined"
      size="small"
      className={classes.formControl}
      disabled={isMe}
    >
      <InputLabel>Choose Group</InputLabel>
      <Select
        value={group}
        onChange={(event) => onChangeGroup(event.target.value)}
        label="Choose Group"
      >
        {groupItems.map((group) => (
          <MenuItem key={group.value} value={group.value}>
            {group.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GroupButton;
