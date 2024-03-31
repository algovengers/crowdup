import React, { useEffect, useState } from "react";

function StartupPaymentCard() {
  const [percentage, setPercentage] = useState(0);
  const [funded, setFunded] = useState(200);
  const [required, setRequired] = useState(1000);
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



  return (
    <div className=" flex flex-col gap-2 p-4 bg-slate-100 rounded-lg">
      <div className=" flex flex-row items-center gap-2">
        <div>
          <img
            src="https://picsum.photos/200"
            alt=""
            className="rounded-full h-16"
          />
        </div>
        <div>OPENAI</div>
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
        <button className="w-full py-3 px-8 bg-yellow-300 rounded">
          Invest Now
        </button>
      </div>
      <div>
        <button className="w-full py-3 px-8 bg-green-300 rounded">
          Download Pdf Report
        </button>
      </div>
      <div>
        <a href="https://chat.openai.com/" className="text-sm text-blue-500">
          https://chat.openai.com/
        </a>
      </div>
      <div className="text-lg">Stocks Left : 3000</div>
    </div>
  );
}

export default StartupPaymentCard;
