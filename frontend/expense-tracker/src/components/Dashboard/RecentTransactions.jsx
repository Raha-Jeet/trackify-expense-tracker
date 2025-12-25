import React from "react";
import TransactionInfoCard from "../cards/TransactionInfoCard";
import { LuArrowRight } from "react-icons/lu";
import moment from "moment";

const RecentTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className="card bg-green-100 p-4 rounded-xl shadow-md">
      {/* bg-green-100 → Light green background */}
      <div className="flex items-center justify-between">
        <h5 className="text-lg text-green-900">
          {/* text-green-900 → Very dark green */}
          Recent Transactions
        </h5>

        <button
          className="flex items-center gap-1 text-green-800 hover:text-green-950 transition-colors"
          onClick={onSeeMore}
        >
          See All
          <LuArrowRight className="text-base text-green-800" />
          {/* text-green-400 → Medium green */}
        </button>
      </div>

      <div className="mt-6">
        {transactions?.slice(0, 5)?.map((item) => (
          <TransactionInfoCard
            key={item._id}
            title={item.type === "expense" ? item.category : item.source}
            icon={item.icon}
            date={moment(item.date).format("Do MMM YYYY")}
            amount={item.amount}
            type={item.type}
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
