import React from "react";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
function TableRow({ rowData, initialInvestment }) {
  return (
    <tr>
      <td>{rowData.year}</td>
      <td>{formatter.format(rowData.savingsEndOfYear)}</td>
      <td>{formatter.format(rowData.yearlyInterest)}</td>
      <td>
        {formatter.format(
          rowData.savingsEndOfYear -
            initialInvestment -
            rowData.yearlyContribution * rowData.year
        )}
      </td>
      <td>
        {formatter.format(
          initialInvestment + rowData.yearlyContribution * rowData.year
        )}
      </td>
    </tr>
  );
}

export default TableRow;
