import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我 | 夏蕴源",
};

export default function AboutPage() {
  return (
    <section className="rounded-2xl bg-white p-10 shadow-md">
      <h1 className="mb-6 text-2xl font-semibold text-ink">关于我</h1>
      <p className="text-sm leading-7 text-ink/80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </section>
  );
}
