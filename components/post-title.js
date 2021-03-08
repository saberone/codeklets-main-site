export default function PostTitle({ children }) {
  return (
    <h1
      className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold
    tracking-tight mb-2 sm:mb-3 text-gray-900"
    >
      {children}
    </h1>
  );
}
