import { Typography } from "@mui/material";
import React from "react";

type ErrorMessageProps = Readonly<{
  message?: string;
}>;

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <Typography variant="body1">
    Sorry.. there was an error 😔{` ${message}`}
  </Typography>
);
