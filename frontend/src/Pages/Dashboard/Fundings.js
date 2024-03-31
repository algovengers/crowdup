import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import FundingComponent from "../../Components/DashboardComponents/FundingComponent";

const Fundings = () => {
  const { currentUser } = useAuth();
  const [fundings, setFundings] = useState(null);

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
          baseUrl + "/api/payments/history/" + currentUser?.uid,
          {
            withCredentials: true,
          }
        );
        console.log(response.data?.data);
        setFundings(response.data?.data);
        console.log(fundings);
      } catch (error) {
        console.error(error);
      }
    };
    if (currentUser) {
      getUser();
    }
  }, [currentUser]);

  return (
    <>
      <div className="p-4 pt-20 min-h-screen lg:ml-64">
        <div className="w-full flex flex-col">
          <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-green-700 via-emerald-500 to-lime-600 bg-clip-text text-transparent">
            {" "}
            See who funded in your startup{" "}
          </h1>
          <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl text-left">
            {" "}
            Find out who funded in your startup and how much they funded{" "}
          </p>
          <hr className="h-px my-5 mt-1 bg-gray-700 border-0" />

          <div className="flex flex-col pt-5 gap-10">
            {fundings ? (
              fundings.map((funding) => (
                <FundingComponent key={funding.paymentData._id}
                  name={funding.userData.name}
                  email={funding.userData.email}
                  amount={funding.paymentData.amount}
                  photo={funding.userData.photoUrl}
                />
              ))
            ) : (
              <p className="text-lg font-normal text-gray-500 lg:text-xl text-center">
                {" "}
                No fundings yet{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fundings;
