import AppleBadge from "../assets/svg/AppleBadge.svg";
import GoogleBadge from "../assets/svg/GoogleBadge.svg";
import SpotifyBadge from "../assets/svg/SpotifyBadge.svg";
import PocketCastsBadge from "../assets/svg/PocketCastsBadge.svg";
import SlackIcon from "../assets/svg/SlackIcon.svg";
import Image from "next/image";

export default function Intro() {
  const handleSlackButtonClick = () => {
    window.location.href =
      "https://join.slack.com/t/codeklets/shared_invite/enQtNzQ4MTI4MTMxNzY2LWYzNTk0NzE1YzdkNDczYTg1MDBjZDIyZjkzMThmYTBkZTY3ZTBhNDYyOGY4OWQxZGExM2Q5NzA2ZDM0NGY1ZGM";
  };

  return (
    <>
      <section className="flex flex-wrap mt-4 mb-4 sm:mt-16 sm:mb-4 md:mt-8 md:mb-4 sm:px-2 space-y-4">
        <div className="w-full sm:w-4/5 justify-center items-start text-left flex-1 pr-1 sm:pr-0 space-y-2">
          <h1 className="text-6xl lg:text-6xl md:text-5xl sm:text-4xl font-bold tracking-tighter leading-none sm:leading-tight">
            De CodeKlets Podcast
          </h1>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
            Lekker luchtige gesprekken over software development.
          </h2>
          <div className="w-full text-center">
            <button
              className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center shadow hover:shadow-md outline-none focus:outline-none"
              style={{ transition: "all .15s ease" }}
              onClick={() => handleSlackButtonClick()}
            >
              <SlackIcon className="fill-current w-4 h-4 mr-2" />
              <span>Klets op Slack</span>
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/5 text-center">
          <Image 
            className="shadow-sm hover:shadow-lg transition-shadow duration-200 rounded-md"
            src={"/images/codeklets_1080x1080.png"}
            alt="CodeKlets logo"
            width={1080}
            height={1080}
          />
        </div>
      </section>
      <section className="flex flex-wrap space-x-1 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-12 sm:flex-row mt-4 mb-4 px-2">
        {" "}
        <div className="text-center py-1 sm:py-2">
          <a
            aria-label="apple-podcast"
            href="https://podcasts.apple.com/us/podcast/codeklets/id1478629613?uo=4"
          >
            <AppleBadge />
          </a>
        </div>
        <div className="text-center py-1 sm:py-2">
          <a
            aria-label="spotify-podcast"
            href="https://open.spotify.com/show/0Sf8c3aGZmtGiNUEwgDTSu"
          >
            <SpotifyBadge />
          </a>
        </div>
        <div className="text-center py-1 sm:py-2">
          <a aria-label="pocketcasts-podcast" href="https://pca.st/pjOKXK">
            <PocketCastsBadge />
          </a>
        </div>
        <div className="text-center py-1 sm:py-2">
          <a
            aria-label="google-podcast"
            href="https://podcasts.google.com/?feed=aHR0cHM6Ly9waW5lY2FzdC5jb20vZmVlZC9jb2Rla2xldHM="
          >
            <GoogleBadge />
          </a>
        </div>
      </section>
    </>
  );
}
