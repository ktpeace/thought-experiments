import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-12 px-4 z-50 flex justify-between items-center bg-white border-b dark:border-b-0 dark:bg-dusky-800">
      {/* Logo & "Thought Experiment Explorer"  */}
      <Link
        href="/"
        className="relative h-full dark:opacity-30 betterhover:hover:opacity-70 flex items-center gap-2"
      >
        <Image
          src="/media/logo.png"
          alt="icon of brain with compass"
          width={25}
          height={25}
          className="object-contain invert dark:invert-0"
        />
        <p className="hidden md:inline-block uppercase text-base">
          Thought Experiment Explorer
        </p>
      </Link>

      {/* Light/Dark & Hamburger */}
      <div className="flex gap-6 items-center opacity-100">
        <ThemeToggler />
        <NavbarMenu />
      </div>
    </nav>
  );
};

export default Navbar;
