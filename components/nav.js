import React, { useState, useCallback } from "react";
export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-white"
            href="/"
          >
            <h2 className="text-3xl lg:text-3xl font-bold tracking-tighter">
              {"<CodeKlets>"}
            </h2>
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#"
              >
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Over Ons</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#"
              >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
