export enum ShipmentStatusSeverity {
  SUCCESS = "Success",
  INFO = "Info",
  WARNING = "Warning",
}

export enum ShipmentStatus {
  DELIVERED = "Delivered",
  IN_TRANSIT = "In-Transit",
  MANIFESTED = "Manifested",
  UNKNOWN = "Unknown",
}

export type ShipmentSchema = {
  id: string; // UUIDv4
  trackingId: string;
  status: ShipmentStatus;
  statusSeverity: ShipmentStatusSeverity;
  deliveredTime: string; // ISO date
  lastUpdate: string; // ISO date
  deliveryAddress: string;
  totalTransit: string; // x days | x hours
};
