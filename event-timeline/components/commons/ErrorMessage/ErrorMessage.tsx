import { Box, Typography } from "@mui/material";
import React from "react";

type ErrorMessageProps = Readonly<{
  message?: string;
}>;

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <Box>
    <Typography variant="body1">Sorry.. there was an error 😔</Typography>
    {message && <Typography variant="body1">{message}</Typography>}
  </Box>
);
