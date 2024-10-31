"use client";
// import ContributionsSection from "@/components/contributions-section";
import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion";
import Link from "next/link";

export default function Home() {
    // const scrollToSection = (sectionId: string) => {
    //     document
    //         .getElementById(sectionId)
    //         ?.scrollIntoView({ behavior: "smooth", block: "center" });
    //   };

    return (
        <div className="mt-[10rem] max-w-[1080px] mx-auto px-4">
            <HeroSection />
            <ProjectsSection />
            <ExperienceSection />
            <SkillsSection />
            {/* 
            // ---   Accordions for each Section ---
            <Accordion
              type="multiple"
              defaultValue={["item-1"]}
              className="AccordionRoot"
          >
              <AccordionItem
                  className="AccordionItem"
                  value="item-1"
                  id="item-1-section"
              >
                  <AccordionTrigger
                      className="text-4xl font-bold mt-12 mb-8"
                      onClick={() => scrollToSection("item-1-section")}
                  >
                      Projects
                  </AccordionTrigger>
                  <AccordionContent>
                      <ProjectsSection />
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem
                  className="AccordionItem"
                  value="item-2"
                  id="item-2-section"
              >
                  <AccordionTrigger
                      className="text-4xl font-bold mt-12 mb-8"
                      onClick={() => scrollToSection("item-2-section")}
                  >
                      Experience
                  </AccordionTrigger>
                  <AccordionContent>
                      <ExperienceSection />
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem
                  className="AccordionItem"
                  value="item-3"
                  id="item-3-section"
              >
                  <AccordionTrigger
                      className="text-4xl font-bold mt-12 mb-8"
                      onClick={() => scrollToSection("item-3-section")}
                  >
                      Contributions
                  </AccordionTrigger>
                  <AccordionContent>
                      <ContributionsSection />
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem
                  className="AccordionItem"
                  value="item-4"
                  id="item-4-section"
              >
                  <AccordionTrigger
                      className="text-4xl font-bold mt-12 mb-8"
                      onClick={() => scrollToSection("item-4-section")}
                  >
                      Skills
                  </AccordionTrigger>
                  <AccordionContent>
                      <SkillsSection />
                  </AccordionContent>
              </AccordionItem>
          </Accordion> */}
            <Link
                href="https://nextjs.org/"
                target="__blank"
                className="flex gap-2 cursor-pointer hover:font-medium my-[5rem] mx-auto w-fit"
            >
                Made with Next.js
                <svg
                    height="20px"
                    className="mt-[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    viewBox="0 0 284 65"
                >
                    <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
                </svg>
            </Link>
        </div>
    );
}
