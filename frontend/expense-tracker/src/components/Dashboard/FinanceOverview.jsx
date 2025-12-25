import React from "react";
import CustomPieChart from "../charts/CustomPieChart";

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const COLORS = ["#2E6F40", "#68BA7F", "#253D2C"];

  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expenses", amount: totalExpense },
    { name: "Total Income", amount: totalIncome },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between ">
        <h5 className="text-lg">Financial Overview</h5>
      </div>

     <CustomPieChart
  data={balanceData}
  label="Total Balance"
  totalAmount={totalBalance} // just number
  colors={COLORS}
  showTextAnchor
/>

       
    </div>
  );
};

export default FinanceOverview;
