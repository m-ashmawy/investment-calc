import React from "react";
import TableRow from "./TableRow";

function Table({ genratedData }) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {genratedData.map((row, index) => (
          <TableRow key={index} rowData={row} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
