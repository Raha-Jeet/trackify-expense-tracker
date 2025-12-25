 import React from "react";
import TransactionInfoCard from "../cards/TransactionInfoCard";
import moment from "moment";
import { LuDownload } from "react-icons/lu";

const IncomeList = ({ transactions, onDelete, onDownload }) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: "#CFFFDC", border: "1px solid #E5E7EB" }} // light background, subtle border
    >
      <div className="flex items-center justify-between mb-4">
        <h5 style={{ fontSize: "1.25rem", color:"#253D2C ", fontWeight: "600" }}>
          Income Sources
        </h5>

        <button
          className="flex items-center gap-2 px-3 py-1 rounded-md"
          style={{
            backgroundColor: "#253D2C", // blue button
            color: "#CFFFDC",
            fontSize: "0.875rem",
            fontWeight: "500",
          }}
          onClick={onDownload}
        >
          <LuDownload className="text-base" />
          Download
        </button>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        {transactions?.map((income) => (
          <TransactionInfoCard
            key={income._id}
            title={income.source}
            icon={income.icon}
            date={moment(income.date).format("Do MMM YYYY")}
            amount={income.amount}
            type="income"
            onDelete={() => onDelete(income._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
