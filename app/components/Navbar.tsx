"use client";

import Link from "next/link";
import DarkModeToggle from "./ThemeToggle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      gsap.from(itemsRef.current, {
        y: -100,
        opacity: 0,
        delay:0.4,
        stagger: 0.2,
        duration: 0.2,
        ease: "circ.in",
        clearProps: "all",
      });
    },
    { scope: navRef }
  );

  return (
    <header className="sticky top-0 p-8 flex z-100 justify-between">
      <div />

      <nav ref={navRef} className="flex gap-6 text-lg">
        {["Work", "About", "Blog", "Contact"].map((item, i) => (
          <div
            key={item}
            className="hover:text-primary hover:scale-104"
            ref={(el) => {
              if (el) itemsRef.current[i] = el;
            }}
          >
            <Link href={`/${item.toLowerCase()}`}>{item}</Link>
          </div>
        ))}

        <div
          ref={(el) => {
            if (el) itemsRef.current[4] = el;
          }}
        >
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}
