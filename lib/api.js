import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

import { getEpisodes } from "../lib/transistorfm";

const postsDirectory = join(process.cwd(), "_posts");
const pagesDirectory = join(process.cwd(), "_pages");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug, fields = [], episodes) {
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
  if (episodes && post["season"] && post["episode"]) {
    const season = post["season"];
    const episode = post["episode"];

    const episodeItem = getEpisodeItem(episodes, season, episode);

    if (episodeItem) {
      post["media"] = episodeItem.media;
      post["player_html"] = episodeItem.player_html;
    }
  }

  return post;
}

function getEpisodeItem(items, season, episode) {
  return items.find(
    (item) => item.meta.season === season && item.meta.episode === episode
  );
}

export async function getAllPosts(fields = []) {
  const slugs = getPostSlugs();

  const episodes = await getEpisodes();

  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug, fields, episodes))
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
