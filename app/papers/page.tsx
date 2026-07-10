import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Papers | 夏蕴源",
};

const papers = [
  { title: "Paper Title One", authors: "Lorem ipsum", year: "2025" },
  { title: "Paper Title Two", authors: "Lorem ipsum", year: "2025" },
  { title: "Paper Title Three", authors: "Lorem ipsum", year: "2025" },
];

export default function PapersPage() {
  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold text-ink">Research Papers</h1>
      <div className="flex flex-col gap-4">
        {papers.map((paper) => (
          <article
            key={paper.title}
            className="rounded-2xl bg-white p-6 shadow-md"
          >
            <h2 className="mb-2 text-base font-semibold text-ink">
              {paper.title}
            </h2>
            <p className="text-sm leading-6 text-ink/70">
              {paper.authors} · {paper.year}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
