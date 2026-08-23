"use client";

import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { site } from "@/data/site";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const rise = reduceMotion ? {} : { opacity: [0, 1], y: [24, 0], filter: ["blur(8px)", "blur(0px)"] };

  return (
    <section className="hero-shell" id="inicio">
      <motion.header className="site-header" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        <a className="wordmark" href="#inicio" aria-label="Rober, volver al inicio">{site.name}</a>
        <p className="status-line"><span aria-hidden="true" /> Building things · {site.location}</p>
      </motion.header>

      <div className="hero-copy">
        <motion.p className="eyebrow" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.65, delay: 0.12 }}>
          Digital playground / Est. 2026
        </motion.p>
        <motion.h1 initial={reduceMotion ? false : { opacity: 0 }} animate={rise} transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}>
          I make things<br />for the internet.
        </motion.h1>
        <motion.p className="hero-description" initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.36 }}>
          Apps, webs y experimentos digitales que creo porque me apetece ver si una idea puede convertirse en algo real.
        </motion.p>
      </div>

      <motion.a className="scroll-cue" href="#proyectos" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.55 }}>
        <ArrowDown aria-hidden="true" size={15} strokeWidth={1.7} /> Proyectos
      </motion.a>
    </section>
  );
}
