"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Hamburger } from "./icons/svgIcons";

const NavbarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkItems = ["Experiments", "About", "More"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu on click outside it
  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      try {
        const target = event?.target as HTMLElement;
        const menuBtn = document.getElementById("menu-btn");
        const menu = document.getElementById("menu");

        if (!menuBtn?.contains(target) && !menu?.contains(target)) {
          setIsOpen(false);
        }
      } catch (err) {
        console.error("Error closing menu on outside click:", err);
      }
    };

    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <div>
      {/* Hamburger Icon */}
      <button
        id="menu-btn"
        className="dark:opacity-30 block focus:outline-none"
        onClick={toggleMenu}
        aria-label="Open Menu"
      >
        <Hamburger />
      </button>

      {/* Menu */}
      <div
        id="menu"
        className={`${
          isOpen ? "block" : "hidden"
        } absolute z-10 top-11 right-2 p-2 shadow-lg rounded-lg dark:bg-dusky-800`}
      >
        <ul>
          {linkItems.map((pageName) => {
            return (
              <li key={pageName}>
                <Link
                  href={`/${pageName.toLowerCase()}`}
                  className="block w-full h-full p-2 dark:betterhover:hover:bg-dusky-600 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {pageName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavbarMenu;
