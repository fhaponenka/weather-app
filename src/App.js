import React, { useEffect } from "react";

import { Box, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./shared/Loading";
import { isLoading } from "./shared/selectors";
import WeatherInfo from "./shared/WeatherInfo";
import { fetchWeather } from "./shared/thunks";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.containerWidth,
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    alignItems: "center",
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  useEffect(() => {
    dispatch(fetchWeather("imperial"));
  }, [dispatch]);

  return (
    <Box className={classes.root}>
      {loading ? <Loading /> : <WeatherInfo />}
    </Box>
  );
}

export default App;
