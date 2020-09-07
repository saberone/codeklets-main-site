import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Nav from "../components/nav";

export default function Layout({ preview, children }) {
  return (
    <div className="antialiased">
      <Meta />
      <header className="bg-gray-800 max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 xl:max-w-6xl xl:px-0">
          <Nav></Nav>
        </div>
      </header>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 xl:max-w-6xl xl:px-0">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
