import React, { useEffect, useState } from "react";
import PaymentCard from "../Payment/PaymentCard";

function StartupPaymentCard({data}) {
  const [percentage, setPercentage] = useState(0);
  const [funded, setFunded] = useState(data?.fundsRecieved ?? 0);
  const [required, setRequired] = useState(data?.fundsRequired ?? 0);
  useEffect(() => {
    const progress = () => {
      let percent = Math.min((funded / required) * 100, 100);
      console.log(funded, required);
      setFunded(funded);
      setRequired(required);
      console.log(percent);
      setPercentage(percent);
    };
    progress();
    console.log(percentage);
  }, [required, funded, percentage]);
  useEffect(()=>{
    setFunded(data?.fundsRecieved)
    setRequired(data?.fundsRequired)
  },[data?.fundsRecieved])
  const [showModal,setShowModal] = useState(false)



  return (
    <div className=" flex flex-col gap-2 p-4 bg-slate-100 rounded-lg">
      <div className=" flex flex-row items-center gap-2">
        <div>
          <img
            src={data?.logo}
            alt=""
            className="rounded-full h-16 w-16"
          />
        </div>
        <div>{data?.name}</div>
      </div>
      <div className=" w-full bg-gray-600 rounded">
        <div
          className="h-2 bg-blue-300 rounded"
          style={{ width: `calc(${percentage}%)` }}
        ></div>
      </div>
      <div className="text-gray-600">
        {" "}
        <span className="text-xl text-black"> Rs {funded} </span> Funded out of
        Rs {required}
      </div>
      {/* <div>bar</div> */}
      <div>
      <PaymentCard showModal={showModal} setShowModal={setShowModal}  />

      </div>
      <div>
        <button className="w-full py-3 px-8 bg-green-300 rounded">
          <a href={data?.report} download={data?.report}>
          Download Pdf Report

          </a>
        </button>
      </div>
      <div>
        <a href={data?.websiteLink} className="text-sm text-blue-500">
         {data?.websiteLink}
        </a>
      </div>
      {/* <div className="text-lg">Stocks Left : 3000</div> */}
    </div>
  );
}

export default StartupPaymentCard;
