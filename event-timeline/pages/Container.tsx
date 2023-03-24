import { useGetEvents } from "@/api/useGetEvents/useGetEvents";
import React from "react";

export const Container = () => {
  const { data } = useGetEvents();

  return <div>{JSON.stringify(data, undefined, 4)}</div>;
};
