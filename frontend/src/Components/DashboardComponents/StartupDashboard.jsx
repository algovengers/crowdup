import React from "react";
import { Link } from "react-router-dom";
import StartupCardInStartup from "./StartupCardInStartup";
import Loading from "../Loading/Loading";



const StartupDashboard = ({ currentUser, startupState }) => {

  return (
    <div className="mt-3">
      {startupState === "loading" && <Loading />}
      {startupState === "inactive" && (
        <Link
          to="/dashboard/publicise"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Publicise your startup
        </Link>
      )}
      {/*{startupState === "active" && <StartupCardInStartup />}*/}
      <StartupCardInStartup />
      {startupState === "error" && (
        <div>
          <p>Error</p>
        </div>
      )}
    </div>
  );
};

export default StartupDashboard;
