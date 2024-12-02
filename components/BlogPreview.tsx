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
            className="border border-slate-600/80 rounded-xl bg-gray-600/10 backdrop-blur-2xl px-4 py-6 flex gap-4 cursor-pointer"
            key={idx}
          >
            <div>
              <Link href={blog.blogLink} target="_blank">
                <h1 className="text-2xl font-bold cursor-pointer hover:underline transition-hover delay-150">
                  {blog.blogTitle}
                </h1>
              </Link>
              <p className="font-extralight mt-4 text-gray-500 line-clamp-5">
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
