import React from "react";

import { TrackingEventStatusSeverity } from "../types/tracking_event";

import { ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

export const TrackingEventIcon = ({
  statusSeverity,
}: {
  statusSeverity: TrackingEventStatusSeverity;
}) => {
  if (statusSeverity === TrackingEventStatusSeverity.SUCCESS) {
    return (
      <ListIcon
        marginLeft="10px"
        boxSize={6}
        as={CheckCircleIcon}
        color="green.500"
      />
    );
  } else if (statusSeverity === TrackingEventStatusSeverity.INFO) {
    return (
      <ListIcon
        marginLeft="10px"
        boxSize={6}
        as={WarningIcon}
        color="red.500"
      />
    );
  } else {
    return (
      <ListIcon
        marginLeft="10px"
        boxSize={6}
        as={WarningIcon}
        color="red.500"
      />
    );
  }
};
