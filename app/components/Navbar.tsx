"use client";
import Link from "next/link";
import DarkModeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky bg-transparent p-8 flex items-center justify-between">
      <div></div>
      <nav className="flex items-center gap-4 2xl:text-2xl 2xl:gap-16 *:2xl:font-semibold xl:text-xl xl:gap-7 *:xl:font-medium lg:text-lg lg:gap-6">
        <Link
          href={"/work"}
          className="hover:text-primary hover:scale-110 ease-in duration-100"
        >
          Work
        </Link>
        <Link
          href={"/about"}
          className="hover:text-primary hover:scale-110 ease-in duration-100"
        >
          About
        </Link>
        <Link
          href={"/blog"}
          className="hover:text-primary hover:scale-110 ease-in duration-100"
        >
          Blog
        </Link>
        <Link
          href={"/contact"}
          className="hover:text-primary hover:scale-110 ease-in duration-100"
        >
          Contact
        </Link>
        <div className="hover:text-primary hover:scale-110 ease-in duration-100 cursor-pointer">
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}
