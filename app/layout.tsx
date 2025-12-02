import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  variable: "--font-roboto",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://official-portfolio-sahilsaini.vercel.app"),
  title: {
    default: "Sahil Saini - Frontend Developer & UI/UX Designer",
    template: "%s | Sahil Saini",
  },
  description:
    "Frontend developer specializing in React, Next.js, and modern web technologies with 2+ years of UI/UX design experience. Creator of algorithm visualization tools and interactive web applications.",
  keywords: [
    "Sahil Saini",
    "Frontend Developer",
    "UI/UX Designer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Rohtak",
    "JavaScript Developer",
    "TypeScript Developer",
    "Algorithm Visualizer",
    "Portfolio",
    "Web Designer India",
  ],
  authors: [{ name: "Sahil Saini" }],
  creator: "Sahil Saini",
  publisher: "Sahil Saini",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://official-portfolio-sahilsaini.vercel.app",
    siteName: "Sahil Saini Portfolio",
    title: "Sahil Saini - Frontend Developer & UI/UX Designer",
    description:
      "Frontend developer specializing in React, Next.js, and modern web technologies. Building interactive algorithm visualizers and educational web applications.",
    images: [
      {
        url: "/officialportfolio.png", // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: "Sahil Saini - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Saini - Frontend Developer & UI/UX Designer",
    description:
      "Frontend developer building interactive web apps with React, Next.js, and TypeScript. Creator of LeetChamp and algorithm visualization tools.",
    images: ["/twitter-image.png"], // Create this image (1200x600px)
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add after Google Search Console setup
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased flex flex-col **:ease-in **:duration-200`}
      >
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
