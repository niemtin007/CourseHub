import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { connect } from "react-redux";
import { groupItems } from "../../Courses/InputCustom/GroupList";

import * as actions from "../../../store/actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
}));

const ChooseGroup = (props) => {
  const classes = useStyles();
  const { group } = props;
  const { onChooseGroup, onFetchUsers } = props;

  const handleChooseGroup = (event) => {
    onChooseGroup(event.target.value);
    onFetchUsers(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select value={group} onChange={handleChooseGroup}>
          {groupItems.map((item) => (
            <MenuItem
              key={item.value || item.maDanhMuc}
              value={item.value || item.maDanhMuc}
            >
              {item.label || item.tenDanhMuc}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    group: state.auth.group,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChooseGroup: (group) => dispatch(actions.chooseGroup(group)),
    onFetchUsers: (group) => dispatch(actions.fetchUsers(group)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseGroup);
