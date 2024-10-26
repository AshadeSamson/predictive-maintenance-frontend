// DataGrid.js
import React, { useEffect, useState } from "react";
// import { useTable } from "react-table";
// import axios from "axios";

// Rest of your DataGrid component

const DataGrid = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/data")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  const columns = React.useMemo(() => {
    return Object.keys(data[0] || {}).map((key) => ({
      Header: key.charAt(0).toUpperCase() + key.slice(1),
      accessor: key,
    }));
  }, [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: "10px",
                    border: "solid 1px gray",
                    background: "papayawhip",
                  }}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataGrid;
