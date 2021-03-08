import Layout from "../components/layout";
import Container from "../components/container";

import { getPageContent } from "../lib/api";

import markdownToHtml from "../lib/markdownToHtml";

export default function CoC({ page, preview }) {
  return (
    <Layout preview={preview}>
      <Container>
        <article
          className="prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: page.content }}
        ></article>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({}) {
  const page = getPageContent("coc");

  const content = await markdownToHtml(page.content || "");

  return {
    props: {
      page: {
        ...page,
        content,
      },
    },
  };
}
