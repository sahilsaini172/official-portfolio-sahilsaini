"use client";
import { useParams } from "next/navigation";
import { projects } from "../../data/projects";

export default function ProjectPage() {
  const params = useParams();
  const { slug } = params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg mb-4">{project.description}</p>
    </div>
  );
}
