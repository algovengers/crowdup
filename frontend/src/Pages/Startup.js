import React from "react";
import StartupPaymentCard from "../Components/StartupPaymentCard.jsx";
import Tag from "../Components/Tag.jsx";
// import Navbar from '../Components/Navbar'
import Markdown from "react-markdown";
import { Link } from "react-router-dom";

const dummy = `
# HI *World*

ParcelBio is developing a programmable technology to safely and specifically deliver mRNA to diverse cell types in the body. Our proprietary (nanoparticle-free) technology, which we call 'STAmP', stabilizes the mRNA and utilizes an interchangeable, lock-and-key-like targeting mechanism which enables fully customizable mRNA medicines.

## Active Founders 
- Sama 
- Elon Musk
- Jeff Bezos
- Bill Gates

![Alt text](https://picsum.photos/400 "a title")

 # Hehehehehe

![Alt text](https://picsum.photos/400 "a title")

`;

function Header() {
  return (
    <nav className=" z-50 mb-5 w-full px-4 lg:px-6 py-2.5 bg-green-500/10 backdrop-blur-xl">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <button
          onClick={() => {
            window.location.reload();
          }}
          className="flex items-center"
        >
          <img
            src="/crowd-up.webp"
            className="mr-0 h-6 p-[0.5] rounded-full bg-green-950 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center ml-2 text-xl font-bold tracking-wide whitespace-nowrap text-slate-950">
            Crowd Up
          </span>
        </button>
        <div className="flex items-center lg:order-2">
          <Link
            className="relative rounded-lg text-black text-sm flex items-center gap-1.5 py-2 px-5 mx-3 bg-gradient-to-bl from-green-400 to-emerald-400 font-medium tracking-wide hover:bg-gradient-to-tr duration-200 transition-all ease-in-out"
            disabled={true}
          >
            SignOut
          </Link>
        </div>
        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>Home</li>
            <li>Features</li>
            <li>Recents</li>
            <li>Team</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Startup() {

  return (
    <>
      {/* header */}
      <Header />
      <div className=" h-full w-full flex justify-center p-4">
        <div className=" max-w-7xl w-full">
          <div className=" flex justify-center ">
            <div className=" flex flex-col-reverse+ lg:grid lg:grid-cols-3 w-full">
              <div className=" col-span-2 flex flex-col gap-4">
                <div className="flex flex-row gap-8 items-center ">
                  <div>
                    <img
                      src="https://picsum.photos/200"
                      alt=""
                      className=" rounded-full h-24"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="text-4xl">OpenAI</div>
                    <div className="text-lg">
                      Where Artificial Intelligence meet reality
                    </div>
                    <Tag data="Artificial Intelligence" />
                  </div>
                </div>
                <div>
                  <Markdown>{dummy}</Markdown>
                </div>
              </div>
              <div className="col-span-1 ">
                <div className="sticky top-4">
                  <StartupPaymentCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Startup;
