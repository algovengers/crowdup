import { Link } from "react-router-dom";

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

export default Header