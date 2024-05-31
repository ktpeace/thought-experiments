import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Google Font
const cormorant = Cormorant({ subsets: ["latin"] });

// Metadata
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
      <body className={`${cormorant.className}`}>
        <header>
          <Navbar />
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between px-12 md:px-24 text-neutral-300">
          {children}
        </main>
      </body>
    </html>
  );
}
