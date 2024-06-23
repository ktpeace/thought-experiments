import Image from "next/image";
import Link from "next/link";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-16 px-4 z-50 flex justify-between items-center bg-dusky-800">
      <Link href="/" className="opacity-30 flex items-center gap-2">
        <Image
          width="75"
          height="74"
          src="/media/thought-explorer.png"
          alt="icon of brain with compass"
          className="w-8 h-auto"
        />
        <p className="uppercase text-[0.6rem] md:text-md flex flex-col md:flex-row md:gap-1.5">
          <span>Thought</span> <span>Experiment</span> <span>Explorer</span>
        </p>
      </Link>
      <NavbarMenu />
    </nav>
  );
};

export default Navbar;
