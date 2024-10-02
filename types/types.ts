import { LucideIcon, LucideProps } from "lucide-react";
import { JSXElementConstructor, ReactNode } from "react";

export type SocialLink = {
    name: string;
    link: string;
    icon?: any;
    iconUrl?: any;
};

export type NavLink = {
    id: string;
    name: string;
    link: string;
};

export type Skill = {
    id: string;
    name: string;
    link?: string;
    image?: string;
};

export type Project = {
    id: string;
    name: string;
    description: string;
    skills: string[];
    image: string;
    coverImage: string;
    Link: string;
    RepoLink: string;
    LiveLink?: string;
    VideoLink?: string;
    keyPoints: string[];
    skillsSvg: string[];
    even: boolean;
}

export type Experience = {
    companyName: string;
    companyLogo?: string;
    positions: string[];
    startDate: Date;
    endDate: Date | string;
    contributions: string[];
    skills: string[];
}