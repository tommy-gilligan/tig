import { screen, render } from '@testing-library/react'
import { ShipmentDetails } from '../app/components/ShipmentDetails'
import { ShipmentTable } from '../app/components/ShipmentTable'
import { ShipmentStatus, ShipmentSchema, ShipmentStatusSeverity } from '../app/types/shipment'
import { MockedProvider } from "@apollo/client/testing";
import userEvent from '@testing-library/user-event'

it('renders nothing when there is no shipment', () => {
  const { container, getByTestId } = render(<ShipmentDetails onClose={() => {}} />)
  expect(container).toMatchSnapshot()
  expect(container.textContent).toEqual("")
})

it('renders a table with a single row when there is just one shipment', () => {
  const shipments: [ShipmentSchema] = [{
    id: "796d9fbf-e54d-40e8-a84b-bb1f723edd2b",
    trackingId: "6789",
    status: ShipmentStatus.DELIVERED,
    statusSeverity: ShipmentStatusSeverity.SUCCESS,
    deliveredTime: "2024-01-05T23:32:12Z",
    lastUpdate: "2024-01-02T18:18:21Z",
    deliveryAddress: "1 Taylor Lane, McKellar NSW 2030",
    totalTransit: "3 days",
  }];
  const { container, getByTestId } = render(
    <ShipmentTable shipments={shipments} onShipmentSelected={(selectedShipment) => {}} />
  )
  expect(container).toMatchSnapshot()
  expect(getByTestId("shipment-row")).toBeTruthy()
})

it('selects shipment when row is clicked', async () => {
  let selectedShipment = null;
  const shipments: [ShipmentSchema] = [{
    id: "796d9fbf-e54d-40e8-a84b-bb1f723edd2b",
    trackingId: "6789",
    status: ShipmentStatus.DELIVERED,
    statusSeverity: ShipmentStatusSeverity.SUCCESS,
    deliveredTime: "2024-01-05T23:32:12Z",
    lastUpdate: "2024-01-02T18:18:21Z",
    deliveryAddress: "1 Taylor Lane, McKellar NSW 2030",
    totalTransit: "3 days",
  }];
  const { container, getByTestId } = render(
    <ShipmentTable shipments={shipments} onShipmentSelected={(shipment) => { selectedShipment = shipment }} />
  )
  expect(container).toMatchSnapshot()
  await userEvent.click(screen.getByTestId("shipment-row"))
  expect(selectedShipment).toEqual(shipments[0])
})
