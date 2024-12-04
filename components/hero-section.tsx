"use client"
import Image from "next/image";
import React from "react";
import HireMeButton from "./hireme-button";
import RevealOpacity from "./framer/RevealOpacity";
import RevealY from "./framer/RevealY";

const HeroSection = () => {
  return (
    <RevealOpacity delay={0.1}>
      <div className="flex flex-row-reverse items-center gap-10">
        <div className="mb-10 flex flex-col items-center justify-between">
          <RevealY delay={0.1} direction="from-top" className="p-2">
            <div className="group relative size-[200px] cursor-pointer">
              {" "}
              {/* Image Container */}
              <div className="absolute size-full cursor-pointer rounded-full transition-opacity duration-300 group-hover:ring-0">
                <Image
                  src="/assets/file.jpg"
                  className="rounded-2xl object-cover ring-4 ring-indigo-700"
                  fill
                  alt="avatar_picture"
                  priority
                />
              </div>
              <Image
                src={"/toji 2.png"}
                className="absolute rounded-2xl object-cover opacity-0  ring-4 ring-indigo-700 transition-opacity duration-300 group-hover:opacity-100"
                fill
                alt="profile_picture"
              />
            </div>
          </RevealY>
        </div>
        <div>
          <h1 className="mb-2 text-4xl font-bold">
            Hey, I&apos;m{" "}
            <span className="stroke-slate-100 text-indigo-500">Sahil</span> 👋
          </h1>
          <p className="text-md mb-4 text-gray-500">
            A Passionate <span className="font-bold">full stack developer</span>{" "}
            with almost a year of work experience. I love contribute in open
            source projects just as a hobby. Currently I&apos;m working on{" "}
            <span className="font-bold">portfolio maker</span> project which
            will provide you your custom portfolio based on the template we have
            and at the end you can have your own deployed portfolio{" "}
            <span className="font-bold">with custom domain.</span>
            The idea behind this is to save time and increase productivity also.
          </p>
          <HireMeButton />
        </div>
      </div>
    </RevealOpacity>
  );
};

export default HeroSection;
