import { TypographyTable } from "@/components/commons/TypographyBase/TypographyBase";
import {
  Box,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Theme,
} from "@mui/material";
import React from "react";
import { CausesUI } from "./types";

type CausesInfoProps = CausesUI;

const NO_BORDER_LAST_ROW: SxProps<Theme> = {
  "& > *": { borderBottom: "unset" },
};

export const CausesInfo = ({ design, rework }: CausesInfoProps) => {
  return (
    <Box width="50%" ml={5} mt={3}>
      <TypographyTable>CAUSES</TypographyTable>
      <TableContainer>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>
                <TypographyTable>Design</TypographyTable>
              </TableCell>
              <TableCell>
                <TypographyTable>
                  {design.length > 0 ? design.join(", ") : " No data"}
                </TypographyTable>
              </TableCell>
            </TableRow>
            {rework && (
              <TableRow sx={NO_BORDER_LAST_ROW}>
                <TableCell>
                  <TypographyTable>Rework</TypographyTable>
                </TableCell>
                <TableCell>
                  <TypographyTable>{rework.join(", ")}</TypographyTable>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
