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
          id="navitem"
          className="hover:text-primary hover:scale-110 w-fit"
        >
          Work
        </Link>
        <Link
          id="navitem"
          href={"/about"}
          className="hover:text-primary hover:scale-110 w-fit"
        >
          About
        </Link>
        <Link
          id="navitem"
          href={"/blog"}
          className="hover:text-primary hover:scale-110 "
        >
          Blog
        </Link>
        <Link
          id="navitem"
          href={"/contact"}
          className="hover:text-primary hover:scale-110 "
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
