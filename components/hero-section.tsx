import Image from 'next/image'
import React from 'react'
import HireMeButton from './hireme-button';

const HeroSection = () => {
  return (
      <div>
          <div className='flex items-center justify-between mb-10'>
              <div className="relative group w-[200px] h-[200px] cursor-pointer">
                  <div className="absolute cursor-pointer w-full h-full rounded-full transition-opacity duration-300 group-hover:ring-0">
                      <Image
                          src="/assets/toji.png"
                          className="rounded-full object-cover ring-2 ring-indigo-700"
                          fill
                          alt="avatar_picture"
                      />
                  </div>
                  <Image
                      src={"/toji 2.png"}
                      className="absolute rounded-full transition-opacity duration-300  ring-2 ring-indigo-700 opacity-0 group-hover:opacity-100 object-cover"
                      fill
                      alt="profile_picture"
                  />
              </div>
              {/* <div className="mr-10 flex flex-col gap-2"> */}
                {/* <AnimatedBorder>
                    <button className="h-10 flex items-center gap-4 whitespace-nowrap cursor-pointer p-4">
                        Hire Me <Handshake size={20} />
                    </button>
                </AnimatedBorder> */}
                <HireMeButton />
              {/* </div> */}
          </div>
          <div>
              <h1 className="font-bold text-4xl">
                  Hey, I&apos;m{" "}
                  <span className="text-indigo-500 stroke-slate-100">
                      Sahil
                  </span>{" "}
                  👋
              </h1>
              <p className="text-gray-500 text-md">
                  A Passionate{" "}
                  <span className="text-white">full stack developer</span> with
                  almost a year of work experience. I love contribute in open
                  source projects just as a hobby. Currently I&apos;m working on{" "}
                  <span className="text-white">portfolio maker</span> project
                  which will provide you your custom portfolio based on the
                  template we have and at the end you can have your own deployed
                  portfolio{" "}
                  <span className="text-white">with custom domain.</span>
                  The idea behind this is to save time and increase productivity
                  also.
              </p>
          </div>
      </div>
  );
}

export default HeroSection