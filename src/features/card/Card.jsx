import React, {  } from "react";
import {
  Card as MuiCard,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import useTemperature from "./useTemperature";

const useStyles = makeStyles((theme) => ({
  default: {
    border: "1px solid black",
  },
  active: {
    border: "3px solid black",
  },
}));

export default function Card({
  date,
  temperature,
  isActive,
  id,
  activateCard,
}) {
  const temperatureValue = useTemperature(temperature);

  const classes = useStyles();

  return (
    <MuiCard
      className={isActive ? classes.active : classes.default}
      onClick={() => activateCard(id)}
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          Temp:
        </Typography>
        <Typography variant="h6" component="h2">
          {temperatureValue}
        </Typography>
        <Typography variant="h5" component="h2">
          Date:
        </Typography>
        <Typography variant="h6" component="h2">
          {date}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}
