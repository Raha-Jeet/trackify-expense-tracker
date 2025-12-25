 import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../charts/CustomBarChart";
import { prepareIncomeBarChartData } from "../../utils/helper";

const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarChartData(transactions);
    setChartData(result);

    return () => {};
  }, [transactions]);

  return (
    <div
      className="card"
      style={{
        backgroundColor: "#CFFFDC",
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h6
  className="font-semibold"
  style={{
    color: "#253D2C",
    fontSize: "1.25rem"
  }}
>
  Income Overview
</h6>

          <p
            className="text-sm mt-0.5"
            style={{ color: "#253D2C" }}
          >
            Track your earnings over time and analyze your income trends.
          </p>
        </div>

        <button
          className="add-btn flex items-center gap-1 px-3 py-1 rounded-lg"
          style={{
            backgroundColor: " #253D2C",
            color: "#CFFFDC",
            fontWeight: "500",
            border: "none",
          }}
          onClick={onAddIncome}
        >
          <LuPlus className="text-xl" />
          Add Income
        </button>
      </div>

      <div className="mt-10">
        <CustomBarChart data={chartData} />
      </div>
    </div>
  );
};

export default IncomeOverview;
