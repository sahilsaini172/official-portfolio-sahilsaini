import { ArrowRight, Key } from "lucide-react";
import Link from "next/link";
import BlogCard from "./components/BlogCard";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <div className="flex flex-col ease-in duration-300 relative overflow-hidden">
      <div
        id="blob"
        className="absolute w-[40vh] h-[50vh] -z-3 rounded-full bg-blob-1 blur-3xl -right-30 top-30"
      ></div>
      <div
        id="blob"
        className="absolute w-[30vh] h-[20vh] -z-2 rounded-full bg-blob-2 blur-3xl right-20 top-50"
      ></div>
      <div
        id="blob"
        className="absolute w-[20vh] h-[30vh] -z-1 rounded-full bg-blob-3 blur-3xl top-50 right-30"
      ></div>
      <section className="p-8 mt-8 sm:p-16 lg:p-24 xl:p-32 2xl:p-64 lg:w-3/4 xl:w-2/3">
        <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-bold">
          I'm Sahil, a passionate designer & curious developer
        </h1>
        <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl lg:font-medium 2xl:font-semibold 2xl:leading-10 mt-8">
          Currently, I am crafting experiences at home with a strong focus on
          thoughtful and intuitive ideas.
        </p>

        <Link
          href="pages/about"
          className="flex items-center gap-2 mt-8 font-medium text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
        >
          <p>More about me</p>
          <ArrowRight size={16} />
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
        <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              url={project.slug}
              color={project.color}
            />
          ))}
        </div>
        <Link
          href="pages/work"
          className="flex items-center gap-2 mt-10 font-medium text-lg lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-primary duration-150 ease-in"
        >
          <p>View Projects</p>
          <ArrowRight size={16} />
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
          href="pages/work"
          className="flex items-center gap-2 font-medium text-lg lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-primary duration-150 ease-in"
        >
          <p>All Articles</p>
          <ArrowRight size={16} />
        </Link>
      </section>
      <footer className="flex flex-col mt-8 p-8 sm:p-16 lg:p-24 xl:p-32 2xl:p-64">
        <h3 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
          Thanks for dropping by
        </h3>
        <p className="lg:text-lg xl:text-xl 2xl:text-2xl">
          For enquiries, get in touch via{" "}
          <Link href={"pages/contact"}>contact</Link>
          <br />
          if you prefer, you can also say hello at{" "}
          <a
            className="hover:text-primary underline underline-offset-3 decoration-primary"
            href="mailto:sahilmanisaini8398@gmail.com"
          >
            sahilmanisaini8398@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
