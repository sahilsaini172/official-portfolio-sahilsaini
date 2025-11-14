"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change class after scrolling 100px
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col">
      <section className="p-8 mt-8">
        <div
          className={
            isScrolled
              ? "opacity-0"
              : "absolute w-[50vh] h-[60vh] -z-10 rounded-full bg-primary -right-30 -bottom-60 blur-3xl transition-all duration-500 ease-in-out"
          }
        ></div>
        <h1 className="text-5xl font-bold">
          I'm Sahil, a passionate designer & curious developer
        </h1>
        <p className="text-lg mt-8 ">
          Currently, I am crafting experiences at home with a strong focus on
          thoughtful and intuitive ideas.
        </p>

        <Link
          href="pages/about"
          className="flex items-center gap-2 mt-8 font-medium text-lg"
        >
          <p>More about me</p>
          <ArrowRight size={16} />
        </Link>
      </section>
      <section className="flex flex-col mt-8 p-8">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-xs text-primary font-black">A TINY GLIMSE</h2>
          <p className="font-bold text-2xl">Projects</p>
        </div>
        <div className="grid grid-cols-1 grid-rows-1">
          <article className="flex flex-col">
            <div className="w-full aspect-video bg-[#bde0fe] rounded-lg hover:scale-103 delay-75 duration-150 ease-in"></div>
            <div className="flex flex-col gap-2 mt-4">
              <h2 className="text-sm text-primary font-black">Title</h2>
              <p className="text-2xl line-clamp-2 font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                officiis nesciunt deserunt inventore quam provident, alias
                voluptas soluta reprehenderit quaerat natus. Harum odit vel
                reprehenderit? Sunt neque veritatis quisquam repudiandae?
              </p>
            </div>
            <Link
              href="pages/work"
              className="flex items-center gap-2 mt-10 font-medium text-lg hover:text-primary duration-150 ease-in"
            >
              <p>View Projects</p>
              <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>
      <section className="flex flex-col mt-8 p-8">
        <h2 className="text-xs text-primary font-black">WRITING</h2>
        <article className="flex flex-col py-8 gap-2">
          <h3 className="font-bold text-2xl">Title</h3>
          <p className="line-clamp-2 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            aliquam consectetur fugit dolores nemo voluptas? Quae, maxime!
            Voluptates esse, pariatur et delectus sapiente enim nostrum. Porro
            quisquam optio debitis nesciunt?
          </p>
        </article>
        <Link
          href="pages/work"
          className="flex items-center gap-2 font-medium text-lg hover:text-primary duration-150 ease-in"
        >
          <p>All Articles</p>
          <ArrowRight size={16} />
        </Link>
      </section>
      <footer className="flex flex-col mt-8 p-8">
        <h3 className="text-3xl font-bold">Thanks for dropping by</h3>
        <p>
          For enquiries, get in touch via{" "}
          <Link href={"pages/contact"}>contact</Link>
          <br />
          if you prefer, you can also say hello at{" "}
          <a href="mailto:sahilmanisaini8398@gmail.com">
            sahilmanisaini8398@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
