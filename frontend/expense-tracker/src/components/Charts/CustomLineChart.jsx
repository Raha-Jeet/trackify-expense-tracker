 import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

const CustomLineChart = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="bg-green-200 shadow-md rounded-lg p-2 border"
          style={{ borderColor: "#166534" /* green-900 border */ }}
        >
          <p className="text-xs font-semibold mb-1 text-green-900">
            {payload[0].payload.category}
          </p>
          <p className="text-green-800">
            Amount:{" "}
            <span
  className="text-sm font-medium text-green-900"
  style={{ fontFamily: "Inter, sans-serif" }}
>
  ₹{payload[0].payload.amount}
</span>

          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-green-200 p-4 rounded-xl  ">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="#34D399" // green-400
                stopOpacity={0.4}
              />
              <stop
                offset="95%"
                stopColor="#34D399" // green-400
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="none" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#166534" }} // green-900
            stroke="none"
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#166534" }} // green-900
            stroke="none"
          />
          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone"
            dataKey="amount"
            stroke="#166534" // green-900
            fill="url(#incomeGradient)"
            strokeWidth={3}
            dot={{ r: 3, fill: "#34D399" }} // green-400
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
