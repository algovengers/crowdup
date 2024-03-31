import React, { useState, useEffect } from "react";
import InvestorCardInInvestor from "./InvestorCardInInvestor";
import Filter from "../ui/Filter";
import axios from "axios";

const InvestorDashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    const baseUrl =
      nodeEnv === "production"
        ? "https://crowdup-api.vercel.app"
        : "http://localhost:5000";
    async function getData() {
      try {
        const data = await axios.get(baseUrl + "/api/startups/explore");
        console.log(data.data?.message);
        setData(data.data.message);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      {/*Search Bar*/}
      <form className="max-w-md">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium sr-only text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-800"
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
            className="block w-full p-4 ps-10 text-base font-semibold border rounded-lg bg-gradient-to-b from-emerald-200 to-green-400 outline-none placeholder-gray-700 text-slate-950 focus:ring-green-500 border-green-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
      {/*Filter Bar*/}
      Addlater filter bar
      <InvestorCardInInvestor
        username="Subha"
        domain={"Tech"}
        fundsReq={10000}
        fundsReceived={5000}
        stocks={20000}
        desc="asdavsavsavfsadvafv"
        slogan="sdvsdavadsvsad"
        name="IIT"
        logo="/ogog.webp"
      />
      <div className="grid grid-cols-4">
        <div className=" col-span-1">
          <Filter data={data} setData={setData} />
        </div>
        <div className="col-span-3">
          <div className="flex flex-row flex-wrap gap-8 justify-start items-start">
            {data &&
              data.map((val) => (
                // <StartupCardInStartup />
                <InvestorCardInInvestor
                  key={val._id}
                  name={val.name}
                  fundsRecived={val.fundsRecieved ? val.fundsRecieved : 0}
                  fundsRequired={val.fundsRequired}
                  username={val.username}
                  stocks={val.stocks}
                  _id={val._id}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;
