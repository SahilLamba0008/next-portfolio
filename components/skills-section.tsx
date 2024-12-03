import { skills } from "@/lib/data";
import { Skill } from "@/types/types";
import React from "react";
// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
// } from "./ui/tooltip";
// import { TooltipArrow } from "@radix-ui/react-tooltip";
// import Image from "next/image";

const SkillsSection = () => {
    return (
        <div className="mt-20">
            <h1 className="mb-8 text-4xl font-bold">Skills</h1>
            <div className="relative flex flex-wrap justify-center gap-4">
                {skills.map((skill: Skill) => {
                    return (
                        <div
                            key={skill.id}
                            className="cursor-pointer rounded-xl border border-slate-600/40 bg-black px-4 py-2 font-bold"
                        >
                            {skill.name}
                            {/* <TooltipProvider delayDuration={0}>
                                <Tooltip>
                                    <TooltipTrigger className="text-slate-200 text-xl  lowercase">
                                        {skill.name}
                                    </TooltipTrigger>
                                    <TooltipContent
                                        className="h-[80px] w-[80px]"
                                        sideOffset={5}
                                    >
                                        {skill.image && (
                                            <Image
                                                fill
                                                src={skill.image}
                                                alt={skill.name}
                                            />
                                        )}
                                        <TooltipArrow className="TooltipArrow" />
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider> */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SkillsSection;
