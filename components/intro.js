import cn from "classnames";
import AppleBadge from "../components/apple-badge";
import GoogleBadge from "./google-badge";
import SpotifyBadge from "./spotify-badge";
import PocketCastsBadge from "./pocketcasts-badge";

export default function Intro() {
  return (
    <section className="flex flex-row items-start md:justify-between mt-16 mb-16 md:mt-12 md:mb-12 px-2">
      <div className="flex flex-col w-full md:w-4/5 justify-center items-start text-center md:text-left flex-1">
        <h1 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          De CodeKlets Podcast
        </h1>
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Lekkere luchtige gesprekken over software development.
        </h2>
        <div class="flex flex-row">
          <div class="text-center px-4 py-2 m-2">
            <a
              aria-label="apple-podcast"
              href="https://podcasts.apple.com/us/podcast/codeklets/id1478629613?uo=4"
            >
              <AppleBadge></AppleBadge>
            </a>
          </div>
          <div class="text-center px-4 py-2 m-2">
            <a
              aria-label="spotify-podcast"
              href="https://open.spotify.com/show/0Sf8c3aGZmtGiNUEwgDTSu"
            >
              <SpotifyBadge></SpotifyBadge>
            </a>
          </div>
          <div class="text-center px-4 py-2 m-2">
            <a aria-label="pocketcasts-podcast" href="https://pca.st/pjOKXK">
              <PocketCastsBadge></PocketCastsBadge>
            </a>
          </div>
          <div class="text-center px-4 py-2 m-2">
            <a
              aria-label="google-podcast"
              href="https://podcasts.google.com/?feed=aHR0cHM6Ly9waW5lY2FzdC5jb20vZmVlZC9jb2Rla2xldHM="
            >
              <GoogleBadge></GoogleBadge>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/5 text-center">
        <a aria-label="Dynamic Routing and Static Generation" href="/">
          <img
            className="shadow-sm hover:shadow-lg transition-shadow duration-200 rounded-md"
            src="/images/codekletslogo.png"
            alt="CodeKlets"
          />
        </a>
      </div>
    </section>
  );
}
