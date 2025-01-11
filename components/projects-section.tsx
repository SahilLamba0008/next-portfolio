"use client";

import { projects } from "@/lib/data";
import { Project } from "@/types/types";
import React, { useState } from "react";
import { Icons } from "./ui/icons";
import Link from "next/link";
import RevealY from "./framer/RevealY";

const ProjectsSection = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleCollapse = () => {
    setVisibleCount(4);
  };

  return (
    <div id="projects" className="mt-20">
      <h1 className="mb-8 text-4xl font-bold">Projects</h1>
      <div className="flex flex-col gap-8">
        {projects.slice(0, visibleCount).map((project: Project) => {
          return (
            <RevealY key={project.id} delay={0.1}>
              <div className="rounded-xl border border-slate-600/80 bg-gray-600/10 px-4 py-6 backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold hover:cursor-pointer hover:underline">
                    {project.name}
                  </p>
                  <div className="mr-8 flex gap-4">
                    <Link href={project.RepoLink} target="_blank">
                      <Icons.github
                        height={24}
                        width={24}
                        className="cursor-pointer"
                      />
                    </Link>
                    <Link href={project.VideoLink || ""} target="_blank">
                      <Icons.link
                        height={24}
                        width={24}
                        className="cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
                <p className="text-md mt-4 text-gray-500">
                  {project.description}
                </p>
                <div className="mt-4 flex max-w-[1200px] flex-wrap gap-2">
                  {project.skills.map((skill: string, idx: number) => {
                    return (
                      <span
                        key={idx}
                        className="whitespace-nowrap rounded-full border border-slate-600/80 px-4"
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </RevealY>
          );
        })}
      </div>
      {visibleCount < projects.length ? (
        <div className="mt-8 text-center">
          <button
            onClick={handleLoadMore}
            className="text-md cursor-pointer text-white underline backdrop-blur-2xl max-sm:text-sm"
          >
            <Icons.ChevronDown />
          </button>
        </div>
      ) : (
        <div className="mt-8 text-center">
          <button
            onClick={handleCollapse}
            className="text-md cursor-pointer text-white underline backdrop-blur-2xl max-sm:text-sm"
          >
            <Icons.ChevronUp />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
