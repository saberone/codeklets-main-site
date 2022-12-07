import React, { useState, useCallback } from "react";
import Link from "next/link";

import SlackIcon from "../assets/svg/SlackIcon.svg";

export default function Nav() {
  const handleSlackButtonClick = () => {
    window.location.href =
      "https://join.slack.com/t/codeklets/shared_invite/enQtNzQ4MTI4MTMxNzY2LWYzNTk0NzE1YzdkNDczYTg1MDBjZDIyZjkzMThmYTBkZTY3ZTBhNDYyOGY4OWQxZGExM2Q5NzA2ZDM0NGY1ZGM";
  };

  return (
    <nav className="border-b border-gray-200 py-4 flex items-center justify-between mb-16 sm:mb-20 -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">
          <Link
            href="/"
            className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-no-wrap"
          >
            <h2 className="text-3xl lg:text-3xl font-bold tracking-tighter">
              {"{CodeKlets}"}
            </h2>
          </Link>
        </div>
        <div className="block ml-0 sm:ml-6">
          <div className="flex space-x-4">
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center shadow hover:shadow-md outline-none focus:outline-none"
              style={{ transition: "all .15s ease" }}
              onClick={() => handleSlackButtonClick()}
            >
              <SlackIcon className="fill-current w-4 h-4 mr-2" />
              <span>Slack</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-6 sm:space-x-10 ml-4 sm:ml-10">
        <Link
          className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2"
          href="/contact"
        >
          <span className="hidden sm:inline">Contact</span>
        </Link>

        <Link
          className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2"
          href="/supportus"
        >
          <span className="hidden sm:inline">Steun ons</span>
        </Link>
        <Link
          className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2"
          href="/about"
        >
          <span className="hidden sm:inline">Over ons</span>
        </Link>
        <Link
          className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2"
          href="/newsletter"
        >
          <span className="hidden sm:inline">Nieuwsbrief</span>
        </Link>
        <a
          href="https://twitter.com/codeklets"
          className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
        >
          <span className="sr-only">CodeKlets Twitter</span>
          <svg
            className="fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Twitter</title>
            <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
          </svg>
        </a>
      </div>
    </nav>
  );
}
