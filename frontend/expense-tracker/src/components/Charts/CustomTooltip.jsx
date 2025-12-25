import React from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="bg-green-100 shadow-md rounded-lg p-2 border"
        style={{
          borderColor: "#2E6F40", // green-800 → dark green border
        }}
      >
        <p
          className="text-xs font-semibold mb-1"
          style={{
            color: "#253D2C", // green-900 → very dark green (title text)
          }}
        >
          {payload[0].name}
        </p>
        <p
          className="text-sm"
          style={{
            color: "#2E6F40", // green-800 → dark green (label text)
          }}
        >
          Amount:{" "}
      <span
  className="text-sm font-medium"
  style={{
    color: "#68BA7F", // green-400
    fontFamily: "Inter, sans-serif", // or whatever font your app uses
  }}
>
    ₹{payload[0].value.toLocaleString("en-IN")}
</span>


        </p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
