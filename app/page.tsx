// import ContributionsSection from "@/components/contributions-section";
import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import StripesSVG from "@/components/StripesSVG";
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
		<div className="mx-auto mt-40 max-w-[1080px] px-4">
			{/* <StripesSVG /> */}
			<HeroSection />
			<ExperienceSection />
			<ProjectsSection />
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
		</div>
	);
}
