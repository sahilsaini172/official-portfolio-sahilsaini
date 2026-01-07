"use client";
import {ArrowRight} from "lucide-react";
import Link from "next/link";
import BlogCard from "./components/BlogCard";
import ProjectCard from "./components/ProjectCard";
import {projects} from "./data/projects";
import Footer from "./components/Footer";
import {useRef, useState} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const aboutSnippetRef = useRef<HTMLImageElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        aboutSnippetRef.current,
        {scale: 1, rotate: 7, delay: 0.2, x: 0, opacity: 0},
        {
          x: 200,
          opacity: 1,
          duration: 0.1,
          ease: "slow",
        }
      );
    },
    {scope: container, dependencies: [showAbout]}
  );

  function handleAboutEnter() {
    hoverTimeout.current = setTimeout(() => {
      setShowAbout(true);
    }, 500);
  }

  function handleAboutLeave() {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setShowAbout(false);
  }

  return (
    <div
      ref={container}
      className="flex flex-col ease-in duration-300 relative overflow-hidden"
    >
      <div
        className="absolute blob w-[40vh] h-[50vh] -z-3 rounded-full bg-blob-1 blur-3xl -right-30 top-30"></div>
      <div className="absolute blob w-[30vh] h-[20vh] -z-2 rounded-full bg-blob-2 blur-3xl right-20 top-50"></div>
      <div className="absolute blob w-[20vh] h-[30vh] -z-1 rounded-full bg-blob-3 blur-3xl top-50 right-30"></div>
      <section className="p-8 mt-8 sm:p-16 lg:p-24 xl:p-32 2xl:p-64 lg:w-3/4 xl:w-2/3">
        <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-bold">
          I'm Sahil, a passionate designer & curious developer
        </h1>
        <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl lg:font-medium 2xl:font-semibold 2xl:leading-10 mt-8">
          Currently, I am crafting experiences at home with a strong focus on
          thoughtful and intuitive ideas.
        </p>

        <Link
          href="./about"
          onMouseEnter={handleAboutEnter}
          onMouseLeave={handleAboutLeave}
          className="flex relative group hover:text-primary items-center gap-2 mt-8 font-medium text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
        >
          <p>More about me</p>
          <ArrowRight size={16} className="group-hover:ml-1"/>
          {showAbout ? (
            <img
              ref={aboutSnippetRef}
              src={"/aboutsnippet.jpeg"}
              className={`w-60 absolute rounded-lg shadow-lg shadow-white/25 duration-200 transition-transform ease-in border-2 border-neutral-700`}
            />
          ) : null}
        </Link>
      </section>
      <section className="flex flex-col mt-8 p-8 sm:p-16 lg:p-24 xl:p-32 2xl:p-64">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-primary font-black">
            A TINY GLIMSE
          </h2>
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl ">
            Projects
          </p>
        </div>
        <div
          id="work"
          className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16"
        >
          {projects.slice(0, 4).map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              description={project.description}
              url={project.slug}
              color={project.color}
              classname="box"
            />
          ))}
        </div>
        <Link
          href="/work"
          className="flex group items-center gap-2 mt-10 font-medium text-lg lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-primary duration-150 ease-in"
        >
          <p>View Projects</p>
          <ArrowRight size={16} className="group-hover:ml-1"/>
        </Link>
      </section>
      <section className="flex flex-col mt-8 p-8 sm:p-16 lg:p-24 xl:p-32 2xl:p-64 xl:w-2/3">
        <h2 className="text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-primary font-black">
          WRITING
        </h2>
        {projects.slice(0, 3).map((blog) => (
          <BlogCard
            key={blog.slug}
            title={blog.title}
            description={blog.description}
          />
        ))}
        <Link
          href="/blog"
          className="flex group items-center gap-2 font-medium text-lg lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-primary duration-150 ease-in"
        >
          <p>All Articles</p>
          <ArrowRight size={16} className="group-hover:ml-1"/>
        </Link>
      </section>
      <Footer/>
    </div>
  );
}
