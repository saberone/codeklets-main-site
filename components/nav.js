import React, { useState, useCallback } from "react";
import Link from "next/link";

import SlackIcon from "../assets/svg/SlackIcon.svg";

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 py-4 flex items-center justify-between mb-16 sm:mb-20 -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <Link href="/">
          <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap">
            <h2 className="text-3xl lg:text-3xl font-bold tracking-tighter">
              {"{CodeKlets}"}
            </h2>
          </a>
        </Link>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center shadow hover:shadow-md outline-none focus:outline-none"
          style={{ transition: "all .15s ease" }}
          onClick={() => handleSlackButtonClick()}
        >
          <SlackIcon className="fill-current w-4 h-4 mr-2" />
          <span>Slack</span>
        </button>
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
          "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-col items-center space-y-3 space-x-1 lg:space-y-0 lg:space-x-3 lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <Link href="/newsletter">
              <a className="flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                <span className="ml-2">Nieuwsbrief</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/coc">
              <a className="flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                <span className="ml-2">Code of Conduct</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="flex block items-center hover:text-gray-500 mr-5"
              href="https://twitter.com/codeklets"
            >
              <svg
                className="fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Twitter</title>
                <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
