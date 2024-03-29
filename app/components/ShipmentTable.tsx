import React from "react";
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Td,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import { ShipmentSchema } from "./types/shipment";
import { Status } from "./Status";
import { ShipmentCell } from "./ShipmentCell";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
  Row,
  Column,
} from "@tanstack/react-table";
import { ArrowUpIcon, ArrowDownIcon, ArrowUpDownIcon } from "@chakra-ui/icons";

const shipmentSort = (
  rowA: Row<ShipmentSchema>,
  rowB: Row<ShipmentSchema>,
  _: string,
): number => {
  const lastUpdateA = rowA.original.lastUpdate;
  const lastUpdateB = rowB.original.lastUpdate;

  if (lastUpdateA < lastUpdateB) {
    return -1;
  } else if (lastUpdateA > lastUpdateB) {
    return 1;
  }
  return 0;
};

const columnHelper = createColumnHelper<ShipmentSchema>();
const columns = [
  columnHelper.accessor(
    (row) => ({ trackingId: row.trackingId, lastUpdate: row.lastUpdate }),
    {
      id: "shipment",
      header: "Shipment",
      cell: (info) => {
        const value = info.getValue();
        const trackingId = value.trackingId;
        const lastUpdate = value.lastUpdate;
        return <ShipmentCell trackingId={trackingId} lastUpdate={lastUpdate} />;
      },
      sortingFn: shipmentSort,
    },
  ),
  columnHelper.accessor((row) => row.status, {
    header: "Status",
    id: "status",
    cell: (info) => <Status status={info.getValue()} />,
  }),
];

const SortIcon = ({ column }: { column: Column<ShipmentSchema> }) => {
  if (column.getCanSort()) {
    let Icon = ArrowUpDownIcon;

    if ((column.getIsSorted() as string) === "asc") {
      Icon = ArrowDownIcon;
    } else if ((column.getIsSorted() as string) === "desc") {
      Icon = ArrowUpIcon;
    }

    return <Icon marginLeft="10px" />;
  } else {
    return null;
  }
};

export const ShipmentTable = ({
  shipments,
  onShipmentSelected,
}: {
  shipments: [ShipmentSchema];
  onShipmentSelected: (value: ShipmentSchema | undefined) => void;
}) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data: shipments,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <TableContainer background="white" borderRadius="5px">
      <Table variant="simple">
        <Thead>{table.getHeaderGroups().map(renderHeaderRow)}</Thead>
        <Tbody>
          {table
            .getRowModel()
            .rows.map(renderRow.bind(this, onShipmentSelected))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const renderCell = (cell) => {
  return (
    <Td padding="13px 20px" verticalAlign="center" key={cell.id}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </Td>
  );
};

const renderRow = (onShipmentSelected, row) => {
  return (
    <Tr
      cursor="pointer"
      onClick={() => onShipmentSelected(row.original)}
      key={row.id}
      data-testid="shipment-row"
    >
      {row.getVisibleCells().map(renderCell)}
    </Tr>
  );
};

const renderHeader = (header) => {
  return (
    <Th padding="0" fontWeight="normal" textTransform="none" key={header.id}>
      <Flex
        padding="13px 20px"
        align="center"
        onClick={header.column.getToggleSortingHandler()}
        {...{ cursor: header.column.getCanSort() ? "pointer" : "" }}
      >
        {flexRender(header.column.columnDef.header, header.getContext())}
        <SortIcon column={header.column} />
      </Flex>
    </Th>
  );
};

const renderHeaderRow = (headerGroup) => {
  return <Tr key={headerGroup.id}>{headerGroup.headers.map(renderHeader)}</Tr>;
};
