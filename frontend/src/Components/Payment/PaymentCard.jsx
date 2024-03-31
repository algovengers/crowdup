import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

export default function PaymentCard({ showModal, setShowModal }) {
  // const [showModal, setShowModal] = React.useState(false);
  const [startupid, setStartupId] = useState(
    window.location.href.split("/").at(-1)
  );
  console.log(startupid);
  const { currentUser } = useAuth();
  const [amount, setAmount] = useState(0);
  const [otp, setOtp] = useState("");
  const [sentOtp, setSentOtp] = useState(false);
  const handleSubmit = async () => {
    try {
      const nodeEnv = process.env.REACT_APP_NODE_ENV;
      const baseUrl =
        nodeEnv === "production"
          ? "https://crowdup-api.vercel.app"
          : "http://localhost:5000";
      const data = await axios.post(baseUrl + "/api/payments/getotp", {
        useruid: currentUser?.uid,
        amount,
        startupid,
      });
      setSentOtp(true)
    } catch (error) {}
  };
  const handleOTP = async() =>{
try {
      const nodeEnv = process.env.REACT_APP_NODE_ENV;
      const baseUrl =
        nodeEnv === "production"
          ? "https://crowdup-api.vercel.app"
          : "http://localhost:5000";
      const data = await axios.post(baseUrl + "/api/payments/verifypayment", {
        useruid: currentUser?.uid,
        otp
      });
      setShowModal(false)
} catch (error) {
  alert(error.message)
} 
  }
  return (
    <>
      <button
        className="w-full py-3 px-8 bg-yellow-300 rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Invest Now
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col gap-2">
                  <input
                    className="w-80 outline focus:outline py-2 px-4"
                    placeholder="Enter the amount you want to invest"
                    type="number"
                    value={amount}
                    onChange={(e) =>{
                      if(!sentOtp)
                       setAmount(e.target.value)}}
                  />
                  {sentOtp &&

                    <input
                    className="w-80 outline focus:outline py-2 px-4"
                    placeholder="Enter the OTP"
                    
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    />
                  }
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  { !sentOtp &&

                    <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    >
                    Close
                  </button>
                  }
                  {
                    !sentOtp &&
                    <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                    >
                    Submit
                  </button>
                  }
                  {sentOtp && (
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleOTP}
                    >
                      Submit OTP
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
