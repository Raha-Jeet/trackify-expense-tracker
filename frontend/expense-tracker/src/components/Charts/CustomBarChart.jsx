 import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const CustomBarChart = ({ data }) => {
  // Use only your 4 colors to alternate bars
  const getBarColor = (index) => {
    const colors = [
      "#2E6F40", // primary - dark green
       
      "#68BA7F", // accent - medium green
      "#253D2C", // dark - very dark green
    ];
    return colors[index % colors.length];
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="rounded-lg p-2 border border-gray-300 shadow-md"
          style={{ backgroundColor: "#BBF7D0" /* secondary - light mint */ }}
        >
          <p
            className="text-xs font-semibold mb-1"
            style={{ color: "#253D2C" /* dark - very dark green */ }}
          >
            {payload[0].payload.category}
          </p>
          <p style={{ color: "#253D2C", fontFamily: "Arial, sans-serif" }}>
  Amount:{" "}
  <span
    className="font-medium"
    style={{
      color: "#68BA7F",
      fontFamily: "Arial, sans-serif",
    }}
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
    <div className="bg-green-150 mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#253D2C" /* dark green */ }}
            stroke="none"
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#253D2C" /* dark green */ }}
            stroke="none"
          />

          <Tooltip content={CustomTooltip} />

          <Bar
            dataKey="amount"
            fill="#68BA7F" // fallback fill with accent color (medium green)
            radius={[10, 10, 0, 0]}
            activeDot={{ r: 8, fill: "#CFFFDC" }} // light mint
            activeStyle={{ fill: "#2E6F40" }} // primary dark green
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
