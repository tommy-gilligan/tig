import React from "react";
import { Text } from "@chakra-ui/react";

export const ShipmentTimestamp = ({ timestamp }: { timestamp: string }) => {
  const time = new Intl.DateTimeFormat(undefined, {
    month: "long",
    year: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(Date.parse(timestamp));

  return <Text as="b">{time}</Text>;
};
