import React from "react";
import { Text, Flex } from "@chakra-ui/react";

export const TrackingEventTimestamp = ({
  timestamp,
}: {
  timestamp: string;
}) => {
  const date = new Intl.DateTimeFormat(undefined, {}).format(
    Date.parse(timestamp),
  );
  const time = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "numeric",
  }).format(Date.parse(timestamp));

  return (
    <Flex direction="column" justify="end" alignItems="end">
      <Text data-testid="date" as="b">
        {date}
      </Text>
      <Text data-testid="time">{time}</Text>
    </Flex>
  );
};
