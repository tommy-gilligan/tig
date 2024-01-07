import { screen, render } from "@testing-library/react";
import { Status } from "../app/components/Status";
import { ShipmentStatus } from "../app/types/shipment";

it("renders a status badge", () => {
  const { container } = render(<Status status={ShipmentStatus.DELIVERED} />);
  expect(container).toMatchSnapshot();
});
