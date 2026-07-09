import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "张三 | 个人主页",
  description: "准大二前端练习生的个人主页",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
