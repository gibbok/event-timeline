import { DeviceUI } from "@/pages/transform";
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

type DeviceInfoProps = DeviceUI;

const makeCell = (content: string) => (
  <TableCell>
    <Typography fontSize={14}>{content}</Typography>
  </TableCell>
);
export const DeviceInfo = ({
  deviceId,
  zoneName,
  factoryName,
  partnerName,
  stationName,
}: DeviceInfoProps) => (
  <Box width="50%">
    <Typography fontSize={14}>Device</Typography>
    <TableContainer>
      <Table size="small">
        <TableBody>
          <TableRow>
            {makeCell("Zone")}
            {makeCell(zoneName)}
          </TableRow>
          <TableRow>
            {makeCell("Factory")}
            {makeCell(factoryName)}
          </TableRow>
          <TableRow>
            {makeCell("Parner")}
            {makeCell(partnerName)}
          </TableRow>
          <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
            {makeCell("Station")}
            {makeCell(stationName)}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);
