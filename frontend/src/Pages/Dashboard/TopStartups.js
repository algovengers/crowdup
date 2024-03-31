import React from "react";
import TopComponent from "../../Components/ui/TopComponent";

const TopStartups = () => {
  return (
    <div className="p-4 pt-20 min-h-screen lg:ml-64">
      <div className="w-full flex flex-col">
        <h1 className="text-3xl mb-1 text-center font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-green-700 via-emerald-500 to-lime-600 bg-clip-text text-transparent">
          {" "}
          Top 10 Featured Start Ups{" "}
        </h1>
        <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl text-center">
          Here are the top 10 featured startups on our platform. These startups
          are the most promising and have the potential to grow exponentially.
        </p>
        <hr className="h-px my-8 mt-1 bg-gray-700 border-0" />

        <TopComponent
          fundingReceived={1000000000}
          domain="Healthcare"
          title="Urekathon"
          description="
          Urekathon is avsdvsdv Urekathon is avsdvsdvUrekathon is avsdvsdvUrekathon is avsdvsdvUrekathon is
          avsdvsdvUrekathon is avsdvsdvUrekathon is avsdvsdv
          "
          userPhoto="/ogog.webp"
          userName="John Doe"
          fundingReq={1000000}
          ranking={10}
          action="view"
          page="/startup"
        />
      </div>
    </div>
  );
};

export default TopStartups;
