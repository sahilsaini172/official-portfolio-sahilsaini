export default function BlogCard() {
  return (
    <article className="flex flex-col py-8 gap-2">
      <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
        Title
      </h3>
      <p className="line-clamp-2 font-medium lg:text-lg xl:text-xl 2xl:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        aliquam consectetur fugit dolores nemo voluptas? Quae, maxime!
        Voluptates esse, pariatur et delectus sapiente enim nostrum. Porro
        quisquam optio debitis nesciunt?
      </p>
    </article>
  );
}
