import React from "react";
import StartupPaymentCard from "../../Components/DashboardComponents/StartupPaymentCard.jsx";
import Tag from "../../Components/DashboardComponents/Tag.jsx";
// import Navbar from '../Components/Navbar'
import Markdown from "react-markdown";

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

function Startup() {
  return (
    <>
      <div className="p-4 pt-20 min-h-screen lg:ml-64">
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
      </div>
    </>
  );
}

export default Startup;
