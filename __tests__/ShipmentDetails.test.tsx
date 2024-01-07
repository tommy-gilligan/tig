import { screen, render } from "@testing-library/react";
import { ShipmentDetails } from "../app/components/ShipmentDetails";
import { GET_TRACKING_EVENTS } from "../app/components/TrackingHistory";
import {
  ShipmentStatus,
  ShipmentSchema,
  ShipmentStatusSeverity,
} from "../app/types/shipment";
import { MockedProvider } from "@apollo/client/testing";

beforeEach(() => {
  window.scrollTo = jest.fn();
});
afterAll(() => {
  jest.clearAllMocks();
});

it("renders nothing when there is no shipment", () => {
  const { container, getByTestId } = render(
    <ShipmentDetails onClose={() => {}} />,
  );
  expect(container).toMatchSnapshot();
  expect(container.textContent).toEqual("");
});

it("renders shipment details when there is a shipment", () => {
  const mocks = [
    {
      request: {
        query: GET_TRACKING_EVENTS,
        variables: {
          trackingId: "6789",
        },
      },
      result: {
        data: {
          trackingEvents: [],
        },
      },
    },
  ];
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
  const { container, getByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ShipmentDetails
        shipment={shipment}
        onClose={() => {
          console.log("closed");
        }}
      />
    </MockedProvider>,
  );

  // expect(container).toMatchSnapshot()
  // expect(container.textContent).toEqual("")
});
