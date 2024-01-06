import { screen, render } from '@testing-library/react'
import { ShipmentTimestamp } from '../app/components/ShipmentTimestamp'

it('renders a shipment timestamp', () => {
  const { container } = render(
    <ShipmentTimestamp timestamp="2024-01-03T02:23:45Z" />
  )
  expect(container).toMatchSnapshot()
})
