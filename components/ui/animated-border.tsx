import React, { ReactNode } from 'react'

interface AnimatedBorderChild {
    children : ReactNode;
    className?: string;
} 
const AnimatedBorder: React.FunctionComponent<AnimatedBorderChild> = ({children, className,...props}) => {
  return (
    <div {...props} className={`relative inline-flex overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 focus:ring-offset-slate-50 w-fit ${className}`}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex items-center justify-center rounded-md bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl">
          {children}
        </span>
    </div>
  )
}

export default AnimatedBorder