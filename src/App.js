import { useState } from "react";
import FormComp from "./components/FormComp";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  const [generatedData, setGeneratedData] = useState([]);

  const [initialInvestment, setInitialInvestment] = useState(0);
  const calculateHandler = (userInput) => {
    setInitialInvestment(+userInput["current-savings"]);
    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setGeneratedData(yearlyData);
  };

  return (
    <div>
      <Header />
      <FormComp onSubmit={calculateHandler} />
      {generatedData.length ? (
        <Table
          generatedData={generatedData}
          initialInvestment={initialInvestment}
        />
      ) : (
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          There is no Data Yet!!!
        </p>
      )}
    </div>
  );
}

export default App;
