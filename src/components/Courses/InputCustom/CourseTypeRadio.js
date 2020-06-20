import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";

import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { connect } from "react-redux";
import * as actions from "../../../store/actions";

const useStyles = makeStyles((theme) => ({
  ".MuiFab-root": {
    width: 40,
    height: 40,
  },
}));

const clickActions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
  { icon: <FavoriteIcon />, name: "Like" },
];

const CourseTypeRadio = ({ courseIndex }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial Course Type"
        className={classes[".MuiFab-root"]}
        hidden={false}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={"left"}
      >
        {clickActions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courseIndex: state.courses.courseIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCourseList: (keyWord) => dispatch(actions.fetchCoursesList(keyWord)),
  };
};

export default connect(mapStateToProps)(CourseTypeRadio);
