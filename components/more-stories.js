import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <section className="flex flex-wrap mt-4 mb-4 sm:mt-16 sm:mb-4 md:mt-8 md:mb-4 px-2 space-y-4">
      <h2 className="mb-8 text-6xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-tight">
        Vorige afleveringen
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-8 md:gap-y-16 mb-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
