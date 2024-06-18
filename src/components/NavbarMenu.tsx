"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

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
        className="opacity-30 p-5 block focus:outline-none"
        onClick={toggleMenu}
        aria-label="Open Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Menu */}
      <div
        id="menu"
        className={`${
          isOpen ? "block" : "hidden"
        } absolute z-10 top-11 right-8 p-2 shadow-lg rounded-lg bg-dusky-800`}
      >
        <ul>
          {linkItems.map((pageName) => {
            return (
              <li key={pageName}>
                <Link
                  href={`/${pageName.toLowerCase()}`}
                  className="block w-full h-full p-2 hover:bg-dusky-600 rounded"
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
