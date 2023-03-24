import { CausesUI } from "@/pages/transform";
import { Box } from "@mui/material";
import React from "react";

type CausesInfoProps = CausesUI;

export const CausesInfo = ({ design, rework }: CausesInfoProps) => {
  return (
    <Box>
      <strong>Causes: </strong>
      <Box>Design: {design.join()}</Box>
      {rework && <Box>Rework: {rework.join()}</Box>}
    </Box>
  );
};
