import React from "react";

function Nav() {
  return (
    <div>
      <nav className="bg-steinNav md:border-b-2 lg:border-b-4 xl:border-b-8 border-steinPink">
        <div className="max-w-5xl mx-auto">
          <div className="hidden h-10 items-center md:flex justify-between text-white">
            <a href="#">Dashboard</a>
            <a href="#">Our Agency</a>
            <a href="#" className="bg-steinPink items-center">
              Our Staff
            </a>
            <a href="#">Locations</a>
            <a href="#">Latest</a>
            <a href="#">Upcoming</a>
            <a href="#">Resources</a>
            <a href="#">Your Stein IAS</a>
          </div>
        </div>

        <div className="md:hidden flex items-center justify-end">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 bg-steinPink text-white rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="mobile-menu hidden">
          <a href="#" className="block py-2 px-2 text-sm hover:bg-steinPink">
            Dashboard
          </a>
          <a href="#" className="block py-2 px-2 text-sm hover:bg-steinPink">
            Our Agency
          </a>
          <a href="#" className="block py-2 px-2 text-sm hover:bg-steinPink">
            Our Staff
          </a>
          <a href="#" className="block py-2 px-2 text-sm hover:bg-steinPink">
            Locations
          </a>
          <a href="#" className="block py-2 px-2 text-sm hover:bg-steinPink">
            Latest
          </a>
          <a href="#" className="block py-2 px-2 text-sm hover:bg-steinPink">
            Upcoming
          </a>
          <a href="#" className="block py-2 px-2 text-sm hover:bg-steinPink">
            Resources
          </a>
          <a href="#" className="block py-2 px-2 text-sm hover:bg-steinPink">
            Your Stein IAS
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
