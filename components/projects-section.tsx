import { projects } from "@/lib/data";
import { Project } from "@/types/types";
import React from "react";

const ProjectsSection = () => {
    return (
        <div id="projects" className="mt-20">
            <h1 className="text-4xl font-bold mb-8">Projects</h1>
            <div className="flex flex-col gap-8">
                {projects.map((project: Project) => {
                    return (
                        <div key={project.id}>
                            <h1 className="text-xl italic hover:underline hover:cursor-pointer w-fit">
                                {project.name} 
                            </h1>
                            <p className="text-gray-500 text-md">
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
