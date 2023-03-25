import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { CausesUI } from "./types";

type CausesInfoProps = CausesUI;

export const CausesInfo = ({ design, rework }: CausesInfoProps) => {
  return (
    <Box width="50%" ml={5} mt={3}>
      <Typography fontSize={14}>CAUSES</Typography>
      <TableContainer>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography fontSize={14}>Design</Typography>
              </TableCell>
              <TableCell>
                <Typography fontSize={14}>{design.join(", ")}</Typography>
              </TableCell>
            </TableRow>
            {rework && (
              <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                  <Typography fontSize={14}>Rework</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize={14}>{rework.join(", ")}</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
