import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import Parser from "rss-parser";

const postsDirectory = join(process.cwd(), "_posts");
const pagesDirectory = join(process.cwd(), "_pages");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug, fields = [], feed) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      post[field] = realSlug;
    }
    if (field === "content") {
      post[field] = content;
    }

    if (data[field]) {
      post[field] = data[field];
    }
  });

  // first check if the post has a season & episode so we can assume it's a podcast episode post
  if (feed && post["season"] && post["episode"]) {
    const season = post["season"].toString();
    const episode = post["episode"].toString();

    const episodeItem = getEpisodeItem(feed.items, season, episode);

    if (episodeItem) {
      //post["title"]; // episodeItem.title;
      post["mediaurl"] = episodeItem.enclosure.url;

      const url = episodeItem.guid;

      const UUID = url.split("https://pinecast.com/guid/")[1];
      post["episodeguid"] = UUID;
    }
  }

  return post;
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

export async function getAllPages() {
  const contentFiles = getPageContentFiles();
}

function getPageContentFiles() {
  return fs.readdirSync(pagesDirectory);
}

export function getPageContent(pageName) {
  const fullPath = join(pagesDirectory, `${pageName}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { metadata, content } = matter(fileContents);

  const pageItem = {
    metadata: metadata ?? null,
    content: content,
  };

  return pageItem;
}
