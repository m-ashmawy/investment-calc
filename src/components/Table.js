import React from "react";
import TableRow from "./TableRow";

function Table() {
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
        <TableRow />
      </tbody>
    </table>
  );
}

export default Table;
