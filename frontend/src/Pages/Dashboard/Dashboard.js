import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/ui/Sidebar";
import { Route, Routes } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import { useAuth } from "../../Context/AuthContext";
import Loading from "../../Components/Loading/Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Publicise from "./Publicise";
import Help from "./Help";
import Documentation from "./Documentation";
import UpgradeToPro from "./UpgradeToPro";
import TopStartups from "./TopStartups";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [showLoading, setShowLoading] = useState(true);
  const navigate = useNavigate();

  const [role, setRole] = useState("");

  useEffect(() => {
    if (!currentUser) {
      navigate("/signup");
    }
  }, [currentUser, navigate]);

  console.log(currentUser?.uid);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    console.log(nodeEnv);
    const baseUrl =
      nodeEnv === "production"
        ? "https://crowdup-api.vercel.app"
        : "http://localhost:5000";
    const getUser = async () => {
      try {
        const response = await axios.get(
          baseUrl + "/api/users/getuser/" + currentUser?.uid,
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
        if (!response.data.exists) {
          console.log("User not present in database");
          navigate("/role");
        } else {
          console.log("User role is already set");
          setRole(response.data.role);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (currentUser) {
      getUser();
    }
  }, [currentUser, navigate]);

  const [startupState, setStartupState] = useState("loading");

  useEffect(() => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    const baseUrl =
      nodeEnv === "production"
        ? "https://crowdup-api.vercel.app"
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
  }, [currentUser?.uid]);

  if (showLoading) {
    return <Loading />;
  }

  return (
    <>
      <Sidebar role={role} startupState={startupState} />
      <Routes>
        <Route
          path="/"
          element={<DashboardHome role={role} startupState={startupState} />}
        />
        {role === "startup" && (
          <Route path="/publicise" element={<Publicise />} />
        )}
        {role === "investor" && (
          <Route path="/topten" element={<TopStartups />} />
        )}
        <Route path="/support" element={<Help />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/upgrade-to-pro" element={<UpgradeToPro role={role} />} />
      </Routes>
    </>
  );
};

export default Dashboard;
