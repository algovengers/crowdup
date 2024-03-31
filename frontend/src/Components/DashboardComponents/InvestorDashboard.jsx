import React from "react";
import InvestorCardInInvestor from "./InvestorCardInInvestor";

const InvestorDashboard = ({currentUser}) => {
  return (
    <div>

      {/*Search Bar*/}
      <form class="max-w-md">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium sr-only text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-base font-semibold border rounded-lg bg-gradient-to-b from-emerald-200 to-green-400 outline-none placeholder-gray-700 text-slate-950 focus:ring-green-500 border-green-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      {/*Filter Bar*/}
      Addlater filter bar

      <InvestorCardInInvestor />

    </div>
  );
};

export default InvestorDashboard;
