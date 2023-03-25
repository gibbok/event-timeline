import { JobEventTypeAPI } from "@/api/types";
import { formatDateTime } from "@/utils/format";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import { CausesInfo } from "./CausesInfo";
import { DeviceInfo } from "./DeviceInfo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { EventUI } from "./types";

type EventInfoProps = EventUI;

const makeColorEventType = (eventType: JobEventTypeAPI) => {
  switch (eventType) {
    case JobEventTypeAPI.Scheduled:
    case JobEventTypeAPI.Started:
    case JobEventTypeAPI.InProgress:
    case JobEventTypeAPI.Complete:
      return "success.main";
    case JobEventTypeAPI.OnBreak:
      return "red";
    case JobEventTypeAPI.ClockedOut:
      return "green";
    case JobEventTypeAPI.DowntimeReportSubmitted:
    case JobEventTypeAPI.OverrunReportSubmitted:
    case JobEventTypeAPI.HeadcountChanged:
    case JobEventTypeAPI.SubmitDowntimeReportCauses:
    case JobEventTypeAPI.JobSignedOff:
      return "text.primary";
    case JobEventTypeAPI.Canceled:
    case JobEventTypeAPI.Downtime:
      return "error.main";
  }
};

export const EventInfo = ({
  eventId,
  cardId,
  type,
  userName,
  occurrence,
  device,
  causes,
  jobHeadcount,
}: EventInfoProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography
              style={{ textTransform: "uppercase", fontWeight: "bold" }}
              color={makeColorEventType(type)}
              gutterBottom
            >
              {type}
            </Typography>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              {userName}
            </Typography>
          </Box>
          <Box display="flex">
            <Typography color="text.secondary" gutterBottom>
              {formatDateTime(occurrence)}
            </Typography>
            {device || causes ? (
              <Box ml={4}>
                {isOpen ? (
                  <ExpandLessIcon
                    style={{ cursor: "pointer" }}
                    onClick={handleOpen}
                  />
                ) : (
                  <ExpandMoreIcon
                    style={{ cursor: "pointer" }}
                    onClick={handleOpen}
                  />
                )}
              </Box>
            ) : (
              <Box width={60} />
            )}
          </Box>
        </Box>
        {!isOpen ? (
          <Box>
            {device && (
              <Box mt={2}>
                <Typography>{`${device.zoneName} / ${device.factoryName}`}</Typography>
              </Box>
            )}
            {causes && (
              <Box mt={2}>
                <Typography>{causes.design.join(", ")}</Typography>
                {causes.rework && <Typography>{`${causes.rework}`}</Typography>}
              </Box>
            )}
          </Box>
        ) : (
          <Box display="flex" justifyContent="space-between">
            {device && (
              <DeviceInfo
                deviceId={device.deviceId}
                zoneName={device.zoneName}
                factoryName={device.factoryName}
                partnerName={device.partnerName}
                stationName={device.partnerName}
              />
            )}
            {causes && (
              <CausesInfo design={causes.design} rework={causes.rework} />
            )}
          </Box>
        )}
        {jobHeadcount && (
          <Box mt={2}>
            <Typography>Headcount {jobHeadcount}</Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
