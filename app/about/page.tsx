import Image from "next/image";
import Footer from "../components/Footer";
export default function About() {
  return (
    <div className="flex flex-col mt-8 p-8 sm:p-16 lg:p-24 xl:p-32 2xl:p-64">
      <div className="max-w-4xl">
        <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-bold obje">
          Frontend Developer who cares about UX, performance, and detail.
        </h1>
        <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl lg:font-medium 2xl:font-semibold 2xl:leading-10 mt-8">
          Sahil Saini is a Frontend Developer with a UI/UX design background who
          builds responsive, accessible interfaces and smooth product
          experiences.
          <br />
          <br />
          He focuses on turning designs into well-structured components,
          maintaining high UI quality while keeping performance in mind.
          <br />
          <br />
          He’s currently building portfolio projects and looking for frontend
          opportunities where he can contribute to user-facing features from day
          one.
        </p>
        <Image
          src="/aboutImage.jpeg"
          width={738}
          alt="about me"
          height={1600}
          className="grayscale w-1/4 h-[300px] object-top object-cover rounded-lg mt-4"
        />
      </div>
      <Footer />
    </div>
  );
}
