import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "A curated set of engineering projects, outcomes, and technical decisions.",
  alternates: {
    canonical: "/projects"
  }
};

export default function ProjectsPage() {
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  return (
    <Section
      title="Projects"
      description="Work samples with concise context on what was built and why it mattered."
    >
      <div className="project-grid">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
