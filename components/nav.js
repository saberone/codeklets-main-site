export default function Nav() {
  return (
    <nav className="p-2 mt-0 z-10 top-0 h-14">
      <div className="container mx-auto flex flex-wrap items-center h-full px-5">
        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold items-start">
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
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white no-underline"
                href="#"
              >
                Afleveringen
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="#"
              >
                Over ons
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="#"
              >
                Contact
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="#"
              >
                Slack
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
