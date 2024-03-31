import React from "react";

const FundingComponent = ({
  name,
  email,
  amount,
  photo
}) => {
  return (
    <div className="w-full bg-gradient-to-b from-white via-white to-emerald-200 flex flex-wrap sm:justify-between flex-col sm:flex-row gap-2 sm:gap-0 sm:items-center rounded-lg px-2 py-2 sm:px-10">
      <div className="flex gap-5 items-center">
        <img className="rounded-full h-10 w-10 mt-1" alt="" src={photo} />
        <h1 className="text-lg font-bold text-gray-900">{name}</h1>
      </div>
      <p className="text-gray-600">{email}</p>
      <div className="flex gap-10 justify-between items-center">
        <p className="text-gray-600">Investor</p>
        <p className="text-green-800 font-bold text-lg">₹ {amount}</p>
      </div>
    </div>
  );
};

export default FundingComponent;
