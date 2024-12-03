import BlogPreview from "@/components/BlogPreview";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto mt-40 max-w-[1080px] px-4">
      <h1 className="mx-auto w-fit text-4xl font-bold">
        Published{" "}
        <span className="stroke-slate-100 text-indigo-500">Blogs</span>
      </h1>
      <div className="mt-20 text-sm font-extralight">
        <BlogPreview />
      </div>
    </div>
  );
};

export default page;
