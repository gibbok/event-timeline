import { CausesUI } from "@/pages/transform";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

type CausesInfoProps = CausesUI;

export const CausesInfo = ({ design, rework }: CausesInfoProps) => {
  return (
    <Box width="50%" ml={5}>
      <Typography fontSize={14}>Causes</Typography>
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
