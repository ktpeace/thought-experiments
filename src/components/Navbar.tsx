import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 py-3 px-6 bg-[#0d1012]">
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
  );
};

export default Navbar;
