import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import SectionSeparator from "../components/section-separator";
import { getAllPosts } from "../lib/api";
// import Head from "next/head";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Container>
          <Intro />
          <SectionSeparator />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              player_html={heroPost.player_html}
            />
          )}
          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  console.log("context", context);
  const allPosts = await getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "season",
    "episode",
    "episodeguid",
  ]);

  return {
    props: { allPosts },
  };
}
