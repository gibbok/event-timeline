import { Typography } from "@mui/material";
import React from "react";

export const ErrorMessage = (error: unknown) => (
  <Typography variant="body1">
    Sorry.. there was an error 😔 {JSON.stringify(error)}
  </Typography>
);
