import PullReqestComp from "@/components/pull-request-comp";
import { contributions } from "@/lib/data";
import { Contribution } from "@/types/types";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto mt-40 max-w-[1080px] px-4">
      <h1 className="mx-auto mb-20 w-fit text-4xl font-bold">
        Github{" "}
        <span className="stroke-slate-100 text-indigo-500">Contributions</span>
      </h1>
      <div className="flex flex-col gap-6">
        {contributions.map((pr: Contribution, index: number) => {
          return <PullReqestComp data={pr} key={index} />;
        })}
      </div>
    </div>
  );
};

export default page;
