import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thought Experiment Explorer",
  description: "Explore & vote on famous philosophical thought experiments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={inter.className}>
        <header>
          <nav className="fixed top-0 w-full z-50 py-3 px-6 bg-[#0d1012] border border-[#1b1b1b]">
            <Link href="/" className="opacity-20 flex items-center gap-2">
              <Image
                width="75"
                height="74"
                src="/images/thought-explorer.png"
                alt="icon of brain with compass"
                className="w-8 h-auto"
              />
              <span className="uppercase font-medium">
                Thought Experiment Explorer
              </span>
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
