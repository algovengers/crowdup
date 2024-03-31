import React from "react";

const UpgradeCards = ({role, plan, desc, amt, f1, f2, f3}) => {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-gradient-to-b from-green-100 to-green-400 text-black border-2 rounded-lg">
      <h3 className="mb-4 text-2xl font-bold">{plan}</h3>
      <p className="font-light text-gray-900 sm:text-lg">
        {desc}
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">{amt}</span>
        <span className="text-gray-900">/year</span>
      </div>

      <ul className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="font-semibold">{f1}</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="font-semibold">
            {f2}
          </span>
        </li>
        <li className="flex items-center space-x-3 mb-5">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="font-semibold">{f3}</span>
        </li>
      </ul>
      <button className="bg-gradient-to-br from-green-600 shadow-2xl mt-5 shadow-green-900 border-2 border-green-400 rounded-xl text-white font-semibold text-base tracking-wide to-emerald-700 py-2 px-4 hover:bg-gradient-to-tl hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center">
        Get started
      </button>
    </div>
  );
};

export default UpgradeCards;
