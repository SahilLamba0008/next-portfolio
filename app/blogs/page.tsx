import BlogPreview from '@/components/BlogPreview'
import React from 'react'

const page = () => {
  return (
    <div className="mt-[10rem] max-w-[1080px] mx-auto px-4">
          <h1 className="font-bold text-4xl">Published{" "}
            <span className="text-indigo-500 stroke-slate-100">
                Blogs
            </span>
            <p className="font-extralight text-sm mt-20">
              <BlogPreview />
            </p>
          </h1>
      </div>
  )
}

export default page