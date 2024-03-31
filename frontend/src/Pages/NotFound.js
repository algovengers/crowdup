import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
    <div className="flex flex-col justify-center items-center bg-black blur-[1px] -z-[1] absolute w-full h-screen">
    </div>
      <div className='flex flex-col gap-2 items-center min-h-screen justify-center pb-10'>
        <h1 className="text-white font-bold text-9xl h-32 sm:text-[16rem] sm:h-64" style={{ textShadow: '0 0 12px rgba(255, 255, 255, 0.36)' }}>404</h1>
        <p className="text-white text-2xl mb-5 text-center font-semibold" style={{ textShadow: '0 0 12px rgba(255, 255, 255, 0.36)' }}>Oops! Page Not Found</p>
        <button className="bg-gradient-to-br from-green-600 shadow-2xl mt-2 shadow-green-900 border-2 border-green-400 rounded-xl text-white font-semibold text-base tracking-wide to-emerald-700 py-2 px-4 hover:bg-gradient-to-tl hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center" onClick={handleNavigate}>Back To Home</button>
      </div>
    </>
  );
};

export default NotFound;