import React from "react";
import { Field } from "formik";
import { Select } from "formik-material-ui";
import { Box, FormControl, InputLabel, MenuItem } from "@material-ui/core";

export default function FormikSelect(props) {
  const { label, name, items, disabled } = props;

  return (
    <Box m={1} minWidth={120}>
      <FormControl fullWidth variant="outlined" disabled={disabled}>
        <InputLabel>{label}</InputLabel>
        <Field component={Select} name={name} label={label} disabled={disabled}>
          {items.map((item) => (
            <MenuItem
              key={item.value || item.maDanhMuc}
              value={item.value || item.maDanhMuc}
            >
              {item.label || item.tenDanhMuc}
            </MenuItem>
          ))}
        </Field>
      </FormControl>
    </Box>
  );
}
