import { DeviceUI } from "@/components/apps/EventTimeline/transform";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

type DeviceInfoProps = DeviceUI;

const makeCell = (content: string) => (
  <TableCell>
    <Typography fontSize={14}>{content}</Typography>
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
      <Typography fontSize={14}>DEVICE</Typography>
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
                  <Typography fontSize={14}>
                    {formaDeviceId(deviceId)}
                  </Typography>
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
