"use client"
import React from 'react'
import PullRequestComp from "@/components/pull-request-comp";
import { contributions } from "@/lib/data";
import { Contribution } from "@/types/types";
import RevealOpacity from './framer/RevealOpacity';

const ContributionsSection = () => {
  return (
    <div className="flex flex-col gap-6">
        {contributions.map((pr: Contribution, index: number) => {
          return (
            <RevealOpacity delay={index * 0.1} key={index}>
              <PullRequestComp data={pr} />
            </RevealOpacity>
          )
        })}
    </div>
  )
}

export default ContributionsSection