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
            const route = window.location.pathname;
            console.log(route.substring(1))
            setActiveSection((route === "/") ? "home" : route.substring(1));    // updating active state after animation is complete
        }, 400); // 0.4s intended delay
    };

    return (
        <div className="fixed left-1/2 top-8 z-10 flex -translate-x-1/2 justify-between rounded-xl border border-slate-600/80 bg-gray-600/10 p-2 font-bold backdrop-blur-2xl">
            <ul className="mr-20 flex items-center gap-4">
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
                                        className="absolute inset-0 -z-10 h-full rounded-xl bg-slate-700/25"
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
            <ul className="flex items-center gap-4">
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
                                    className="absolute inset-0 -z-10 h-full rounded-xl bg-slate-700/25"
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
