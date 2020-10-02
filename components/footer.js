import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-gray-800 w-full">
      <div className="max-w-5xl mx-auto px-1 sm:px-4 xl:max-w-6xl xl:px-0">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="container mx-auto flex flex-wrap items-center h-full">
              <h3 className="text-white text-3xl lg:text-3xl font-bold tracking-tighter leading-tight lg:text-left lg:w-1/2">
                {"{CodeKlets}"}
              </h3>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
}
