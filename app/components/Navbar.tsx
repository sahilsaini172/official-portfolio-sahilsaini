"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-transparent p-8 flex items-center justify-between">
      <div></div>
      <nav className="flex items-center gap-4">
        <Link
          href={"/work"}
          className="hover:text-primary ease-in duration-100"
        >
          Work
        </Link>
        <Link
          href={"/about"}
          className="hover:text-primary ease-in duration-100"
        >
          About
        </Link>
        <Link
          href={"/blog"}
          className="hover:text-primary ease-in duration-100"
        >
          Blog
        </Link>
        <Link
          href={"/contact"}
          className="hover:text-primary ease-in duration-100"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
