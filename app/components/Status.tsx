import React from "react";
import { Badge } from "@chakra-ui/react";
import { ShipmentSchema, ShipmentStatus } from "../types/shipment";

export const Status = ({ status }: { status: ShipmentSchema["status"] }) => {
  if (status === ShipmentStatus.DELIVERED) {
    return (
      <Badge
        borderRadius="5px"
        padding="5px"
        paddingLeft="10px"
        paddingRight="10px"
        textTransform="none"
        variant="outline"
        colorScheme="green"
      >
        Delivered
      </Badge>
    );
  } else if (status === ShipmentStatus.IN_TRANSIT) {
    return (
      <Badge
        borderRadius="5px"
        padding="5px"
        paddingLeft="10px"
        paddingRight="10px"
        textTransform="none"
        variant="outline"
      >
        In-Transit
      </Badge>
    );
  } else if (status === ShipmentStatus.MANIFESTED) {
    return (
      <Badge
        borderRadius="5px"
        padding="5px"
        paddingLeft="10px"
        paddingRight="10px"
        textTransform="none"
        variant="outline"
      >
        Manifested
      </Badge>
    );
  } else {
    return (
      <Badge
        borderRadius="5px"
        padding="5px"
        paddingLeft="10px"
        paddingRight="10px"
        textTransform="none"
        variant="outline"
        colorScheme="red"
      >
        Unknown
      </Badge>
    );
  }
};
