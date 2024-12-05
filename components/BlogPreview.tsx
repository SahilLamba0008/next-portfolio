"use client";
import { publications } from "@/lib/data";
import { Publication } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RevealOpacity from "./framer/RevealOpacity";

const BlogPreview = () => {
  return (
    <div>
      {publications.map((blog: Publication, idx: number) => {
        return (
          <RevealOpacity delay={0.1} key={idx}>
            <div className="flex max-sm:flex-col cursor-pointer gap-4 rounded-xl border border-slate-600/80 bg-gray-600/10 px-4 py-6 backdrop-blur-2xl">
              <div className="sm:flex-1">
                <Link href={blog.blogLink} target="_blank">
                  <h1 className="transition-hover line-clamp-3 cursor-pointer text-2xl font-bold delay-150 hover:underline">
                    {blog.blogTitle}
                  </h1>
                </Link>
                <div className="relative sm:flex-[0.5] sm:hidden">
                  <Image
                    src={blog.blogCover}
                    alt="blog cover"
                    height={300}
                    width={300}
                    className="rounded-md object-cover w-full h-40 mt-2 backdrop-blur-3xl"
                  />
                </div>
                <p className="mt-4 line-clamp-5 font-extralight text-gray-500">
                  {blog.blogDescription}
                </p>
              </div>
              <div className="relative sm:flex-[0.5] max-sm:hidden">
                <Image
                  src={blog.blogCover}
                  alt="blog cover"
                  fill
                  className="rounded-md object-cover backdrop-blur-3xl"
                />
              </div>
            </div>
          </RevealOpacity>
        );
      })}
    </div>
  );
};

export default BlogPreview;
