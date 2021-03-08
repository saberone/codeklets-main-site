import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Nav from "../components/nav";

export default function Layout({ preview, children }) {
  return (
    <div className="space-y-10 sm:space-y-16 md:space-y-20 lg:space-y-24 overflow-hidden">
      <Meta />
      <header className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
          <Nav></Nav>
        </div>
      </header>
      <div className="flex-grow max-w-5xl mx-auto mt-8 px-1 sm:px-4 xl:max-w-6xl xl:px-0">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
