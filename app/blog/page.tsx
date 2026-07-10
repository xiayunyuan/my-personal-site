import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "博客 | 夏蕴源",
};

const posts = [
  {
    title: "文章标题一",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "文章标题二",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "文章标题三",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function BlogPage() {
  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold text-ink">博客</h1>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-2xl bg-white p-6 shadow-md"
          >
            <h2 className="mb-2 text-base font-semibold text-ink">
              {post.title}
            </h2>
            <p className="text-sm leading-6 text-ink/70">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
