import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug font-bold text-gray-600 tracking-tighter">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="mb-4 text-base leading-6 font-medium">
        Publicatiedatum: <DateFormatter dateString={date} />
      </div>
      <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-9 font-medium mb-10 sm:mb-11 mb-4">
        {excerpt}
      </p>
    </div>
  );
}
