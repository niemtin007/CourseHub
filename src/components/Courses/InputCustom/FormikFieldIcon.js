import React, { useState } from "react";

import { useField } from "formik";

import InputLabel from "@material-ui/core/InputLabel";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import BlockIcon from "@material-ui/icons/Block";
import EditIcon from "@material-ui/icons/Edit";

import { FormControl, FormHelperText, OutlinedInput } from "@material-ui/core";

const FormikFieldIcon = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [lock, setLock] = useState(true);

  return (
    <FormControl
      variant="outlined"
      fullWidth
      error={meta.touched && meta.error ? true : false}
    >
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        multiline
        {...field}
        {...props}
        disabled={lock}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              style={{ padding: 0 }}
              onClick={() => setLock(!lock)}
              onMouseDown={(event) => event.preventDefault()}
            >
              {lock ? <EditIcon /> : <BlockIcon />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
      {meta.touched && meta.error ? (
        <FormHelperText>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default FormikFieldIcon;
