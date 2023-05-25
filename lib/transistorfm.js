import axios from "axios";
import DOMPurify from "isomorphic-dompurify";

const showId = "36181"; // CodeKLets id on transistorfm

const reqConfig = {
  headers: {
    "x-api-key": process.env.TRANSISTORFM_API_KEY,
  },
};

export async function getEpisodes() {
  // const url = `https://api.transistor.fm/v1/episodes?show_id=${showId}&pagination[per]=20&fields[episode][]=title&fields[episode][]=published_at&fields[episode][]=formatted_published_at&fields[episode][]=share_url`;
  const url = `https://api.transistor.fm/v1/episodes?show_id=${showId}&pagination[per]=50`;

  try {
    const res = await axios.get(url, reqConfig);

    const episodeData = res.data.data
      .filter((episode) => {
        return episode.attributes.status === "published";
      })
      .map((episode) => {
        const { attributes } = episode;
        return {
          title: attributes.title,
          meta: {
            date: attributes.formatted_published_at,
            duration: attributes.duration_in_mmss.slice(0, 2) + " minutes",
            season: attributes.season,
            episode: attributes.number,
          },
          summary: attributes.summary,
          media: attributes.media_url,
          player_html: attributes.embed_html,
        };
      });

    return episodeData;
  } catch (err) {
    if (err.response) {
      // The client was given an error response (5xx, 4xx)
      console.log("Something went wrong", err.response);
    } else if (err.request) {
      // The client never received a response, and the request was never left
      console.log("No response from server");
    } else {
      // Anything else
      console.log("Error", err.message);
    }
  }
}
