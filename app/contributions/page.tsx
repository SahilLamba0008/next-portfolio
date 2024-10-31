import PullReqestComp from '@/components/pull-request-comp';
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
          <div className='flex flex-col gap-6'>
            {contributions.map((pr: Contributions, index: number)=>{
              return (
                <PullReqestComp data={pr} key={index}/>
              )
            })}
          </div>
      </div>
  );
}

export default page