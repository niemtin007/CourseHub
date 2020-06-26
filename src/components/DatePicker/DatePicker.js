import "date-fns";
import React from "react";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function DatePicker({ pickSelectedDate, value, disabled }) {
  const handleDateChange = (date) => {
    pickSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        fullWidth
        disabled={disabled}
        margin="normal"
        inputVariant="outlined"
        id="date-picker-dialog"
        label="Date picker dialog"
        format="MM/dd/yyyy"
        value={value}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        style={{ paddingRight: 0 }}
      />
    </MuiPickersUtilsProvider>
  );
}
