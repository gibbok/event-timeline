import { EventUI } from "@/pages/transform";
import { formatDateTime } from "@/utils/format";
import React from "react";

type EventInfoProps = EventUI;

export const EventInfo = ({
  id,
  cardId,
  type,
  userName,
  occurrence,
  device,
  causes,
}: EventInfoProps) => {
  return (
    <div>
      <div>Type: {type}</div>
      <div>User: {userName}</div>
      <div>Occurrence: {formatDateTime(occurrence)}</div>
      <hr />
    </div>
  );
};
