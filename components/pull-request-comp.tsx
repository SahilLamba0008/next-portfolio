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

const PullRequestComp = ({ data }: { data: PullRequestData }) => {
  const { prTitle, prDescription, repoLink, link } = data;
  return (
    <div className="z-10 rounded-xl border border-slate-600/80 bg-gray-600/10 px-4 py-6 font-bold backdrop-blur-2xl">
      <div className="flex items-center">
        <div
          className={`${data.approved === true ? "text-green-500" : "text-indigo-500"} flex flex-[0.2] items-center justify-center max-sm:hidden`}
        >
          <Icons.MergeIcon size={100} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <Link href={link} target="_blank">
              <h1 className="transition-hover cursor-pointer text-2xl font-bold delay-150 hover:underline line-clamp-3">
                {prTitle}
              </h1>
            </Link>
            <div className="mr-6 cursor-pointer text-sm font-thin max-sm:flex max-sm:gap-2">
              <div
                className={`${data.approved === true ? "text-green-500" : "text-indigo-500"} sm:hidden`}
              >
                <Icons.MergeIcon size={22} />
              </div>
              <Link href={repoLink} target="_blank">
                <Icons.github height={22} width={22} />
              </Link>
            </div>
          </div>
          <p className="mt-4 line-clamp-4 font-extralight text-gray-500">
            {prDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PullRequestComp;
