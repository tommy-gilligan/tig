import React from "react";
import { ShipmentSchema } from "./types/shipment";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
} from "@chakra-ui/react";
import { TrackingHistory } from "./TrackingHistory";
import { Shipment } from "./Shipment";

export const ShipmentDetails = ({
  shipment,
  onClose,
}: {
  shipment?: ShipmentSchema;
  onClose: () => void;
}) => {
  const isOpen = !!shipment;

  return (
    <Drawer size="lg" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader padding="15px">
          {isOpen && shipment.trackingId}
        </DrawerHeader>
        <DrawerCloseButton />
        <DrawerBody padding="0">
          <Accordion allowMultiple defaultIndex={[0, 1]}>
            <AccordionItem>
              <AccordionButton color="grey" fontWeight="bold">
                <Flex justify="space-between" width="100%">
                  <Box>SHIPMENT</Box>
                  <AccordionIcon />
                </Flex>
              </AccordionButton>
              <AccordionPanel>
                {isOpen && <Shipment shipment={shipment} />}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton color="grey" fontWeight="bold">
                <Flex justify="space-between" width="100%">
                  <Box>TRACKING HISTORY</Box>
                  <AccordionIcon />
                </Flex>
              </AccordionButton>
              <AccordionPanel>
                {isOpen && <TrackingHistory trackingId={shipment.trackingId} />}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
