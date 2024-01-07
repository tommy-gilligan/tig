import { screen, render } from "@testing-library/react";
import {
  TrackingHistory,
  GET_TRACKING_EVENTS,
} from "../app/components/TrackingHistory";
import {
  TrackingEventSchema,
  TrackingEventStatus,
  TrackingEventStatusSeverity,
} from "../app/types/tracking_event";
import { List } from "@chakra-ui/react";
import { MockedProvider } from "@apollo/client/testing";

const trackingEvent: TrackingEventSchema = {
  id: "06384a46-ecdb-41cc-9dfa-c60c2ec684b3",
  trackingId: "1234",
  statusSeverity: TrackingEventStatusSeverity.SUCCESS,
  status: TrackingEventStatus.PICKED_UP,
  timestamp: "2023-01-07T13:00:00Z",
  location: "212 Smith Street, Epping 3000 VIC",
};

it("renders loading indicator and then tracking history", async () => {
  const mocks = [
    {
      request: {
        query: GET_TRACKING_EVENTS,
        variables: {
          trackingId: "1234",
        },
      },
      result: {
        data: {
          trackingEvents: [trackingEvent],
        },
      },
    },
  ];

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TrackingHistory trackingId={trackingEvent.trackingId} />
    </MockedProvider>,
  );
  expect(await screen.findByText("Loading...")).toBeTruthy();
  expect(
    await screen.findByText("212 Smith Street, Epping 3000 VIC"),
  ).toBeTruthy();
  expect(container).toMatchSnapshot();
});

it("should show error when fetching fails", async () => {
  const mocks = [
    {
      request: {
        query: GET_TRACKING_EVENTS,
        variables: {
          trackingId: "1234",
        },
      },
      error: new Error("An error occurred"),
    },
  ];

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TrackingHistory trackingId={trackingEvent.trackingId} />
    </MockedProvider>,
  );

  expect(
    await screen.findByText("Could not fetch tracking events"),
  ).toBeTruthy();
});

it("should show error when there is a graphql error", async () => {
  const mocks = [
    {
      request: {
        query: GET_TRACKING_EVENTS,
        variables: {
          trackingId: "1234",
        },
      },
      results: {
        error: new Error("An error occurred"),
      },
    },
  ];

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TrackingHistory trackingId={trackingEvent.trackingId} />
    </MockedProvider>,
  );

  expect(
    await screen.findByText("Could not fetch tracking events"),
  ).toBeTruthy();
});
