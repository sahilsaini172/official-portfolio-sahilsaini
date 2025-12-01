interface BlogCardProps {
  title: string;
  description: string;
}

export default function BlogCard({ title, description }: BlogCardProps) {
  return (
    <article className="flex flex-col py-8 gap-2">
      <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
        {title}
      </h3>
      <p className="line-clamp-2 font-medium lg:text-lg xl:text-xl 2xl:text-2xl">
        {description}
      </p>
    </article>
  );
}
