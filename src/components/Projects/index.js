import {
  Section,
  SectionDivider,
  SectionMainTitle,
} from "../../styles/GlobalComponents";
import AcademicProjects from "./AcademicProjects";
import PersonalProjects from "./PersonalProjects";
import ProfessionalProjects from "./ProfessionalProjects";

export default function Projects() {
  return (
    <>
      <Section id="projects">
        <SectionDivider />
        <SectionMainTitle>Projects</SectionMainTitle>
        <PersonalProjects />
        <ProfessionalProjects />
        <AcademicProjects />
      </Section>
    </>
  );
}
