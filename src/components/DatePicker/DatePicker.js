import "date-fns";
import React from "react";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function DatePicker({ pickSelectedDate, value, disabled }) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        fullWidth
        clearable
        disabled={disabled}
        margin="normal"
        inputVariant="outlined"
        id="date-picker-dialog"
        label="Date picker dialog"
        format="MM/dd/yyyy"
        value={value}
        onChange={(date) => pickSelectedDate(date)}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        style={{ paddingRight: 0 }}
      />
    </MuiPickersUtilsProvider>
  );
}
