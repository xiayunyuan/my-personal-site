import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "项目 | 夏蕴源",
};

const projects = [
  {
    name: "项目一",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "项目二",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "项目三",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold text-ink">项目</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-md"
          >
            <h2 className="text-base font-semibold text-ink">{project.name}</h2>
            <p className="flex-1 text-sm leading-6 text-ink/70">
              {project.desc}
            </p>
            <button
              type="button"
              className="rounded-full bg-accent px-4 py-2 text-sm text-white transition-opacity hover:opacity-90"
            >
              查看详情
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
