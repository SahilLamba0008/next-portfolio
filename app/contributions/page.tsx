import { contributions } from '@/lib/data';
import { Contributions } from '@/types/types';
import React from 'react'

const page = () => {
  return (
      <div className="mt-[10rem] max-w-[1080px] mx-auto px-4">
          <h1 className="font-bold text-4xl mx-auto w-fit mb-20">Github{" "}
            <span className="text-indigo-500 stroke-slate-100">
                Contributions
            </span>
          </h1>
          <div>
            {contributions.map((pr: Contributions, index: number)=>{
              return (
                <div className='flex' key={index}>
                  <div>pr icon</div>
                  <div>
                    <h1>{pr.prTitle}</h1>
                    <p>{pr.prDescription}</p>
                    <p>Repo Link</p>
                  </div>
                </div>
              )
            })}
          </div>
      </div>
  );
}

export default page