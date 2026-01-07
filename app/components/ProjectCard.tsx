"use client";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef, useState} from "react";

gsap.registerPlugin(useGSAP);

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
    const containerRef = useRef(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    const {contextSafe} = useGSAP({scope: containerRef});

    const handleMouseEnter = contextSafe(() => {
        if (!imageRef.current) return;

        gsap.to(imageRef.current, {
            scale: 1.2,
            y: -40,
            duration: 0.1,
            border: "1px solid white",
        });
    });

    const handleMouseLeave = contextSafe(() => {
        if (!imageRef.current) return;

        gsap.to(containerRef.current, {
            duration: 0.2,
            border: "0px solid white",
        });

        gsap.to(imageRef.current, {
            scale: 1,
            y: 0,
            duration: 0.2,
            border: "0px solid white",
        });
    });

    return (
        <Link href={`/work/${slug}`} className="flex flex-col cursor-pointer">
            <div
                ref={containerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`w-full flex items-center justify-center aspect-video rounded-lg ease-in`}
                style={{backgroundColor: color}}
            >
                <Image
                    ref={imageRef}
                    src={`/${url}.png`}
                    alt={title}
                    width={800}
                    height={600}
                    className={`object-cover ${classname} rounded-lg shadow-2xl w-2/3`}
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
