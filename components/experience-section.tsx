import { experienceData } from '@/lib/data';
import { calculateTimeWorked } from '@/lib/utils';
import { Experience } from '@/types/types';
import Image from 'next/image';
import React from 'react';

const formatTimeWorked = (startDate: Date, endDate: Date | string) => {
    const monthsWorked = calculateTimeWorked(startDate, endDate);
    const isYear = monthsWorked >= 12;
    const years = isYear ? Math.floor(monthsWorked / 12) : 0;
    const months = isYear ? monthsWorked % 12 : monthsWorked;

    return {
        time: isYear ? years : months,
        unit: isYear
            ? years === 1
                ? 'Year'
                : 'Years'
            : months === 1
            ? 'Month'
            : 'Months',
    };
};
export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long', // Use 'short' for abbreviated month names
    year: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

const ExperienceSection = () => {
    return (
        <div className='mt-20'>
            <h1 className="text-4xl font-bold mb-8">Experience</h1>
            <div className="flex justify-between gap-4">
                {experienceData.map(
                    (
                        {
                            companyName,
                            companyLogo,
                            startDate,
                            endDate,
                            positions,
                        }: Experience,
                        idx: number
                    ) => {
                        const { time, unit } = formatTimeWorked(
                            startDate,
                            endDate
                        );
                        const startDateFormatted = formatDate(
                            new Date(startDate)
                        );

                        return (
                            <div key={idx}>
                                <div className="flex gap-4">
                                    <div className="h-[100px] w-[100px] rounded-xl bg-slate-600/20 relative overflow-hidden">
                                        {companyLogo && (
                                            <Image
                                                src={companyLogo}
                                                alt={companyName}
                                                fill
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-bold">
                                            {companyName}
                                        </h1>
                                        <p className="text-slate-500">
                                            {positions[positions.length - 1]} -{" "}
                                            {endDate == "current" ? (
                                                <>
                                                    {time} {unit}{" "}
                                                    <span className="italic text-slate-300">
                                                        ( Currently Working )
                                                    </span>
                                                </>
                                            ) : (
                                                `${time} ${unit}`
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default ExperienceSection;
