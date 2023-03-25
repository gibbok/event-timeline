import { TypographyTable } from "@/components/commons/TypographyBase/TypographyBase";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
} from "@mui/material";
import React from "react";
import { DeviceUI } from "./types";

type DeviceInfoProps = DeviceUI;

const makeCell = (content: string) => (
  <TableCell>
    <TypographyTable>{content}</TypographyTable>
  </TableCell>
);

const formaDeviceId = (deviceId: string) => `${deviceId.substring(0, 7)} ...`;

export const DeviceInfo = ({
  deviceId,
  zoneName,
  factoryName,
  partnerName,
  stationName,
}: DeviceInfoProps) => {
  const [showFullDeviceId, setShowFullDeviceId] = React.useState(false);

  const handleShowFullDeviceId = () => {
    setShowFullDeviceId((prevState) => !prevState);
  };

  return (
    <Box width="50%" mt={3}>
      <TypographyTable>DEVICE</TypographyTable>
      <TableContainer>
        <Table size="small">
          <TableBody>
            <TableRow>
              {makeCell("Device Id")}
              <TableCell>
                <Tooltip
                  title={deviceId}
                  arrow
                  open={showFullDeviceId}
                  onClick={handleShowFullDeviceId}
                >
                  <TypographyTable>{formaDeviceId(deviceId)}</TypographyTable>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow>
              {makeCell("Zone")}
              {makeCell(zoneName)}
            </TableRow>
            <TableRow>
              {makeCell("Factory")}
              {makeCell(factoryName)}
            </TableRow>
            <TableRow>
              {makeCell("Partner")}
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
};
