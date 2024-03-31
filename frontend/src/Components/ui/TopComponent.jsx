import React from "react";
import { Link } from "react-router-dom";

function getCurrentDateTime() {
  const now = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = now.getDate();
  const monthIndex = now.getMonth();
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  return `${monthNames[monthIndex]} ${day}, ${year}. ${formattedHours}:${formattedMinutes} ${ampm}`;
}

function formatFunding(funding) {
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
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

const TopComponent = ({
  title,
  description,
  userPhoto,
  userName,
  fundingReq,
  fundingReceived,
  domain,
  ranking,
  action,
  page,
}) => {
  return (
    <li className="flex justify-center">
      <div
        className="min-w-xs duration-300 transition-all shadow-xl rounded-3xl hover:-translate-y-1"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(118, 118, 118, 0.05) 0px, rgba(118, 118, 118, 0.05) 19px, rgba(59, 59, 59, 0.05) 19px, rgba(59, 59, 59, 0.05) 67px, rgba(195, 195, 195, 0.05) 67px, rgba(195, 195, 195, 0.05) 87px, rgba(121, 121, 121, 0.05) 87px, rgba(121, 121, 121, 0.05) 133px, rgba(250, 250, 250, 0.05) 133px, rgba(250, 250, 250, 0.05) 172px, rgba(106, 106, 106, 0.05) 172px, rgba(106, 106, 106, 0.05) 197px, rgba(151, 151, 151, 0.05) 197px, rgba(151, 151, 151, 0.05) 226px, rgba(219, 219, 219, 0.05) 226px, rgba(219, 219, 219, 0.05) 260px), repeating-linear-gradient(45deg, rgba(70, 70, 70, 0.05) 0px, rgba(70, 70, 70, 0.05) 40px, rgba(220, 220, 220, 0.05) 40px, rgba(220, 220, 220, 0.05) 79px, rgba(95, 95, 95, 0.05) 79px, rgba(95, 95, 95, 0.05) 103px, rgba(15, 15, 15, 0.05) 103px, rgba(15, 15, 15, 0.05) 148px, rgba(51, 51, 51, 0.05) 148px, rgba(51, 51, 51, 0.05) 186px, rgba(225, 225, 225, 0.05) 186px, rgba(225, 225, 225, 0.05) 202px, rgba(60, 60, 60, 0.05) 202px, rgba(60, 60, 60, 0.05) 239px, rgba(67, 67, 67, 0.05) 239px, rgba(67, 67, 67, 0.05) 259px), repeating-linear-gradient(45deg, rgba(146, 146, 146, 0.05) 0px, rgba(146, 146, 146, 0.05) 40px, rgba(166, 166, 166, 0.05) 40px, rgba(166, 166, 166, 0.05) 54px, rgba(156, 156, 156, 0.05) 54px, rgba(156, 156, 156, 0.05) 71px, rgba(134, 134, 134, 0.05) 71px, rgba(134, 134, 134, 0.05) 95px, rgba(77, 77, 77, 0.05) 95px, rgba(77, 77, 77, 0.05) 111px, rgba(26, 26, 26, 0.05) 111px, rgba(26, 26, 26, 0.05) 153px, rgba(46, 46, 46, 0.05) 153px, rgba(46, 46, 46, 0.05) 202px, rgba(197, 197, 197, 0.05) 202px, rgba(197, 197, 197, 0.05) 216px), linear-gradient(90deg, rgb(144, 255, 76), rgb(81, 155, 0))",
        }}
      >
        <div className="text-slate-950 flex items-center justify-between p-4">
          <img
            src={`/images/${ranking}.webp`}
            alt=""
            className="w-12 h-12 backdrop-blur-3xl rounded-full"
          />
          <h2 className="text-2xl px-2 break-all line-clamp-1 font-bold flex justify-center items-center">
            Need Rs. {fundingReq}
          </h2>
          <img
            src="/ogog.webp"
            alt=""
            className="w-12 h-12 backdrop-blur-3xl rounded-full"
          />
        </div>

        <div className="group relative flex w-full max-w-[400px] flex-col overflow-hidden rounded-xl shadow-md hover:shadow-lg bg-gradient-to-t from-emerald-400 via-green-400 to-lime-200 border-t-4 border-slate-700">
          <div className="flex flex-col gap-3 p-5 md:gap-4">
            <div className="flex gap-2">
              <span className="font-semibold rounded-full bg-slate-950 text-white px-4 py-1 text-green-60">
                Rs. {formatFunding(fundingReceived)}
              </span>
              <p className="font-semibold rounded-full bg-grey-500/10 px-4 py-1 bg-green-500 text-zinc-900">
                {truncateString(domain, 20)}
              </p>
            </div>
            <p className="font-medium text-zinc-800">
              Updated till {getCurrentDateTime()}
            </p>
            <p className="text-3xl font-bold tracking-wide md:text-4xl line-clamp-2 flex-1 bg-gradient-to-br from-slate-950 to-green-800 transition-all bg-clip-text text-transparent hover:bg-gradient-to-tl">
              {title}
            </p>
            <p className="text-gray-900 line-clamp-4 h-24">{description}</p>
            <div className="flex-between w-full">
              <div className="flex items-center gap-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src={userPhoto}
                  alt=""
                />
                <div className="font-medium text-black">
                  <div>{userName}</div>
                  <div className="text-sm text-gray-800">Founder</div>
                </div>
              </div>
            </div>

            <Link
              to={page}
              className="bg-gradient-to-br from-green-600 shadow-2xl mt-2 shadow-green-900 border-2 border-green-400 rounded-xl text-white font-semibold text-base tracking-wide to-emerald-700 py-2 px-4 hover:bg-gradient-to-tl hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center"
            >
              {action === "donate" && (
                <>
                  Donate Rs. {fundingReq}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    className="svg-inline--fa fa-arrow-right ml-2 pt-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    ></path>
                  </svg>
                </>
              )}
              {action === "view" && <>View Details</>}
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TopComponent;
