import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts-manifest";

export const metadata: Metadata = {
  title: "博客 | 夏蕴源",
};

export default function BlogPage() {
  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold text-ink">博客</h1>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <h2 className="mb-2 text-base font-semibold text-ink">
              {post.title}
            </h2>
            <time
              dateTime={post.date}
              className="mb-2 block text-xs text-ink/50"
            >
              {post.date}
            </time>
            <p className="text-sm leading-6 text-ink/70">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
