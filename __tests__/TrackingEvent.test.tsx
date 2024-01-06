import { screen, render } from '@testing-library/react'
import { TrackingEvent } from '../app/components/TrackingEvent'
import { TrackingEventSchema, TrackingEventStatus, TrackingEventStatusSeverity } from '../app/types/tracking_event'
import { List } from "@chakra-ui/react";

it('renders a tracking event', () => {
  const trackingEvent: TrackingEventSchema = {
      id: "06384a46-ecdb-41cc-9dfa-c60c2ec684b3",
      trackingId: "1234",
      statusSeverity: TrackingEventStatusSeverity.SUCCESS,
      status: TrackingEventStatus.PICKED_UP,
      timestamp: "2023-01-07T13:00:00Z" ,
      location: "212 Smith Street, Epping 3000 VIC"
  };

  const { container } = render(
    <List>
      <TrackingEvent trackingEvent={trackingEvent} />
    </List>
  )
  expect(container).toMatchSnapshot()
})

it('includes location information', () => {
  const trackingEvent: TrackingEventSchema = {
      id: "06384a46-ecdb-41cc-9dfa-c60c2ec684b3",
      trackingId: "1234",
      statusSeverity: TrackingEventStatusSeverity.SUCCESS,
      status: TrackingEventStatus.PICKED_UP,
      timestamp: "2023-01-07T13:00:00Z" ,
      location: "212 Smith Street, Epping 3000 VIC"
  };

  const { container, getByTestId } = render(
    <List>
      <TrackingEvent trackingEvent={trackingEvent} />
    </List>
  )
  expect(getByTestId("location").textContent).toEqual("212 Smith Street, Epping 3000 VIC")
})

it('includes status', () => {
  const trackingEvent: TrackingEventSchema = {
      id: "06384a46-ecdb-41cc-9dfa-c60c2ec684b3",
      trackingId: "1234",
      statusSeverity: TrackingEventStatusSeverity.SUCCESS,
      status: TrackingEventStatus.PICKED_UP,
      timestamp: "2023-01-07T13:00:00Z" ,
      location: "212 Smith Street, Epping 3000 VIC"
  };

  const { container, getByTestId } = render(
    <List>
      <TrackingEvent trackingEvent={trackingEvent} />
    </List>
  )
  expect(getByTestId("status").textContent).toEqual("Picked Up")
})
