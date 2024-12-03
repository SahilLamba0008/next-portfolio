import { experienceData } from "@/lib/data";
import { calculateTimeWorked } from "@/lib/utils";
import { Experience } from "@/types/types";
import Image from "next/image";
import React from "react";

const formatTimeWorked = (startDate: Date, endDate: Date | string) => {
    const monthsWorked = calculateTimeWorked(startDate, endDate);
    const isYear = monthsWorked >= 12;
    const years = isYear ? Math.floor(monthsWorked / 12) : 0;
    const months = isYear ? monthsWorked % 12 : monthsWorked;

    return {
        time: isYear ? years : months,
        unit: isYear
            ? years === 1
                ? "Year"
                : "Years"
            : months === 1
              ? "Month"
              : "Months",
    };
};

export function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
}

const ExperienceSection = () => {
    return (
        <div className="mt-20">
            <h1 className="mb-8 text-4xl font-bold">Experience</h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
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
                        const endDateFormatted =
                            endDate === "current"
                                ? "Present"
                                : formatDate(new Date(endDate));

                        return (
                            <li key={idx} className="mb-10 ml-6">
                                <span
                                    className={`absolute -left-3 flex size-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-white dark:bg-gray-700 ${idx == 0 ? "dark:ring-gray-900" : "dark:ring-gray-900"}`}
                                >
                                    <Image
                                        src={companyLogo || "/default-logo.png"}
                                        alt={`${companyName} logo`}
                                        width={30}
                                        height={30}
                                        className="rounded-full"
                                    />
                                </span>
                                <div className="ml-2 rounded-lg bg-gray-600/10 px-4 py-8 backdrop-blur-2xl">
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        {startDateFormatted} -{" "}
                                        {endDateFormatted}
                                    </time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {companyName}
                                    </h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        {positions[positions.length - 1]} -{" "}
                                        {endDate === "current" ? (
                                            <>
                                                {time} {unit}{" "}
                                                <span className="italic text-slate-300">
                                                    (Currently Working)
                                                </span>
                                            </>
                                        ) : (
                                            `${time} ${unit}`
                                        )}
                                    </p>
                                </div>
                            </li>
                        );
                    }
                )}
            </ol>
        </div>
    );
};

export default ExperienceSection;
