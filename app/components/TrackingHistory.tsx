import React from "react";
import { TrackingEventSchema } from "./types/tracking_event";
import { TrackingEvent } from "./TrackingEvent";
import { List } from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";

export const GET_TRACKING_EVENTS = gql`
  query GetTrackingEvents($trackingId: String!) {
    trackingEvents(trackingId: $trackingId) {
      id
      trackingId
      status
      statusSeverity
      timestamp
      location
    }
  }
`;

export const TrackingHistory = ({
  trackingId,
}: {
  trackingId: TrackingEventSchema["trackingId"];
}) => {
  const { loading, data, error } = useQuery(GET_TRACKING_EVENTS, {
    variables: { trackingId },
  });

  if (error) {
    return "Could not fetch tracking events";
  }
  if (loading) {
    return "Loading...";
  }
  return (
    <List
      borderStyle="solid"
      borderRadius="5px"
      borderColor="silver"
      borderWidth="1px"
    >
      {data.trackingEvents.map((trackingEvent: TrackingEventSchema) => (
        <TrackingEvent key={trackingEvent.id} trackingEvent={trackingEvent} />
      ))}
    </List>
  );
};
