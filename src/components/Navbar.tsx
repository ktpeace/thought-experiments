import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-16 px-4 z-50 flex items-center bg-[#0d1012]">
      <Link href="/" className="opacity-20 flex items-center gap-2">
        <Image
          width="75"
          height="74"
          src="/media/thought-explorer.png"
          alt="icon of brain with compass"
          className="w-8 h-auto"
        />
        <span className="uppercase font-medium">
          Thought Experiment Explorer
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;