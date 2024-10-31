"use client";
import React from "react";
import { navLinks, socialLinks } from "@/lib/data";
import { NavLink, SocialLink } from "@/types/types";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context-provider";
import Link from "next/link";

const Navbar = () => {
    const { activeSection, setActiveSection } = useActiveSectionContext();

    const handleSocialLinkClick = (url: string) => {
        setTimeout(() => {
            window.open(url, "_blank");
        }, 400); // 0.4s intended delay
    };

    return (
        <div className="fixed top-8 -translate-x-1/2 left-1/2 border border-slate-600/80 rounded-xl bg-gray-600/10 backdrop-blur-2xl flex justify-between px-2 py-2 font-bold z-10">
            <ul className="flex gap-4 items-center mr-20">
                {navLinks.map((link: NavLink) => {
                    return (
                        <Link href={link.link} key={link.id}>
                            <li
                                className={clsx(
                                    "cursor-pointer hover:text-gray-300/80 transition-all relative p-2",
                                    {
                                        "text-indigo-500 hover:text-indigo-500":
                                            activeSection === link.name,
                                    }
                                )}
                                onClick={() => setActiveSection(link.name)}
                            >
                                {link.name}
                                {link.name === activeSection && (
                                    <motion.span
                                        className="absolute inset-0 rounded-xl -z-10 bg-slate-700/25 h-full"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </li>
                        </Link>
                    );
                })}
            </ul>
            <ul className="flex gap-4 items-center">
                {socialLinks.map((link: SocialLink, index: number) => {
                    return (
                        <li
                            key={index}
                            className={clsx(
                                "cursor-pointer hover:text-gray-300/80 transition-all relative p-2 lowercase font-extralight text-sm",
                                {
                                    "text-gray-100 hover:text-gray-100":
                                        activeSection === link.name,
                                }
                            )}
                            onClick={() => {
                                setActiveSection(link.name);
                                handleSocialLinkClick(link.link);
                            }}
                        >
                            <link.icon
                                color={
                                    activeSection == link.name
                                        ? "rgba(99, 102, 241, 1)"
                                        : "white"
                                }
                                height={22}
                                width={22}
                            />
                            {link.name === activeSection && (
                                <motion.span
                                    className="absolute inset-0 rounded-xl -z-10 bg-slate-700/25 h-full"
                                    layoutId="activeSection"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30,
                                    }}
                                ></motion.span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navbar;
