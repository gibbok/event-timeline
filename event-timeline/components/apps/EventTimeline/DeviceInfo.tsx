import { DeviceUI } from "@/pages/transform";
import {
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
    <Typography fontSize={12}>{content}</Typography>
  </TableCell>
);
export const DeviceInfo = ({
  deviceId,
  zoneName,
  factoryName,
  partnerName,
  stationName,
}: DeviceInfoProps) => (
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
        <TableRow>
          {makeCell("Station")}
          {makeCell(stationName)}
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
