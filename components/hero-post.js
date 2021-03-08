import DateFormatter from "../components/date-formatter";

export default function HeroPost({
  title,
  date,
  excerpt,
  author,
  slug,
  episodeguid,
}) {
  return (
    <section className="px-2">
      <div className="bg-gray-100 rounded-md">
        <div className="mt-6 mb-2 md:mb-4 p-4">
          <iframe
            title="Pinecast podcast player"
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
            <p className="mt-2 mb-4 md:mb-0 text-base leading-6 font-medium text-gray-600">
              Publicatiedatum: <DateFormatter dateString={date} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
