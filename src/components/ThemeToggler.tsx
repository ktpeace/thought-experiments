"use client";
import { useTheme } from "../context/ThemeContext";
import { MoonIcon, SunIcon } from "./icons/svgIcons";

export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="opacity-30 cursor-pointer betterhover:hover:opacity-70"
      title={`switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={toggleTheme}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
