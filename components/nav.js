import SlackIcon from "../assets/svg/SlackIcon.svg";
import { useCallback } from "react";

export default function Nav() {
  const handleSlackButtonClick = useCallback(() => {
    window.location.href =
      "https://join.slack.com/t/codeklets/shared_invite/enQtNzQ4MTI4MTMxNzY2LWYzNTk0NzE1YzdkNDczYTg1MDBjZDIyZjkzMThmYTBkZTY3ZTBhNDYyOGY4OWQxZGExM2Q5NzA2ZDM0NGY1ZGM";
  });

  return (
    <nav className="p-2 mt-0 z-10 top-0 h-14">
      <div className="container mx-auto flex flex-wrap items-center h-full px-5">
        <div className="w-full md:w-1/2 justify-center md:justify-start items-start">
          <a
            className="text-white no-underline hover:text-white hover:no-underline"
            href="/"
          >
            <h1 className="text-3xl lg:text-3xl font-bold tracking-tighter">
              {"<CodeKlets>"}
            </h1>
          </a>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul className="list-reset flex space-x-4 justify-between flex-1 md:flex-none items-center">
            <li>
              <a
                className="inline-block py-2 px-4 text-white no-underline"
                href="#"
              >
                Afleveringen
              </a>
            </li>
            <li>
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="#"
              >
                Over ons
              </a>
            </li>
            <li>
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="#"
              >
                Contact
              </a>
            </li>
            <li>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={handleSlackButtonClick}
              >
                <SlackIcon
                  className="fill-current w-4 h-4 mr-2"
                  viewBox="0 0 60 60"
                ></SlackIcon>
                <span>Klets op Slack</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
