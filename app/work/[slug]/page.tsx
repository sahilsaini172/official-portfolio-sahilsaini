"use client";
import { useParams } from "next/navigation";
import { projects } from "../../data/projects";
import { ArrowRight } from "lucide-react";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;

  console.log("URL slug:", slug); // Debug
  console.log(
    "Available slugs:",
    projects.map((p) => p.slug)
  ); // Debug

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <p className="text-gray-600">
            The project you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-8 p-8 sm:p-16 lg:p-24 xl:p-32 2xl:p-64 gap-4">
      <div className="flex items-center gap-4 justify-between">
        <div className="flex flex-col">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            {project.description}
          </p>
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            className="flex text-left shrink-0 grow group hover:text-primary items-center gap-2 mt-8 font-medium text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
          >
            <p>Live Demo</p>
            <ArrowRight size={16} className="group-hover:ml-1" />
          </a>
        )}
      </div>
      {project.about && (
        <div
          className="prose prose-lg max-w-4xl mt-8 list-inside list-disc"
          dangerouslySetInnerHTML={{ __html: project.about }}
        />
      )}
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          className="flex group hover:text-primary items-center gap-2 mt-8 font-medium text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
        >
          <p>Live Demo</p>
          <ArrowRight size={16} className="group-hover:ml-1" />
        </a>
      )}
    </div>
  );
}
