import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  episodeguid,
}) {
  return (
    <section className="bg-gray-200 rounded-md">
      {/* <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div> */}
      <div className="mt-6 mb-2 md:mb-4 p-4">
        <iframe
          src={`https://pinecast.com/player/${episodeguid}?theme=flat`}
          seamless
          height="200"
          style={{ border: 0 }}
          className="pinecast-embed"
          frameBorder="0"
          width="100%"
        ></iframe>
        <div>
          {/* <h3 className="mb-2 text-3xl lg:text-5xl leading-none font-semibold">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3> */}
          <p className="mb-4 md:mb-0 text-lg">
            <dd class="text-base leading-6 font-medium text-gray-600">
              Publicatiedatum: <DateFormatter dateString={date} />
            </dd>
          </p>
        </div>
      </div>
    </section>
  );
}
