import Link from "next/link";

import { CTA } from "@/components/cta";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { profile, projects, siteConfig } from "@/content/site";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">AI + Embedded Systems</p>
            <h1>{profile.fullName}</h1>
            <p className="hero-lead">{profile.headline}</p>
            <p>{profile.bio}</p>
            <div className="hero-actions">
              <Link href="/projects" className="button button-primary">
                View Projects
              </Link>
              <Link href="/contact" className="button button-secondary">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="hero-panel">
            <p className="panel-title">Quick links</p>
            <ul>
              {siteConfig.socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section
        title="Featured Projects"
        description="Selected AI and embedded projects from research, internships, and applied engineering tracks."
      >
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <section className="section">
        <div className="container">
          <CTA
            title="Working on AI, NLP, or intelligent hardware projects?"
            body="I collaborate on practical systems that combine machine learning, LLM workflows, and embedded implementation."
            primaryHref="/contact"
            primaryLabel="Start a conversation"
            secondaryHref="/about"
            secondaryLabel="About me"
          />
        </div>
      </section>
    </>
  );
}
