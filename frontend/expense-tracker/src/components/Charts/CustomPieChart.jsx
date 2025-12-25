 import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomLegend from "./CustomLegend";
import CustomTooltip from "./CustomTooltip";

const CustomPieChart = ({
  data,
  label,
  totalAmount,
  showTextAnchor,
  colors,
}) => {
  return (
    <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
        >
          {/* Pie slices use only your approved green theme colors */}
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>

        {/* Tooltip with green theme */}
        <Tooltip content={<CustomTooltip />} />

        {/* Legend with green theme */}
        <Legend content={<CustomLegend />} />

        {showTextAnchor && (
          <>
            {/* Label above the total */}
            <text
              x="50%"
              y="50%"
              dy={-25}
              textAnchor="middle"
              fill="#34D399" // green-400
              fontSize="14px"
              fontFamily='"Segoe UI", Roboto, system-ui, Arial, sans-serif'
            >
              {label}
            </text>

            {/* Total amount with straight rupee symbol */}
            <text
              x="50%"
              y="50%"
              dy={8}
              textAnchor="middle"
              fill="#166534" // green-900
              fontSize="24px"
              fontWeight="600"
              fontFamily='"Segoe UI", Roboto, system-ui, Arial, sans-serif'
            >
              ₹{totalAmount}
            </text>
          </>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
