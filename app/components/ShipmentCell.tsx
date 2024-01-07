import React from "react";
import { ShipmentSchema } from "./types/shipment";
import { Box } from "@chakra-ui/react";

export const ShipmentCell = ({
  trackingId,
  lastUpdate,
}: {
  trackingId: ShipmentSchema["trackingId"];
  lastUpdate: ShipmentSchema["lastUpdate"];
}) => {
  const date = new Intl.DateTimeFormat(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(Date.parse(lastUpdate));

  return (
    <>
      <Box data-testid="tracking-id" fontSize="0.9em">{trackingId}</Box>
      <Box data-testid="last-update" fontSize="0.7em" color="grey">
        Created: {date}
      </Box>
    </>
  );
};
