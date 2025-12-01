import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <div className="flex flex-col ease-in duration-300 relative overflow-hidden">
      <section className="flex flex-col mt-8 p-8 sm:p-16 lg:p-24 xl:p-32 2xl:p-64">
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
      </section>
    </div>
  );
}
