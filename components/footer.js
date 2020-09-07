import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-gray-800 w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 xl:max-w-6xl xl:px-0">
        <div className="p-2 mt-0 z-10 top-0 h-14">
          <div className="container mx-auto flex flex-wrap items-center h-full px-5">
            <h3 className="text-white text-3xl lg:text-3xl font-bold tracking-tighter leading-tight lg:text-left lg:w-1/2">
              {"</CodeKlets>"}
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
