import React from "react";
import UpgradeCards from "../../Components/DashboardComponents/UpgradeCards";

const UpgradeToPro = ({ role }) => {
  return (
    <div className="p-4 pt-20 min-h-screen lg:ml-64">
      <div className="w-full flex flex-col">
        <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-green-700 via-emerald-500 to-lime-600 bg-clip-text text-transparent">
          {" "}
          Upgrade To Pro{" "}
        </h1>
        <p className="mb-3 mt-2 text-lg font-normal text-gray-500 lg:text-xl text-left">
          Unlock a world of enhanced features by upgrading to Pro.
        </p>
        <hr className="h-px my-8 mt-1 bg-gray-700 border-0" />

        <section className="bg-transparent">
          <div className="pb-8 px-6 mx-auto max-w-screen-xl lg:pb-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 text-center">
                Effortless Engagement & Organization For Pros
              </h2>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
              {role === "startup" && (
                <>
                  <UpgradeCards
                    plan="Pro"
                    desc="Get to the next level with this Pro plan. Stay ahead of the other
                startups with this plan."
                    amt="₹600"
                    f1="Get to publise 3 more start ups"
                    f2="Get to see analytics of your start up"
                    f3="Reach out to Investors more"
                  />

                  <UpgradeCards
                    plan="VIP"
                    desc="Get to the highest level with this VIP plan. Stay the most
                    ahead of the other startups with this plan."
                    amt="₹1000"
                    f1="Get Pro benefits"
                    f2="Evaluate your expenses"
                    f3="Track your business growth daily"
                  />
                </>
              )}

              {role === "investor" && (
                <>
                  <UpgradeCards
                    plan="Pro"
                    desc="Get to the next level with this Pro plan. Stay notified with the current market trends with this plan."
                    amt="₹600"
                    f1="Get to see recently added startups with their details"
                    f2="Get to see analytics of the startups"
                    f3="Get to reach out to the startups"
                  />

                  <UpgradeCards
                    plan="VIP"
                    desc="Get to the highest level with this VIP plan. Stay the most ahead of the other investors with this plan."
                    amt="₹1000"
                    f1="Get Pro benefits"
                    f2="Evaluate your expenses"
                    f3="Track funds and apply for shares easily"
                  />
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UpgradeToPro;
