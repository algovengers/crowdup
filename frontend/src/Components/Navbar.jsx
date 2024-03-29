import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ activeLink, handleActiveLink, handleMenuToggle, isMenuOpen, page }) => {
  return (
    <header>
      <nav className="fixed z-50 mb-5 w-full px-4 lg:px-6 py-2.5 bg-green-500/10 backdrop-blur-xl">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="/crowd-up.webp"
              className="mr-0 h-6 p-[0.5] rounded-full bg-green-950 sm:h-9"
              alt="Flowbite Logo"
            />
            <span class="self-center ml-2 text-xl font-bold tracking-wide whitespace-nowrap text-slate-950">Crowd Up</span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to={page}
              className="relative rounded-lg text-black text-sm flex items-center gap-1.5 py-2 px-5 mx-3 bg-gradient-to-bl from-green-400 to-emerald-400 font-medium tracking-wide hover:bg-gradient-to-tr duration-200 transition-all ease-in-out"
              disabled={true}
            >
              Get started
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden  text-gray-900 outline-none border-none"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={handleMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div
              className="justify-between lg:hidden items-center w-full mt-2 pb-4 px-2.5 rounded-lg border-b-2 bg-gradient-to-b from-emerald-300 to-green-500"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium space-y-3">
                <li>
                  <a
                    href="#home"
                    className={`block py-2 pr-4 pl-3 rounded text-center ${activeLink === "home"
                      ? "text-white hover:nav-gradient nav-gradient"
                      : "text-gray-700"
                      }`}
                    aria-current="page"
                    onClick={() => handleActiveLink("home")}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className={`block py-2 pr-4 pl-3 rounded text-center ${activeLink === "about"
                      ? "text-white hover:nav-gradient nav-gradient"
                      : "text-gray-700"
                      }`}
                    aria-current="page"
                    onClick={() => handleActiveLink("about")}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className={`block py-2 pr-4 pl-3 rounded text-center ${activeLink === "features"
                      ? "text-white hover:nav-gradient nav-gradient"
                      : "text-gray-700"
                      }`}
                    aria-current="page"
                    onClick={() => handleActiveLink("features")}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className={`block py-2 pr-4 pl-3 rounded text-center ${activeLink === "team"
                      ? "text-white hover:nav-gradient nav-gradient"
                      : "text-gray-700"
                      }`}
                    aria-current="page"
                    onClick={() => handleActiveLink("team")}
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={`block py-2 pr-4 pl-3 rounded text-center ${activeLink === "contact"
                      ? "text-white hover:nav-gradient nav-gradient"
                      : "text-gray-700"
                      }`}
                    aria-current="page"
                    onClick={() => handleActiveLink("contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#home"
                  className={`block py-1 px-3 rounded ${activeLink === "home"
                    ? "text-white hover:nav-gradient nav-gradient"
                    : "text-gray-700"
                    }`}
                  aria-current="page"
                  onClick={() => handleActiveLink("home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`block py-1 px-3 rounded ${activeLink === "about"
                    ? "text-white hover:nav-gradient nav-gradient"
                    : "text-gray-700"
                    }`}
                  onClick={() => handleActiveLink("about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className={`block py-1 px-3 rounded ${activeLink === "features"
                    ? "text-white hover:nav-gradient nav-gradient"
                    : "text-gray-700"
                    }`}
                  onClick={() => handleActiveLink("features")}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className={`block py-1 px-3 rounded ${activeLink === "team"
                    ? "text-white hover:nav-gradient nav-gradient"
                    : "text-gray-700"
                    }`}
                  onClick={() => handleActiveLink("team")}
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`block py-1 px-3 rounded ${activeLink === "contact"
                    ? "text-white hover:nav-gradient nav-gradient"
                    : "text-gray-700"
                    }`}
                  onClick={() => handleActiveLink("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar