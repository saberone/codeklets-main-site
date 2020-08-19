import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import Parser from "rss-parser";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug, fields = [], feed) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  // first check if the post has a season & episode so we can assume it's a podcast episode post
  if (feed && items["season"] && items["episode"]) {
    const season = items["season"].toString();
    const episode = items["episode"].toString();

    const episodeItem = getEpisodeItem(feed.items, season, episode);

    if (episodeItem) {
      items["title"] = episodeItem.title;
      items["mediaurl"] = episodeItem.enclosure.url;

      const url = episodeItem.guid;

      const UUID = url.split("https://pinecast.com/guid/")[1];
      items["episodeguid"] = UUID;
    }
  }

  return items;
}

function getEpisodeItem(items, season, episode) {
  return items.find(
    (item) => item.itunes.season === season && item.itunes.episode === episode
  );
}

export async function getAllPosts(fields = []) {
  const parser = new Parser();

  const feed = await parser.parseURL("https://pinecast.com/feed/codeklets");

  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug, fields, feed))
  );

  const sortedPosts = posts // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
  return sortedPosts;
}
