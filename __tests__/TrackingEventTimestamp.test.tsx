import { screen, render } from '@testing-library/react'
import { TrackingEventTimestamp } from '../app/components/TrackingEventTimestamp'
 
it('renders a timestamp', () => {
  const { container } = render(
    <TrackingEventTimestamp timestamp="2023-01-07T13:00:00Z" />
  )
  expect(container).toMatchSnapshot()
})

it('uses system locale to format date', () => {
  const { container, getByTestId } = render(
    <TrackingEventTimestamp timestamp={"2023-01-07T13:00:00Z"} />
  )
  expect(getByTestId("date").textContent).toEqual("1/8/2023")
})

it('uses system locale to format time', () => {
  const { container, getByTestId } = render(
    <TrackingEventTimestamp timestamp={"2023-01-07T13:00:00Z"} />
  )
  expect(getByTestId("time").textContent).toEqual("12:00 AM")
})
