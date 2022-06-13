import Document, {
  provideComponents
} from "@next-safe/middleware/dist/document";
import { Html, Main } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    // those components are automagically wired with provideHashesOrNonce
    const { Head, NextScript } = provideComponents(this.props);

    return (
      <Html
        lang="en"
        className="text-gray-500 antialiased bg-white js-focus-visible"
      >
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
