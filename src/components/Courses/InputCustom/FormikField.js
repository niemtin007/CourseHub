import React from "react";

import { Field } from "formik";
import { TextField } from "formik-material-ui";
import { Box } from "@material-ui/core";

export default function FormikField(props) {
  const { label, name, type = "text", disabled } = props;

  return (
    <Box m={1} minWidth={120}>
      <Field
        fullWidth
        multiline
        component={TextField}
        label={label}
        name={name}
        type={type}
        disabled={disabled}
        variant="outlined"
      />
    </Box>
  );
}
