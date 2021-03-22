import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul className="Footer_nav__2rFid text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <li className="space-y-5 row-span-2">
            <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
              CodeKlets info
            </h2>
            <ul className="space-y-4">
              <li>Contact</li>

              <li>
                <Link
                  href="/coc"
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  Nieuwsbrief
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  Over ons
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
              Community
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="https://join.slack.com/t/codeklets/shared_invite/enQtNzQ4MTI4MTMxNzY2LWYzNTk0NzE1YzdkNDczYTg1MDBjZDIyZjkzMThmYTBkZTY3ZTBhNDYyOGY4OWQxZGExM2Q5NzA2ZDM0NGY1ZGM"
                >
                  Slack
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="https://github.com/codeklets"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="https://twitter.com/codeklets"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
              Vrienden van CodeKlets
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="https://www.metnerdsomtafel.nl/"
                >
                  Met Nerds om Tafel
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="https://www.hazcast.nl/"
                >
                  HazCast
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="https://beginnenmetbitcoin.com/"
                >
                  Beginnen met Bitcoin
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="https://appforce1.net/podcast/"
                >
                  AppForce1
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="https://geldvrienden.nl/podcast"
                >
                  Geldvrienden
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="pt-10 sm:pt-12">
          <h2 className="text-3xl lg:text-3xl font-bold tracking-tighter">
            {"{CodeKlets}"}
          </h2>
        </div>
      </div>
    </footer>
  );
}
