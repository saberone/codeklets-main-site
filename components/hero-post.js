import DateFormatter from "../components/date-formatter";

export default function HeroPost({
  title,
  date,
  excerpt,
  author,
  slug,
  player_html,
}) {
  function playerMarkup() {
    return { __html: player_html };
  }

  return (
    <section className="px-2">
      <div className="bg-gray-100 rounded-md">
        <div className="mt-6 mb-2 md:mb-4 p-4">
          <div dangerouslySetInnerHTML={playerMarkup()}></div>
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
