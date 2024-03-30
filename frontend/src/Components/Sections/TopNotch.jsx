import React from "react";
import TopComponent from "../TopComponent";

const TopNotch = () => {
  return (
    <section
      id="recents"
      className="overflow-hidden min-h-screen pt-28 md:pt-32 xl:pt-36 bg-gradient-to-b from-lime-400/70 via-white to-emerald-300"
    >
      <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center">
          <h2 className="text-slate-950 mb-4.5 text-2xl font-bold tracking-wide sm:text-4xl xl:text-5xl">
            Top 5 funded startups
          </h2>
          <p className="max-w-[714px] mx-auto mb-5 font-medium text-gray-800/90 mt-2.5">
            Explore the Top 5 funded startups in our platform. These startups
            have raised millions of dollars in funding. You can also invest in
            these startups.
          </p>
        </div>
      </div>

      {/*<div className="flex my-10 flex-col items-center gap-10 px-2 sm:px-10">
        <ul className="w-full gap-10 flex flex-wrap justify-center items-center">
          <TopComponent
            ranking={1}
            fundingReq={500}
            fundingReceived={90000}
            domain='Farming'
            title='InnovizeHub'
            description="InnovizeHub is a startup that is working on the development of a new technology that will help farmers to increase their productivity. The startup has raised $90,000 in funding and is looking for more investors to help them grow."
            userPhoto={"/ogog.webp"}
            userName={"John Doe"}
          />
          <TopComponent
            ranking={2}
            fundingReq={500}
            fundingReceived={90000}
            domain='Farming'
            title='InnovizeHub'
            description="InnovizeHub is a startup that is working on the development of a new technology that will help farmers to increase their productivity. The startup has raised $90,000 in funding and is looking for more investors to help them grow."
            userPhoto={"/ogog.webp"}
            userName={"John Doe"}
          />
          <TopComponent
            ranking={3}
            fundingReq={500}
            fundingReceived={90000}
            domain='Farming'
            title='InnovizeHub'
            description="InnovizeHub is a startup that is working on the development of a new technology that will help farmers to increase their productivity. The startup has raised $90,000 in funding and is looking for more investors to help them grow."
            userPhoto={"/ogog.webp"}
            userName={"John Doe"}
          />
          <TopComponent
            ranking={4}
            fundingReq={500}
            fundingReceived={90000}
            domain='Farming'
            title='InnovizeHub'
            description="InnovizeHub is a startup that is working on the development of a new technology that will help farmers to increase their productivity. The startup has raised $90,000 in funding and is looking for more investors to help them grow."
            userPhoto={"/ogog.webp"}
            userName={"John Doe"}
          />
          <TopComponent
            ranking={5}
            fundingReq={500}
            fundingReceived={90000}
            domain='Farming'
            title='InnovizeHub'
            description="InnovizeHub is a startup that is working on the development of a new technology that will help farmers to increase their productivity. The startup has raised $90,000 in funding and is looking for more investors to help them grow."
            userPhoto={"/ogog.webp"}
            userName={"John Doe"}
          />
        </ul>
  </div>*/}
    </section>
  );
};

export default TopNotch;
