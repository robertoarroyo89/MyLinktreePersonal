"use client";

import type { CSSProperties, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { track } from "@vercel/analytics";

import type { Project } from "@/types/project";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project, total }: { project: Project; total: number }) {
  const reduceMotion = useReducedMotion();
  const style = { "--project-accent": project.accent, "--project-surface": project.surface } as CSSProperties;
  const body = <>
    <div className="project-copy">
      <div className="project-meta"><span>{project.index} / {String(total).padStart(2, "0")}</span><span>{project.category}</span><span className={`status-label ${project.status}`}><i /> {project.status}</span></div>
      <div className="project-title-block">
        {project.statement ? <p className="project-statement">{project.statement}</p> : null}
        {project.subtitle ? <p className="project-subtitle">{project.subtitle}</p> : null}
        <h2>{project.name}</h2>
        <p className="project-description">{project.description}</p>
      </div>
      <div className={`project-link ${project.status === "building" ? "disabled" : ""}`}>
        {project.cta}{project.status === "live" ? <ArrowUpRight aria-hidden="true" size={18} /> : <span aria-hidden="true">◌</span>}
      </div>
    </div>
    <motion.div className="visual-wrap" initial={reduceMotion ? false : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
      <ProjectVisual visual={project.visual} />
    </motion.div>
  </>;

  const content: ReactNode = project.url && project.status === "live" ? (
    <a className="project-hit" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.cta}, se abre en una pestaña nueva`} onClick={() => track(`project_open_${project.id}`)}>{body}</a>
  ) : (
    <div className="project-hit building-hit">{body}</div>
  );

  return <motion.article className={`project-card tone-${project.tone} project-${project.visual}`} style={style} initial={reduceMotion ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.6 }}>{content}</motion.article>;
}
