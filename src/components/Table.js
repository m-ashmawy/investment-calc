import React from "react";
import TableRow from "./TableRow";

function Table({ generatedData, initialInvestment }) {
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
        {generatedData.map((row, index) => (
          <TableRow
            key={index}
            rowData={row}
            initialInvestment={initialInvestment}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
