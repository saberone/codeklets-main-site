import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";

import markdownToHtml from "../../lib/markdownToHtml";

import Parser from "rss-parser";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="xl:divide-y xl:divide-gray-200 mb-32">
              <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>

              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <iframe
                title="Pinecast podcast player"
                src={`https://pinecast.com/player/${post.episodeguid}?theme=flat`}
                seamless
                height="200"
                style={{ border: 0 }}
                className="pinecast-embed"
                frameBorder="0"
                width="100%"
              ></iframe>
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const parser = new Parser();

  const feed = await parser.parseURL("https://pinecast.com/feed/codeklets");

  const post = await getPostBySlug(
    params.slug,
    [
      "title",
      "date",
      "slug",
      "author",
      "content",
      "ogImage",
      "coverImage",
      "season",
      "episode",
      "episodeguid",
    ],
    feed
  );
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
