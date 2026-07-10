import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "夏蕴源 | 个人主页",
  description: "准大二代码练习生的个人主页",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
