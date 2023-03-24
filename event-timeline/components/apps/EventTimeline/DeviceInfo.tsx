import { DeviceUI } from "@/pages/transform";
import React from "react";

type DeviceInfoProps = DeviceUI;

export const DeviceInfo = ({
  deviceId,
  zoneName,
  factoryName,
  partnerName,
  stationName,
}: DeviceInfoProps) => {
  return (
    <div>
      <strong>Device:</strong>
      <div>deviceId: {deviceId}</div>
      <div>zoneName: {zoneName}</div>
      <div>factoryName: {factoryName}</div>
      <div>partnerName: {partnerName}</div>
      <div>stationName: {stationName}</div>
    </div>
  );
};
