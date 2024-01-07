Copy env.example to env.local and fill in some config (endpoint and token)

To run

yarn dev

To run tests
yarn test

Testing:

- In getting a basic set of tests done quickly, I've a little too eagerly reached snapshots. These are fairly suitable for more dumb components that don't have much state (but not so much for more complex components). A big caveat with this kind of test is it's too easy to update them without properly checking test failures.
- Testing of interactive table sorting and top-level state (page.tsx) is absent. This is really just owing to time.
- It would have been nice to have not repeated myself so much for the rendering of timestamps. Evident in the design, there are a few different formats used and I've tried to duplicate this but at the same time adopt localized formatting as much as possible. This localized formatting presents a small problem when it comes to testing: the locale including timezone should be mocked.

Styling:

- It would have been nice to extract on-element styling to something more global or reusable. chakra ui has some good mechanisms for doing so.
- The spacing between rows in Shipment component could use some work.
- Empty tracking history is kind of ugly
- Duplicate border on last row of tracking history
- There is a vertical connection between events in tracking history in design. this is absent. stacked backgrounds could be used to achieve this effect
  picking up on
- Vertical alignment of sorting icons is off.
- Loading and error presentation is a bit too basic.

React Table:
Because there where small icons on column headings that suggested the ability to sort, I've implemented interactive sorting for table rows via React Table. I think there are cleaner uses of the API that are possible: there is a merged cell type that I haven't used which meant treating the Shipment colun cells a bit strangely.
ShipmentTable should be split into smaller, separate files.
