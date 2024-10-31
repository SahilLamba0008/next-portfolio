import Image from 'next/image'
import React, { Suspense } from 'react'
import HireMeButton from './hireme-button';
import Loading from '../app/loading';

const HeroSection = () => {
  return (
      <div className='flex flex-row-reverse items-center gap-10'>
          <div className='flex flex-col items-center justify-between mb-10'>
            <Suspense fallback={<p className='text-4xl text-white'>Loading Image.....</p>}>
              <div className="relative group w-[200px] h-[200px] cursor-pointer"> {/* Image Container */}
                  <div className="absolute cursor-pointer w-full h-full rounded-full transition-opacity duration-300 group-hover:ring-0">
                      <Image
                          src="/assets/file.jpg"
                          className="rounded-2xl object-cover ring-2 ring-indigo-700"
                          fill
                          alt="avatar_picture"
                          priority
                      />
                  </div>
                  <Image
                      src={"/toji 2.png"}
                      className="absolute rounded-2xl transition-opacity duration-300  ring-2 ring-indigo-700 opacity-0 group-hover:opacity-100 object-cover"
                      fill
                      alt="profile_picture"
                  />
              </div>
            </Suspense>
          </div>
          <div>
              <h1 className="font-bold text-4xl mb-2">
                  Hey, I&apos;m{" "}
                  <span className="text-indigo-500 stroke-slate-100">
                      Sahil
                  </span>{" "}
                  👋
              </h1>
              <p className="text-gray-500 text-md mb-4">
                  A Passionate{" "}
                  <span className="font-bold">full stack developer</span> with
                  almost a year of work experience. I love contribute in open
                  source projects just as a hobby. Currently I&apos;m working on{" "}
                  <span className="font-bold">portfolio maker</span> project
                  which will provide you your custom portfolio based on the
                  template we have and at the end you can have your own deployed
                  portfolio{" "}
                  <span className="font-bold">with custom domain.</span>
                  The idea behind this is to save time and increase productivity
                  also.
              </p>
              <HireMeButton />
          </div>
      </div>
  );
}

export default HeroSection