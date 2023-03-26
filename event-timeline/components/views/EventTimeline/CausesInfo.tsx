import { NO_BORDER_LAST_ROW } from "@/components/commons/utils";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Theme,
  Typography,
} from "@mui/material";
import React from "react";
import { CausesUI } from "./types";

type CausesInfoProps = CausesUI;

export const CausesInfo = ({ design, rework }: CausesInfoProps) => {
  return (
    <Box width="50%" ml={5} mt={3}>
      <Typography>CAUSES</Typography>
      <TableContainer>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography>Design</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {design.length > 0 ? design.join(", ") : " No data"}
                </Typography>
              </TableCell>
            </TableRow>
            {rework && (
              <TableRow sx={NO_BORDER_LAST_ROW}>
                <TableCell>
                  <Typography>Rework</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{rework.join(", ")}</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
