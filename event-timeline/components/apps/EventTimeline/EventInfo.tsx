import { EventUI } from "@/pages/transform";
import { formatDateTime } from "@/utils/format";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import { CausesInfo } from "./CausesInfo";
import { DeviceInfo } from "./DeviceInfo";

type EventInfoProps = EventUI;

export const EventInfo = ({
  id,
  cardId,
  type,
  userName,
  occurrence,
  device,
  causes,
}: EventInfoProps) => (
  <Card>
    <CardContent>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography
            style={{ textTransform: "uppercase" }}
            color="text.primary"
            gutterBottom
          >
            {type}
          </Typography>
          <Typography color="text.primary" gutterBottom>
            {userName}
          </Typography>
        </Box>
        <Typography color="text.secondary" gutterBottom>
          {formatDateTime(occurrence)}
        </Typography>
      </Box>
      {causes && <CausesInfo design={causes.design} rework={causes.rework} />}
      {device && (
        <DeviceInfo
          deviceId={device.deviceId}
          zoneName={device.zoneName}
          factoryName={device.factoryName}
          partnerName={device.partnerName}
          stationName={device.partnerName}
        />
      )}
    </CardContent>
  </Card>
);
