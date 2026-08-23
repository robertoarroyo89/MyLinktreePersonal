import type { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

export function ProjectList({ projects }: { projects: readonly Project[] }) {
  return <section aria-labelledby="projects-heading">
    <div className="project-intro" id="proyectos"><p id="projects-heading">Selected projects</p><p>01 — {String(projects.length).padStart(2, "0")}</p></div>
    <div>{projects.map((project) => <ProjectCard key={project.id} project={project} total={projects.length} />)}</div>
  </section>;
}
