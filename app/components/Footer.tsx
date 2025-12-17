import Link from "next/link";

export default function Footer() {
  return (
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
          className="hover:text-primary underline underline-offset-auto decoration-primary"
          href="mailto:sahilmanisaini8398@gmail.com"
        >
          sahilmanisaini8398@gmail.com
        </a>
      </p>
      <div className=" flex gap-8 mt-16 xl:text-lg 2xl:text-xl *:hover:text-primary">
        <a href="https://github.com/sahilsaini172" target="_blank">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/sahil-saini-866646318/"
          target="_blank"
        >
          Linkedin
        </a>
      </div>
    </footer>
  );
}
