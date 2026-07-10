"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "首页", href: "/" },
  { label: "关于我", href: "/about" },
  { label: "博客", href: "/blog" },
  { label: "Research Papers", shortLabel: "Papers", href: "/papers" },
  { label: "Wiki", href: "/wiki" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 bg-blush/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-semibold text-ink transition-colors hover:text-accent"
        >
          夏蕴源
        </Link>
        <div className="flex gap-4 text-sm text-ink sm:gap-6">
          {menu.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-accent ${active ? "font-semibold text-accent" : ""}`}
              >
                {item.shortLabel ? (
                  <>
                    <span className="hidden sm:inline">{item.label}</span>
                    <span className="sm:hidden">{item.shortLabel}</span>
                  </>
                ) : (
                  item.label
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
