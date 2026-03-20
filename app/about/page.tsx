import type { Metadata } from "next";

import { Section } from "@/components/section";
import { courses, education, experience, profile } from "@/content/site";
import type { TimelineEntry } from "@/lib/types";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Mohammed Jorf, experience, education, and technical focus areas.",
  alternates: {
    canonical: "/about"
  }
};

function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="timeline-list">
      {items.map((item) => (
        <article key={`${item.org}-${item.role}-${item.period}`} className="card timeline-item">
          <h3>{item.role}</h3>
          <p>
            <strong>{item.org}</strong> · {item.location}
          </p>
          <p className="project-year">{item.period}</p>
          <ul>
            {item.highlights.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>{profile.fullName}</h1>
          <p>{profile.bio}</p>
        </div>
      </section>

      <Section title="Professional Snapshot" description="A concise view of my approach and areas of focus.">
        <div className="about-grid">
          <article className="card">
            <h3>Headline</h3>
            <p>{profile.headline}</p>
          </article>
          <article className="card">
            <h3>Location</h3>
            <p>{profile.location || "Remote"}</p>
          </article>
          <article className="card">
            <h3>Resume</h3>
            <p>
              <a href={profile.resumeUrl || "#"} target="_blank" rel="noreferrer">
                Download CV
              </a>
            </p>
          </article>
        </div>
      </Section>

      <Section title="Skills" description="Core technologies and practices I use regularly.">
        <ul className="chip-list">
          {profile.skills.map((skill) => (
            <li key={skill} className="chip">
              {skill}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Experience" description="Professional and research roles across AI and embedded systems.">
        <Timeline items={experience} />
      </Section>

      <Section title="Education" description="Academic background in computer engineering and electronics.">
        <Timeline items={education} />
      </Section>

      <Section title="Courses" description="Recent intensive learning tracks and practical outputs.">
        <Timeline items={courses} />
      </Section>

      <Section title="Languages and Interests" description="Communication strengths and long-term technical interests.">
        <div className="about-grid">
          <article className="card">
            <h3>Languages</h3>
            <ul className="detail-list">
              {profile.languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h3>Interests</h3>
            <ul className="detail-list">
              {profile.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h3>Soft Skills</h3>
            <ul className="detail-list">
              {profile.softSkills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>
    </>
  );
}
