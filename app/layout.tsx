import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/categories", label: "分类" },
  { href: "/search", label: "搜索" },
  { href: "/cart", label: "购物车" },
  { href: "/checkout", label: "结账" },
];

export const metadata: Metadata = {
  title: "Nordic Living 家居店",
  description: "精选家居与生活方式产品，覆盖客厅、办公、户外等场景。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-50 antialiased text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-zinc-200/80 bg-white/80 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/70">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-lg font-semibold tracking-tight">
                Nordic Living
              </Link>
              <nav className="flex gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-3 py-1 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="hidden items-center gap-3 text-sm font-medium text-zinc-500 md:flex">
                <Link href="/login" className="transition hover:text-zinc-900">
                  登录
                </Link>
                <Link
                  href="/register"
                  className="rounded-full bg-zinc-900 px-4 py-1.5 text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900"
                >
                  注册
                </Link>
              </div>
            </div>
          </header>
          <main className="flex-1 bg-gradient-to-b from-white to-zinc-100/60 dark:from-zinc-950 dark:to-zinc-900/40">
            {children}
          </main>
          <footer className="border-t border-zinc-200/80 bg-white/80 px-6 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800/80 dark:bg-zinc-900/80">
            © {new Date().getFullYear()} Nordic Living · 灵感来自北欧慢生活
          </footer>
        </div>
      </body>
    </html>
  );
}
