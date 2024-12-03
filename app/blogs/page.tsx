"use client"
import BlogPreview from "@/components/BlogPreview";
import RevealY from "@/components/framer/RevealY";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto mt-40 max-w-[1080px] px-4">
      <RevealY delay={0.05}>
        <h1 className="mx-auto w-fit text-4xl font-bold">
          Published{" "}
          <span className="stroke-slate-100 text-indigo-500">Blogs</span>
        </h1>
      </RevealY>
      <div className="mt-20 text-sm font-extralight">
        <BlogPreview />
      </div>
    </div>
  );
};

export default page;
