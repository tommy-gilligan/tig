"use client";

import React from "react";
import styles from "./page.module.css";
import { gql } from "@apollo/client";
import { useState } from "react";
import { Box, Heading, theme } from "@chakra-ui/react";
import { ShipmentTable } from "./components/ShipmentTable";
import { ShipmentDetails } from "./components/ShipmentDetails";
import { ShipmentSchema } from "./types/shipment";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export const GET_SHIPMENTS = gql`
  query GetShipments {
    shipments {
      id
      trackingId
      status
      statusSeverity
      deliveredTime
      lastUpdate
      deliveryAddress
      totalTransit
    }
  }
`;

export default function Home() {
  const { loading, data, error } = useQuery(GET_SHIPMENTS);
  const [shipment, setShipment] = useState<ShipmentSchema | undefined>(
    undefined,
  );

  if (loading) {
    return <>Loading</>;
  }
  if (error) {
    return <>Error</>;
  }

  return (
    <main theme={theme}>
      <Heading padding="10px" paddingLeft="20px">
        COMPANY CO.
      </Heading>
      <Box background="#DDDEE4" padding="20px" m="0">
        <ShipmentTable
          onShipmentSelected={setShipment}
          shipments={data.shipments}
        />
        <ShipmentDetails
          shipment={shipment}
          onClose={() => setShipment(undefined)}
        />
      </Box>
    </main>
  );
}
