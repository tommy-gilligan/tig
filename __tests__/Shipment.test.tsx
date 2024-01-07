import { screen, render } from '@testing-library/react'
import { Shipment } from '../app/components/Shipment'
import { ShipmentStatus, ShipmentSchema, ShipmentStatusSeverity } from '../app/types/shipment'

it('renders a delivered shipment', () => {
  const shipment: ShipmentSchema = {
    id: "796d9fbf-e54d-40e8-a84b-bb1f723edd2b",
    trackingId: "6789",
    status: ShipmentStatus.DELIVERED,
    statusSeverity: ShipmentStatusSeverity.SUCCESS,
    deliveredTime: "2024-01-05T23:32:12Z",
    lastUpdate: "2024-01-02T18:18:21Z",
    deliveryAddress: "1 Taylor Lane, McKellar NSW 2030",
    totalTransit: "3 days",
  };
  const { container, getByTestId } = render(<Shipment shipment={shipment} />)
  expect(getByTestId("delivered-time").textContent).toEqual("January 6, 2024 at 10:32 AM")
  expect(container).toMatchSnapshot()
})

it('renders a shipment', () => {
  const shipment: ShipmentSchema = {
    id: "796d9fbf-e54d-40e8-a84b-bb1f723edd2b",
    trackingId: "6789",
    status: ShipmentStatus.IN_TRANSIT,
    statusSeverity: ShipmentStatusSeverity.INFO,
    deliveredTime: null,
    lastUpdate: "2024-01-02T18:18:21Z",
    deliveryAddress: "1 Taylor Lane, McKellar NSW 2030",
    totalTransit: "3 days",
  };
  const { container } = render(<Shipment shipment={shipment} />)
  expect(container).toMatchSnapshot()
})
