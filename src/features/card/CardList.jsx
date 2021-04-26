import { Box, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback } from "react";
import Card from "./Card";
import { getActiveCardId, getVisibleCards } from "./selectors";
import { setActiveCardId } from "./cardSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 20,
  },
}));

export function CardList() {
  const visibleCards = useSelector(getVisibleCards);

  const activeCardId = useSelector(getActiveCardId);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleCardActivated = useCallback(
    (id) => dispatch(setActiveCardId(id)),
    [dispatch]
  );

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignSelf="center"
      className={classes.root}
    >
      {visibleCards.map(({ date, temperature, id }) => (
        <Card
          key={id}
          temperature={temperature}
          date={date}
          id={id}
          isActive={activeCardId === id}
          activateCard={handleCardActivated}
        />
      ))}
    </Box>
  );
}
