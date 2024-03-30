import React from 'react'

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="overflow-hidden pt-28 md:pt-32 xl:pt-36 bg-gradient-to-b from-white via-green-400/50 to-lime-400/70"
    >
      <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center">
          <h2 className="text-slate-950 mb-4.5 text-2xl font-bold tracking-wide sm:text-4xl xl:text-5xl">
            Key Features of Our Tool
          </h2>
          <p className="max-w-[714px] mx-auto mb-5 font-medium text-gray-800/90 mt-2.5">
            Our platform offers a variety of features that make it easier for you to manage your startups and crowedfunds. Here are some of the key features of our platform.
          </p>
        </div>
        <div className="relative">
          <div className="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 lg:-translate-x-1/3 lg:left-1/4 hidden lg:block"></div>
          <div className="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 right-1/2 -translate-y-1/2 lg:right-[8.3%] hidden lg:block"></div>

          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="relative rounded-lg lg:rounded-none group overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="/icon-01.svg" alt="icon" className='invert' />
                </span>
                <h4 className="font-semibold text-lg text-slate-950 mb-4">
                  Publicise your startup
                </h4>
                <p className="font-medium text-gray-800/90">
                  Publicise your startup to a large audience and get the funding you need to get started.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group rounded-lg lg:rounded-none relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="/icon-02.svg" alt="icon" className='invert' />
                </span>
                <h4 className="font-semibold text-lg text-slate-950 mb-4">
                  See who provided
                </h4>
                <p className="font-medium text-gray-800/90">
                  See who provided funding for your startup and get in touch with them.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group rounded-lg lg:rounded-none relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="/icon-03.svg" alt="icon" className='invert' />
                </span>
                <h4 className="font-semibold text-lg text-slate-950 mb-4">
                  Expense tracking
                </h4>
                <p className="font-medium text-gray-800/90">
                  Keep track of your expenses and see how much you have spent on your startup.
                </p>
              </div>
            </div>
          </div>
          <div className="features-row-border w-full h-[1px]"></div>

          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group rounded-lg lg:rounded-none relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="/icon-04.svg" alt="icon" className='invert' />
                </span>
                <h4 className="font-semibold text-lg text-slate-950 mb-4">
                  Get shares
                </h4>
                <p className="font-medium text-gray-800/90">
                  Get shares in the company you are funding and see how much you own.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group rounded-lg lg:rounded-none relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="/icon-05.svg" alt="icon" className='invert' />
                </span>
                <h4 className="font-semibold text-lg text-slate-950 mb-4">
                  Ranking system
                </h4>
                <p className="font-medium text-gray-800/90">
                  See how well your startup is getting funded compared to others on the platform.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group rounded-lg lg:rounded-none relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="/icon-06.svg" alt="icon" className='invert' />
                </span>
                <h4 className="font-semibold text-lg text-slate-950 mb-4">
                  Report generation
                </h4>
                <p className="font-medium text-gray-800/90">
                  Generate reports on how well your startup is doing and what you can do to improve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection