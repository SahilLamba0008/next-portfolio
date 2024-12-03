import { publications } from "@/lib/data";
import { Publication } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPreview = () => {
  return (
    <div>
      {publications.map((blog: Publication, idx: number) => {
        return (
          <div
            className="flex cursor-pointer gap-4 rounded-xl border border-slate-600/80 bg-gray-600/10 px-4 py-6 backdrop-blur-2xl"
            key={idx}
          >
            <div>
              <Link href={blog.blogLink} target="_blank">
                <h1 className="transition-hover cursor-pointer text-2xl font-bold delay-150 hover:underline">
                  {blog.blogTitle}
                </h1>
              </Link>
              <p className="mt-4 line-clamp-5 font-extralight text-gray-500">
                {blog.blogDescription}
              </p>
            </div>
            <Image
              src={blog.blogCover}
              alt="blog cover"
              height={300}
              width={300}
              className="rounded-md backdrop-blur-3xl"
            />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPreview;
