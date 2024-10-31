import { projects } from "@/lib/data";
import { Project } from "@/types/types";
import React from "react";
import { Icons } from "./ui/icons";
import Link from "next/link";

const ProjectsSection = () => {
    return (
        <div id="projects" className="mt-20">
            <h1 className="text-4xl font-bold mb-8">Projects</h1>
            <div className="flex flex-col gap-8">
                {projects.map((project: Project) => {
                    return (
                        <div key={project.id} className="border border-slate-600/80 rounded-xl bg-gray-600/10 backdrop-blur-2xl px-4 py-6">
                            <div className="flex items-center justify-between">
                                <p className="text-2xl font-bold hover:underline hover:cursor-pointer">{project.name}</p>
                                <div className="flex gap-4 mr-8">
                                    <Link href={project.RepoLink} target="_blank">
                                        <Icons.github height={24} width={24} className="cursor-pointer"/>
                                    </Link>
                                    <Link href={project.Link} target="_blank">
                                        <Icons.link height={24} width={24} className="cursor-pointer"/>
                                    </Link>
                                </div>
                            </div>
                            <p className="text-gray-500 text-md mt-4">
                                {project.description}
                            </p>
                            <div className="flex gap-2 max-w-[1200px] flex-wrap mt-4">
                                {project.skills.map(
                                    (skill: string, idx: number) => {
                                        return <span key={idx} className="border border-slate-600/80 rounded-full px-4 whitespace-nowrap">{skill}</span>;
                                    }
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectsSection;
