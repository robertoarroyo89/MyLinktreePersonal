import { site } from "@/data/site";

export function Footer() {
  const socials = Object.entries(site.socials).filter((entry): entry is [string, string] => typeof entry[1] === "string");

  return <footer className="site-footer">
    <a className="footer-mark" href="#inicio">ROBER.</a>
    <p>Hecho en algún lugar<br />entre una idea y demasiado café.</p>
    {socials.length > 0 ? <nav aria-label="Redes sociales">{socials.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noopener noreferrer">{name} ↗</a>)}</nav> : null}
    <div className="footer-bottom"><span>© 2026 Rober.</span><a href="#inicio">Volver arriba ↑</a></div>
  </footer>;
}
