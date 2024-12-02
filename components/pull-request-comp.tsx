import React from "react";
import { Icons } from "./ui/icons";
import Link from "next/link";

interface PullRequestData {
    prTitle: string;
    prDescription: string;
    repoLink: string;
    link: string;
    approved?: boolean;
}

const PullReqestComp = ({ data }: { data: PullRequestData }) => {
    const { prTitle, prDescription, repoLink, link } = data;
    return (
        <div className="border border-slate-600/80 rounded-xl bg-gray-600/10 backdrop-blur-2xl flex justify-between px-4 font-bold z-10 py-6">
            <div className="flex items-center">
                <div className={`${data.approved === true ? 'text-green-500' : 'text-indigo-500' } flex items-center justify-center flex-[0.2]`}>
                    <Icons.MergeIcon size={100} />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-center gap-2">
                        <h1 className="text-2xl font-bold cursor-pointer hover:underline transition-hover delay-150">{prTitle}</h1>
                            <p className="mr-6 font-thin text-sm cursor-pointer">
                                <Link href={link} target="_blank">
                                    <Icons.github height={22} width={22} />
                                </Link>
                            </p>
                    </div>
                    <p className="font-extralight mt-4 text-gray-500 line-clamp-4">{prDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default PullReqestComp;
