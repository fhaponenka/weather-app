import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import useChartOptions from "./useChartOptions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
  },
}));

export function BarChart() {
  const classes = useStyles();
  const chartOptions = useChartOptions();

  return (
    <Box display="flex" className={classes.root}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Box>
  );
}
