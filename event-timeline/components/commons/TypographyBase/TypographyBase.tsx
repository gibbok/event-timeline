import { Typography } from "@mui/material";
import React from "react";

type TypographyTableProps = React.PropsWithChildren<{}>;

export const TypographyTable = ({ children }: TypographyTableProps) => (
  <Typography fontSize={14}>{children}</Typography>
);
