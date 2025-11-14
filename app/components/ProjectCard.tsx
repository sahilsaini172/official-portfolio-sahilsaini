import Image from "next/image";

interface ProjectCardProps {
  url: string;
  title: string;
  description: string;
  color?: string;
}

export default function ProjectCard({
  url,
  title,
  description,
  color = "#bde0fe",
}: ProjectCardProps) {
  return (
    <article className="flex flex-col">
      <div
        className={`w-full flex items-center justify-center aspect-video rounded-lg hover:scale-101 delay-75 duration-150 ease-in`}
        style={{ backgroundColor: color }}
      >
        <img
          src={`/` + url}
          className=" object-cover w-2/3 rounded-lg shadow-xl"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h2 className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-primary font-black">{title}</h2>
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl line-clamp-2 font-bold">{description}</p>
      </div>
    </article>
  );
}
