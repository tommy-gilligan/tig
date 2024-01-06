export enum TrackingEventStatusSeverity {
  SUCCESS = "Success",
  INFO = "Info",
  WARNING = "Warning",
}

export enum TrackingEventStatus {
  PICKED_UP = "Picked Up",
  ARRIVED_AT_FACILITY = "Arrived at Facility",
  PROCESSED_THROUGH_FACILITY = "Processed Through Facility",
  DEPARTED_FACILITY = "Departed Facility",
  ON_BOARD_FOR_DELIVERY = "On Board for Delivery",
  DELIVERED = "Delivered",
  UNKNOWN_SCAN = "Unknown Scan",
  RETURN_TO_SENDER = "Return to Sender",
  PACKAGE_HANDLING = "Package Handling",
}

export type TrackingEventSchema = {
  id: string;
  trackingId: string;
  status: TrackingEventStatus;
  statusSeverity: TrackingEventStatusSeverity;
  timestamp: string;
  location: string;
};
