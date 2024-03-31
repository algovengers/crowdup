import React from "react";
import Form from "../../Components/ui/Form";

const Publicise = () => {
  return (
    <div className="p-4 pt-20 min-h-screen lg:ml-64">
      <div className="w-full flex flex-col">
        <h1 className="text-3xl mb-1 text-center font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-green-700 via-emerald-500 to-lime-600 bg-clip-text text-transparent">
          {" "}
          Publicise your startup{" "}
        </h1>
        <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl text-center">
          Fill out the form below to publicise your startup to potential
          investors and get the funding you need to grow your business.
        </p>
        <hr className="h-px my-8 mt-1 bg-gray-700 border-0" />
        <Form />
      </div>
    </div>
  );
};

export default Publicise;
