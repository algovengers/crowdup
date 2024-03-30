import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DashboardHome = ({ role }) => {
  const { currentUser } = useAuth();

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  const dynamicGreeting = `${greeting}, ${currentUser.displayName}. 👋`;

  return (
    <>
      <div
        className="bg-transparent overflow-hidden p-4 md:p-6 rounded mb-8 relative bg-cover"
        style={{ backgroundImage: "url(/dbbg.webp)" }}
      >
        <div className="relative">
          <h1 className="text-slate-950 font-bold text-2xl md:text-3xl leading-snug mb-2">
            {dynamicGreeting}
          </h1>
          <p className="text-slate-800">
            Welcome to your dashboard. Scroll to see what's happening with your
            projects today:
          </p>
        </div>
      </div>
      {role === "startup" ? (
        <StartupDashboard currentUser={currentUser} />
      ) : (
        <InvestorDashboard currentUser={currentUser} />
      )}
    </>
  );
};

function StartupDashboard({ currentUser }) {
  const [startupState, setStartupState] = useState("loading");
  const navigate = useNavigate();

  useEffect(() => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    const baseUrl =
      nodeEnv === "production"
        ? "https://crowdup-dummy-backend.vercel.app"
        : "http://localhost:5000";
    const isActiveStartup = async () => {
      try {
        const response = await axios.get(
          baseUrl + "/api/startups/isactive/" + currentUser?.uid,
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
        if (!response.data.exists) {
          console.log("User not present in database");
          setStartupState("inactive");
        } else {
          setStartupState(
            response.data?.active === true ? "active" : "inactive"
          );
        }
      } catch (error) {
        console.error(error);
      }
    };
    isActiveStartup();
  }, []);

  return (
    <div>
      {startupState === "loading" && (
        <div>
          <p>Loading ...</p>
        </div>
      )}
      {startupState === "inactive" && (
        <div>
          <button>Create</button>
        </div>
      )}
      {startupState === "active" && (
        <div>
          <p>Startup data</p>
        </div>
      )}
      {startupState === "error" && (
        <div>
          <p>Error</p>
        </div>
      )}
    </div>
  );
}
function InvestorDashboard() {
  return (
    <div>
      <button>Invest</button>
    </div>
  );
}

export default DashboardHome;
