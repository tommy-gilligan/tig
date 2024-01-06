import React from "react";
import { TrackingEventSchema } from "./types/tracking_event";
import { Text, Flex, Box, List, ListItem, ListIcon } from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";
import { TrackingEventTimestamp } from "./TrackingEventTimestamp"
import { TrackingEventIcon } from "./TrackingEventIcon"

export const TrackingEvent = ({
  trackingEvent: {statusSeverity, status, location, timestamp},
}: {
  trackingEvent: TrackingEventSchema;
}) => {
  return (
    <ListItem>
      <Flex align="center">
        <TrackingEventIcon statusSeverity={statusSeverity} />

        <Flex
          borderBottomColor="grey"
          borderBottomStyle="dashed"
          borderBottomWidth="1px"
          paddingTop="10px"
          paddingBottom="10px"
          justify="space-between"
          width="100%"
          marginRight="10px"
        >
          <Box>
            <Text data-testid="status" as="b">{status}</Text>
            <br />
            <Text data-testid="location">{location}</Text>
          </Box>

          <TrackingEventTimestamp timestamp={timestamp} />
        </Flex>
      </Flex>
    </ListItem>
  );
};
