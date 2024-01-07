import { screen, render } from '@testing-library/react'
import { ShipmentCell } from '../app/components/ShipmentCell'
import { ShipmentStatus, ShipmentSchema, ShipmentStatusSeverity } from '../app/types/shipment'

it('renders a shipment cell', () => {
  const { container, getByTestId } = render(<ShipmentCell trackingId="6789" lastUpdate="2024-01-02T18:18:21Z" />)
  expect(container).toMatchSnapshot()
})

it('renders last update as part of shipment cell', () => {
  const { container, getByTestId } = render(<ShipmentCell trackingId="6789" lastUpdate="2024-01-02T18:18:21Z" />)
  expect(getByTestId("last-update").textContent).toEqual("Created: Jan 3, 2024")
})

it('renders tracking id as part of shipment cell', () => {
  const { container, getByTestId } = render(<ShipmentCell trackingId="6789" lastUpdate="2024-01-02T18:18:21Z" />)
  expect(getByTestId("tracking-id").textContent).toEqual("6789")
})

