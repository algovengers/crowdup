import React from "react";
import { Link } from "react-router-dom";

function formatFunding(funding) {
  console.log(funding);
  if (funding >= 1000000000) {
    return `${(funding / 1000000000).toFixed(2)}B`;
  } else if (funding >= 1000000) {
    return `${(funding / 1000000).toFixed(2)}M`;
  } else if (funding >= 1000) {
    return `${(funding / 1000).toFixed(2)}K`;
  } else {
    return `${funding}`;
  }
}

function truncateString(str, num) {
  str = String(str); // Ensure str is a string
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

const InvestorCardInInvestor = ({
  name,
  desc,
  slogan,
  logo,
  fundsReq,
  fundsReceived,
  username,
  founded,
  domain,
  stocks,
  _id
  _id
}) => {
  return (
    <>
      <Link
        to={`startup/${_id}`}
        className="sm:p-7 p-6 flex bg-white border-2 border-stone-300 hover:border-emerald-600 duration-75 rounded-xl flex-col relative"
      >
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex gap-6 flex-col sm:flex-row w-full">
            <div className="hidden w-8 sm:flex rounded-full ">
              <img
                className="rounded-full h-7 w-7 mt-1"
                alt=""
                src={logo}
              />
            </div>
            <div className="flex w-10/12 flex-col">
              <div className="flex mb-4 flex-col gap-6 sm:gap-4">
                <h3 className="m-0 break-all text-2xl p-0 line-clamp-1 font-bold text-slate-900 select-none">
                  {name}
                </h3>
              </div>
              <div className="flex flex-row gap-10">
                <div className="gap-4 sm:gap-3 flex flex-1 flex-col">
                  <p
                    className="line-clamp-1 text-green-600 text-xl font-semibold break-all"
                  >
                    {slogan}
                  </p>
                  <p className="line-clamp-2 break-all">
                    {desc}
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-8 m-0">
                    <div className="flex items-center">
                      <span className="mr-2 inline-block">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M405.333333 469.333333h213.333334v426.666667H405.333333zM128 256h213.333333v640H128zM682.666667 128h213.333333v768H682.666667z"
                            fill="#00BCD4"
                          />
                        </svg>
                      </span>
                      Founder: {username}
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 inline-block">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 8C2.44772 8 2 8.44772 2 9V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V9C22 8.44772 21.5523 8 21 8H3Z"
                            fill="#4296FF"
                          />
                          <path
                            d="M7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4.10002C20.2822 4.56329 22 6.58104 22 9C22 9.55228 21.5523 10 21 10H3C2.44772 10 2 9.55228 2 9C2 6.58104 3.71776 4.56329 6 4.10002V3C6 2.44772 6.44772 2 7 2Z"
                            fill="#152C70"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7 13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13Z"
                            fill="#152C70"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7 17C7 16.4477 7.44772 16 8 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H8C7.44772 18 7 17.5523 7 17Z"
                            fill="#152C70"
                          />
                        </svg>
                      </span>
                      Stocks: {stocks}
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 inline-block">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="#0099cc"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#fff"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinejoin="round"
                          />
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                              stroke="#fff"
                              strokeLinejoin="round"
                            />{" "}
                            <path
                              d="M12 6V12"
                              stroke="#fff"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            />{" "}
                            <path
                              d="M16.24 16.24L12 12"
                              stroke="#fff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />{" "}
                          </g>
                        </svg>
                      </span>
                     {domain}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row sm:flex-col justify-between sm:justify-normal">
              <span className="bg-emerald-300 text-emerald-950 text-sm font-medium me-2 mb-4 px-2.5 pb-0.5 rounded select-none w-32 h-9 flex justify-center items-center">
              ₹ {fundsReq}
              </span>
              <span className="font-semibold rounded-full bg-slate-950 text-white px-4 py-1 text-green-60 w-32 h-9 flex justify-center items-center">
                Rs. {formatFunding(fundsReceived)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default InvestorCardInInvestor;
