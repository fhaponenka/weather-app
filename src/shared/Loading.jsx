import React from "react";
import { Box, Typography } from "@material-ui/core";

export default function Loading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: 150 }}
    >
      <Typography variant="h2" component="h2">
        Loading...
      </Typography>
    </Box>
  );
}
