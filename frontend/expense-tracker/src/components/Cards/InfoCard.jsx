import React from "react";

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-green-200 p-6 rounded-2xl shadow-md   border border-gray-200/50">
      <div className={`w-14 h-14 flex items-center justify-center text-[26px] text-green-100 ${color} rounded-full drop-shadow-xl`}>
        {icon}
      </div>
      <div>
        <h6 className="text-sm text-green-900 mb-1">{label}</h6>
       <span className="text-[22px] font-medium font-sans text-green-900">
  ₹{value}
</span>

      </div>
    </div>
  );
};

export default InfoCard;
