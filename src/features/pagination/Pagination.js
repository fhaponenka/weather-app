import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, IconButton, makeStyles } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";
import {
  getPageIndex,
  isNextPageVisible,
  isPrevPageVisible,
} from "./selectors";

import { changePage } from "../../shared/sharedSlice";

const useStyles = makeStyles((theme) => ({
  icon: {
    height: 140,
    width: "auto",
    color: "blue",
    [theme.breakpoints.down("sm")]: {
      height: 80,
    },
  },
}));

export function Pagination() {
  const isNextVisible = useSelector(isNextPageVisible);
  const isPrevVisible = useSelector(isPrevPageVisible);
  const pageIndex = useSelector(getPageIndex);

  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between" width="100%">
      <IconButton
        aria-label="previous"
        onClick={() => dispatch(changePage(pageIndex - 1))}
        style={{
          visibility: isPrevVisible ? "visible" : "hidden",
        }}
        disableRipple
      >
        <ArrowRightAlt
          className={classes.icon}
          style={{ transform: "rotate(180deg)" }}
        />
      </IconButton>
      <IconButton
        aria-label="next"
        onClick={() => dispatch(changePage(pageIndex + 1))}
        style={{
          visibility: isNextVisible ? "visible" : "hidden",
        }}
        disableRipple
      >
        <ArrowRightAlt className={classes.icon} />
      </IconButton>
    </Box>
  );
}
