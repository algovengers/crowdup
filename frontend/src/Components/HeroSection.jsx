import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const HeroSection = ({ page }) => {
  return (
    <section className="pt-16 flex justify-center home-section bg-gradient-to-br from-emerald-300 to-lime-400" id="home">
      <div className="bg-shape-1">
        <img src="/images/bg-shape-1.svg" alt="" className="opacity-50" />
      </div>
      <div className="max-w-[1350px] py-[30px] min-h-screen flex items-center px-2 sm:px-5">
        <div className="home-content text-left">
          <div className="flex flex-wrap justify-center">
            <div className="md:w-4/5 pb-28 pr-4 pl-4 md:mx-1/6 lg:w-1/2 offset-lg-0 flex items-center mb-md-60 mb-sm-30">
              <div className="w-full text-center">
                <h2 className="section-caption mb-8 lg:text-left lg:ml-2 font-semibold">
                  Give Get Earn money
                </h2>
                <h1 className="mb-10 sm:mb-5 lg:text-left font-bold leading-12 tracking-tighter text-5xl sm:text-7xl">
                  Fund here and get a share of capital
                </h1>
                <p className="section-descr mb-8 lg:text-left text-green-950" >
                  Crowd Up is a platform that allows you to get crowd funding for your business or project. You can also invest in other projects and earn a share of the capital.
                </p>
                <div className='flex justify-center lg:justify-start gap-6 flex-wrap'>
                  <button className='bg-gradient-to-br from-green-400 shadow-2xl shadow-green-600 border-2 border-green-400 rounded-xl text-white font-semibold text-base tracking-wide to-emerald-600 py-2 px-4 hover:bg-gradient-to-tl hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center'>
                    Know More <FontAwesomeIcon icon={faArrowRight} className='ml-2 pt-1' />
                  </button>
                  <Link to={page} className='bg-gradient-to-tl from-green-400 shadow-2xl shadow-green-600 border-2 border-green-400 rounded-xl text-white font-semibold text-base tracking-wide to-emerald-600 py-2 px-4 hover:bg-gradient-to-br hover:scale-105 transition-all ease-in-out duration-200'>Get Started</Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 pr-4 pl-4 flex items-center">
              <div className="w-full">
                <div className="composition-4">
                  <div className="composition-4-decoration-1 opacity-65">
                    <img src="images/decoration-3.svg" alt="" />
                  </div>
                  <div className="composition-4-image-1">
                    <div className="composition-4-image-1-inner">
                      <img src="/images/hs-image-1.webp" alt="" />
                    </div>
                  </div>
                  <div className="composition-4-image-2">
                    <div className="composition-4-image-2-inner">
                      <img src="/images/hs-image-2.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection