import React from "react";


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

const StartupCardInStartup = ({
  title,
  description,
  fundingReq,
  fundingReceived,
  domain,
  logo,
}) => {
  return (
    <li className="flex justify-center">
      <div className="group relative flex w-full max-w-[400px] flex-col overflow-hidden rounded-xl shadow-md hover:shadow-lg bg-gradient-to-br from-emerald-300 via-green-300 to-lime-200 border-t-4 border-slate-700 duration-300 transition-all hover:-translate-y-1">
        <div className="flex flex-col gap-3 p-5 md:gap-4">
          <div className="flex gap-2">
            <span className="font-semibold rounded-full bg-slate-950 text-white px-4 py-1 text-green-60">
              Rs. {formatFunding(9450000)}
            </span>
            <p className="font-semibold rounded-full bg-grey-500/10 px-4 py-1 bg-green-500 text-zinc-900">
              {truncateString("Eco - Friendly", 20)}
            </p>
            <img src="/ogog.webp" alt="" className="w-12 h-12 absolute right-3 top-3 border-2 border-green-600 backdrop-blur-3xl rounded-full" />
          </div>
          <p className="font-medium text-zinc-800">
            Updated till {getCurrentDateTime()}
          </p>
          <p className="text-3xl font-bold tracking-wide md:text-4xl line-clamp-2 flex-1 bg-gradient-to-br from-slate-950 to-green-800 transition-all bg-clip-text text-transparent hover:bg-gradient-to-tl">
            Urekathon
          </p>
          <p className="text-gray-900 line-clamp-4 h-24">
            Urekathon is alalalallUrekathon is alalalallUrekathon is
            alalalallUrekathon is alalalallUrekathon is alalalallUrekathon is
            alalalallUrekathon is alalalallUrekathon is alalalallUrekathon is
            alalalallUrekathon is alalalallUrekathon is alalalallUrekathon is
            alalalallUrekathon is alalalallUrekathon is alalalallUrekathon is
            alalalall
          </p>
        </div>
      </div>
    </li>
  );
};

export default StartupCardInStartup;
