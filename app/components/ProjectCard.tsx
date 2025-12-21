import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  slug: string; // Changed from href to slug for clarity
  title: string;
  url: string;
  description: string;
  color?: string;
  classname?: string;
}

export default function ProjectCard({
  url,
  title,
  description,
  color = "#bde0fe",
  classname = "w-2/3",
  slug,
}: ProjectCardProps) {
  return (
    <Link href={`/work/${slug}`} className="flex flex-col cursor-pointer">
      <div
        className={`w-full flex items-center justify-center aspect-video rounded-lg hover:scale-101 delay-75 duration-150 ease-in`}
        style={{ backgroundColor: color }}
      >
        <Image
          src={`/${url}.png`}
          alt={title}
          width={800}
          height={600}
          className={`object-cover ${classname} rounded-lg shadow-2xl`}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h2 className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-primary font-black">
          {title}
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl line-clamp-2 font-bold">
          {description}
        </p>
      </div>
    </Link>
  );
}
