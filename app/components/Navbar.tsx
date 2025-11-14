"use client";
import { Moon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldBeDark = theme === "dark" || (!theme && prefersDark);

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };
  return (
    <header className="sticky bg-transparent p-8 flex items-center justify-between">
      <div></div>
      <nav className="flex items-center gap-4">
        <Link
          href={"pages/work"}
          className="hover:text-primary hover:scale-110 ease-in duration-100"
        >
          Work
        </Link>
        <Link
          href={"pages/about"}
          className="hover:text-primary hover:scale-110 ease-in duration-100"
        >
          About
        </Link>
        <Link
          href={"pages/blog"}
          className="hover:text-primary hover:scale-110 ease-in duration-100"
        >
          Blog
        </Link>
        <Link
          href={"pages/contact"}
          className="hover:text-primary hover:scale-110 ease-in duration-100"
        >
          Contact
        </Link>
        <div className="hover:text-primary hover:scale-110 ease-in duration-100 cursor-pointer">
          <Moon size={20} />
        </div>
      </nav>
    </header>
  );
}
