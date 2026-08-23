import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ROBER. — Digital playground",
    short_name: "ROBER.",
    description: "Apps, webs y experimentos digitales creados por Rober.",
    start_url: "/",
    display: "standalone",
    background_color: "#f0efe8",
    theme_color: "#f0efe8",
  };
}
