import React from "react";
import { ShipmentSchema } from "../types/shipment";
import { Status } from "./Status";
import { ShipmentTimestamp } from "./ShipmentTimestamp";
import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";

export const Shipment = ({ shipment }: { shipment: ShipmentSchema }) => {
  return (
    <TableContainer whiteSpace="wrap">
      <Table variant="unstyled">
        <Tbody>
          <Tr>
            <Td
              padding="0"
              paddingRight="20px"
              paddingBottom="20px"
              color="grey"
              verticalAlign="top"
            >
              Status
            </Td>
            <Td padding="0" paddingBottom="20px" verticalAlign="top">
              <Status status={shipment.status} />
            </Td>
          </Tr>
          {shipment.deliveredTime && (
            <Tr>
              <Td
                padding="0"
                paddingRight="20px"
                paddingBottom="20px"
                color="grey"
                verticalAlign="top"
              >
                Delivered time
              </Td>
              <Td
                data-testid="delivered-time"
                padding="0"
                paddingBottom="20px"
                verticalAlign="top"
              >
                <ShipmentTimestamp timestamp={shipment.deliveredTime} />
              </Td>
            </Tr>
          )}
          <Tr>
            <Td
              padding="0"
              paddingRight="20px"
              paddingBottom="20px"
              color="grey"
              verticalAlign="top"
            >
              Delivery address
            </Td>
            <Td padding="0" paddingBottom="20px" verticalAlign="top">
              {shipment.deliveryAddress}
            </Td>
          </Tr>
          <Tr>
            <Td
              padding="0"
              paddingRight="20px"
              paddingBottom="20px"
              color="grey"
              verticalAlign="top"
            >
              Last updated
            </Td>
            <Td padding="0" paddingBottom="20px" verticalAlign="top">
              <ShipmentTimestamp timestamp={shipment.lastUpdate} />
            </Td>
          </Tr>
          <Tr>
            <Td
              padding="0"
              paddingRight="20px"
              paddingBottom="20px"
              color="grey"
              verticalAlign="top"
            >
              Total transit time
            </Td>
            <Td padding="0" paddingBottom="20px" verticalAlign="top">
              {shipment.totalTransit}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
