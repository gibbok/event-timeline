import { CausesUI } from "@/pages/transform";
import React from "react";

type CausesInfoProps = CausesUI;

export const CausesInfo = ({ design, rework }: CausesInfoProps) => {
  return (
    <div>
      <strong>Causes</strong>
      {design.map((x) => (
        <p>{x}</p>
      ))}
      {rework && rework.map((x) => <p>{x}</p>)}
    </div>
  );
};
