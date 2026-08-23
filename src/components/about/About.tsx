import { projects } from "@/data/projects";

export function About() {
  const live = projects.filter((project) => project.status === "live").length;
  const building = projects.filter((project) => project.status === "building").length;

  return <section className="about-section" aria-labelledby="about-title">
    <div className="about-kicker"><span>About / 2026</span><span>{String(projects.length).padStart(2, "0")} ideas made tangible</span></div>
    <div className="about-grid">
      <h2 id="about-title">Un poco<br />sobre mí</h2>
      <div className="about-copy">
        <p>Marketing, diseño y producto digital. Me gusta convertir ideas en cosas que se pueden tocar, probar y compartir.</p>
        <p>Algunas sirven para resolver problemas. Otras existen simplemente porque quería ver qué pasaba si las construía.</p>
        <dl><div><dt>Live</dt><dd>{String(live).padStart(2, "0")}</dd></div><div><dt>Building</dt><dd>{String(building).padStart(2, "0")}</dd></div></dl>
      </div>
    </div>
  </section>;
}
