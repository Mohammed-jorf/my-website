import Image from "next/image";

import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      {project.thumbnail ? (
        <div className="project-image-wrap">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="project-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : null}
      <div className="project-body">
        <p className="project-year">{project.year}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="chip-list" aria-label="Technologies used">
          {project.tech.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
        <div className="project-links">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live
            </a>
          ) : null}
          {project.repoUrl ? (
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
