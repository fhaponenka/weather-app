import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FormControl,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { getUnit } from "./selectors";
import { fetchWeather } from "../../shared/thunks";

const useStyles = makeStyles((theme) => ({
  formControlLabel: {
    "& svg": {
      width: "1em",
      height: "auto",
      [theme.breakpoints.up("sm")]: {
        width: "1.5em",
      },
    },
    "& .MuiFormControlLabel-label": {
      ...theme.typography.h4,
    },
  },
}));

export function Temperature() {
  const unit = useSelector(getUnit);
  const dispatch = useDispatch();
  const classes = useStyles();

  function handleUnitChange({ target: { value } }) {
    dispatch(fetchWeather(value));
  }

  return (
    <FormControl
      component="fieldset"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <RadioGroup
        row
        aria-label="temperature"
        name="temperature"
        style={{
          width: "88%",
          display: "flex",
          justifyContent: "space-between",
        }}
        defaultValue={unit}
        onChange={handleUnitChange}
      >
        <FormControlLabel
          className={classes.formControlLabel}
          value="metric"
          control={<Radio color="primary" />}
          label="Celsius"
        />

        <FormControlLabel
          className={classes.formControlLabel}
          value="imperial"
          control={<Radio color="primary" />}
          label="Fahrenheit"
        />
      </RadioGroup>
    </FormControl>
  );
}
