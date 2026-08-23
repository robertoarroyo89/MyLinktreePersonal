import { About } from "@/components/about/About";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { ProjectList } from "@/components/projects/ProjectList";
import { projects } from "@/data/projects";

export default function Home() {
  return <main>
    <Hero />
    <ProjectList projects={projects} />
    <About />
    <Footer />
  </main>;
}
