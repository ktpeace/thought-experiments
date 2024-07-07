import type { Metadata } from "next";
import { Cardo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";

// Google Font
const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://thought-experiment-explorer.vercel.app"),
  title: "Thought Experiment Explorer",
  description: "Explore & vote on famous philosophical thought experiments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="min-h-screen dark:bg-dusky-700 dark:text-neutral-300"
    >
      <ThemeProvider>
        <body className={`${cardo.className} `}>
          <header>
            <Navbar />
          </header>

          <main className="min-h-screen-safe mt-12 flex flex-col items-center justify-between px-8 xl:px-24 dark:text-neutral-300">
            {children}
          </main>
        </body>
      </ThemeProvider>
    </html>
  );
}
