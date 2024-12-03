"use client"
import ContributionsSection from "@/components/contributions-section";
import RevealY from "@/components/framer/RevealY";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto mt-40 max-w-[1080px] px-4">
      <RevealY delay={0.05}>
        <h1 className="mx-auto mb-20 w-fit text-4xl font-bold">
          Github{" "}
          <span className="stroke-slate-100 text-indigo-500">
            Contributions
          </span>
        </h1>
      </RevealY>
      <div>
        <ContributionsSection />
      </div>
    </div>
  );
};

export default page;
