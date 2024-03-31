import axios from "axios";
import React from "react";

function Filter({ data, setData }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.query.value);
    const main = e.target.query.value;
    const domainValues = [];
    e.target
      .querySelectorAll('input[name="domain"]:checked')
      .forEach((checkbox) => {
        domainValues.push(checkbox.value);
      });
    console.log(domainValues);
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    const baseUrl =
      nodeEnv === "production"
        ? "https://crowdup-api.vercel.app"
        : "http://localhost:5000";
    const params = new URLSearchParams({
      query: main,
      domain: domainValues, // Pass domainValues as an array
    });
    console.log(params);
    async function getData() {
      const data = await axios.get(baseUrl + "/api/startups/explore?" + params);
      console.log(data);
      setData(data.data.message);
    }
    getData();
  };
  return (
    <div className=" rounded p-4 flex flex-col sticky top-8 w-fit bg-lime-100">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 pr-8">
        <div className="">
          <input type="radio" id="funded" name="query" value="funded" />
          <label for="funded"> Top Funded</label>
          <div className="mb-1" />
          <input type="radio" id="stocks" name="query" value="stocks" />
          <label for="stocks"> Highest stock Left</label>
          <div className="mb-1" />
          <input
            type="radio"
            id="all"
            name="query"
            value="all"
            checked="checked"
          />
          <label for="all">All</label>
        </div>
        <div className="h-px w-full bg-gray-400" />
        <div>
          <label htmlFor="" className="text-lg">
            Select Domain
          </label>
          <div className="mb-2" />
          <input type="checkbox" name="domain" id="FinTech" value="FinTech" />
          <label htmlFor="FinTech">FinTech</label>
          <div />
          <input
            type="checkbox"
            name="domain"
            id="AI"
            value="Artificial Intelligence"
          />{" "}
          <label htmlFor="AI">Artificial Intelligence</label>
          <div />
          <input
            type="checkbox"
            name="domain"
            id="Health Care"
            value="Health Care"
          />{" "}
          <label htmlFor="Healt Care">Heatlh Care</label>
          <div />
          <input
            type="checkbox"
            name="domain"
            id="Education"
            value="Education"
          />{" "}
          <label htmlFor="Education">Education</label>
          <div />
          <input type="checkbox" name="domain" id="Web 3" value="Web 3" />{" "}
          <label htmlFor="Web 3">Web 3</label>
        </div>
        <div>
          <label htmlFor=""></label>
        </div>
        <button className=" bg-green-500 hover:bg-green-600 transition-all duration-300 ease-in-out justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full">
          Apply
        </button>
      </form>
    </div>
  );
}

export default Filter;
