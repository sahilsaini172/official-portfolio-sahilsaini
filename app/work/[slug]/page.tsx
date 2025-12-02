"use client";
import { useParams } from "next/navigation";
import { projects } from "../../data/projects";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string; // Type assertion for single dynamic segment

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
      <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4">
        {project.title}
      </h1>
      <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        {project.description}
      </p>
    </div>
  );
}
