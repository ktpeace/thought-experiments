import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[65vh] flex flex-col justify-center items-center gap-4">
      <h2 className="text-xl">Not Found</h2>
      <p>The requested page does not exist.</p>
      <Link
        href="/"
        className="p-2 border rounded border-black dark:border-white betterhover:hover:bg-neutral-200 dark:betterhover:hover:bg-dusky-400"
      >
        Return Home
      </Link>
    </div>
  );
}
