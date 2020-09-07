import cn from "classnames";
import AppleBadge from "../components/apple-badge";
import GoogleBadge from "./google-badge";
import SpotifyBadge from "./spotify-badge";
import PocketCastsBadge from "./pocketcasts-badge";

export default function Intro() {
  return (
    <>
      <section className="flex flex-row mt-16 mb-4 md:mt-8 md:mb-4 px-2">
        <div className="w-4/5 justify-center items-start text-center md:text-left flex-1">
          <h1 className="mb-4 text-3xl lg:text-6xl md:text-5xl sm:text-4xl font-bold tracking-tighter leading-tight">
            De CodeKlets Podcast
          </h1>
          <h2 className="text-2xl lg:text-5xl md:text-4xl sm:text-3xl  font-bold tracking-tighter leading-tight md:pr-8">
            Lekkere luchtige gesprekken over software development.
          </h2>
        </div>
        <div className="w-1/5 text-center">
          <a aria-label="Dynamic Routing and Static Generation" href="/">
            <img
              className="shadow-sm hover:shadow-lg transition-shadow duration-200 rounded-md"
              src="/images/codeklets_logo_gradient.jpg"
              alt="CodeKlets"
            />
          </a>
        </div>
      </section>
      <section className="flex flex-wrap space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-12 sm:flex-row mt-8 mb-16 md:mt-4 md:mb-4 px-2">
        {" "}
        <div className="text-center py-1 sm:py-2">
          <a
            aria-label="apple-podcast"
            href="https://podcasts.apple.com/us/podcast/codeklets/id1478629613?uo=4"
          >
            <AppleBadge></AppleBadge>
          </a>
        </div>
        <div className="text-center py-1 sm:py-2">
          <a
            aria-label="spotify-podcast"
            href="https://open.spotify.com/show/0Sf8c3aGZmtGiNUEwgDTSu"
          >
            <SpotifyBadge></SpotifyBadge>
          </a>
        </div>
        <div className="text-center py-1 sm:py-2">
          <a aria-label="pocketcasts-podcast" href="https://pca.st/pjOKXK">
            <PocketCastsBadge></PocketCastsBadge>
          </a>
        </div>
        <div className="text-center py-1 sm:py-2">
          <a
            aria-label="google-podcast"
            href="https://podcasts.google.com/?feed=aHR0cHM6Ly9waW5lY2FzdC5jb20vZmVlZC9jb2Rla2xldHM="
          >
            <GoogleBadge></GoogleBadge>
          </a>
        </div>
      </section>
    </>
  );
}
