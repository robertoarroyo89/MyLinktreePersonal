export type ProjectStatus = "live" | "building" | "archived";

export type ProjectVisual =
  | "habits"
  | "latetap"
  | "azahar"
  | "flujo"
  | "oratoria"
  | "weather";

export interface Project {
  id: string;
  index: string;
  name: string;
  subtitle?: string;
  description: string;
  statement?: string;
  url?: string;
  category: string;
  status: ProjectStatus;
  accent: string;
  surface: string;
  tone: "light" | "dark";
  visual: ProjectVisual;
  cta: string;
  year: number;
  featured?: boolean;
}
