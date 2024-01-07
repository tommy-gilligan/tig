import { render } from "@testing-library/react";
import { TrackingEventIcon } from "../app/components/TrackingEventIcon";
import { ListItem, List } from "@chakra-ui/react";
import { TrackingEventStatusSeverity } from "../app/types/tracking_event";

it("renders a successful status icon", () => {
  const { container } = render(
    <List>
      <ListItem>
        <TrackingEventIcon
          statusSeverity={TrackingEventStatusSeverity.SUCCESS}
        />
      </ListItem>
    </List>,
  );
  expect(container).toMatchSnapshot();
});

it("renders a successful status icon", () => {
  const { container } = render(
    <List>
      <ListItem>
        <TrackingEventIcon statusSeverity={TrackingEventStatusSeverity.INFO} />
      </ListItem>
    </List>,
  );
  expect(container).toMatchSnapshot();
});

it("renders an warning status icon", () => {
  const { container } = render(
    <List>
      <ListItem>
        <TrackingEventIcon
          statusSeverity={TrackingEventStatusSeverity.WARNING}
        />
      </ListItem>
    </List>,
  );
  expect(container).toMatchSnapshot();
});
