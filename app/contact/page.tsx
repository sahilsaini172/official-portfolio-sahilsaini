"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col mt-8 p-8 sm:p-16 lg:p-24 xl:p-32 2xl:p-64">
      <div className="max-w-4xl">
        <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-bold">
          Get in touch
        </h1>

        <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl lg:font-medium 2xl:font-semibold 2xl:leading-10 mt-8">
          Take the next step and we will create something great.
        </p>
        <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl lg:font-medium 2xl:font-semibold 2xl:leading-10">
          If you prefer, you can also just send me an{" "}
          <a
            href="mailto:sahilmanisaini8398@gmail.com"
            className="underline hover:text-primary"
          >
            e-mail
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="block text-xl">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full bg-foreground/15 border placeholder:text-secondary/50 border-foreground/25 rounded-lg px-6 py-4 text-secondary text-lg focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="block text-xl">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="w-full bg-foreground/15 placeholder:text-secondary/50 border border-foreground/25 rounded-lg px-6 py-4 text-secondary text-lg focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="block text-xl ">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={8}
              className="w-full bg-foreground/15 border placeholder:text-secondary/50 border-foreground/25 rounded-lg px-6 py-4 text-secondary text-lg focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-primary hover:bg-primary/75 text-white font-bold text-xl px-12 py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "SENDING..." : "SEND"}
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-400 text-lg">
              Message sent successfully! ✓
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-lg">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
