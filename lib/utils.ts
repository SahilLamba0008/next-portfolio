import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateTimeWorked(start: Date, end: Date | string): number{
  const startDate = new Date(start);
  const endDate = typeof end === "string" && end === "current" ? new Date() : new Date(end);
  
  const timeDifference = endDate.getTime() - startDate.getTime();
  const totalMonths = timeDifference / (1000 * 60 * 60 * 24 * 30.44); 

  return totalMonths % 1 > 0.5 ? Math.ceil(totalMonths) : Math.floor(totalMonths);
}