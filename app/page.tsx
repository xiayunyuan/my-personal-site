import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

function GitHubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const skills = ["C", "Python", "Java"];

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

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <header className="sticky top-0 z-10 bg-blush/80 backdrop-blur">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <span className="text-xl font-semibold text-ink">夏蕴源</span>
          <div className="flex gap-6 text-sm text-ink">
            <Link href="#home" className="transition-colors hover:text-accent">
              首页
            </Link>
            <Link href="#projects" className="transition-colors hover:text-accent">
              项目
            </Link>
            <Link href="#about" className="transition-colors hover:text-accent">
              关于
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <section
          id="home"
          className="flex flex-col items-center gap-6 rounded-2xl bg-white p-10 shadow-md"
        >
          <Image
            src="https://i.pravatar.cc/150"
            alt="头像"
            width={120}
            height={120}
            className="rounded-full"
            priority
          />
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-4xl font-bold text-ink">夏蕴源</h1>
            <p className="text-lg text-ink/70">准大二代码练习生</p>
            <p className="max-w-md text-sm leading-7 text-ink/80">
              我是夏蕴源，目前就读于南京大学软工经济专业，正在学习web开发~
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-pink-100/50 px-4 py-2 text-base text-ink"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-16">
          <h2 className="mb-6 text-xl font-semibold text-ink">项目</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-md"
              >
                <h3 className="text-base font-semibold text-ink">
                  {project.name}
                </h3>
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
      </main>

      <footer id="about" className="border-t border-ink/10">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-8 px-6 py-8 text-ink">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <GitHubIcon size={24} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="transition-colors hover:text-accent"
            aria-label="邮箱"
          >
            <Mail size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
