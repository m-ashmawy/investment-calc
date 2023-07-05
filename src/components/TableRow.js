import React from "react";

function TableRow({ rowData }) {
  return (
    <tr>
      <td>{rowData.year}</td>
      <td>{rowData.savingsEndOfYear}</td>
      <td>{rowData.yearlyInterest}</td>
      <td>TOTAL INTEREST GAINED</td>
      <td>TOTAL INVESTED CAPITAL</td>
    </tr>
  );
}

export default TableRow;
