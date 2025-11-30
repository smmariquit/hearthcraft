import Image from "next/image";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <>
    <section
      className="hero hero--pattern"
      style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}
    >
      <div
        className="hero-overlay"
        style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35))", zIndex: 0, pointerEvents: "none" }}
      />
      <div className="hero-content" style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateRows: "auto auto 1fr", alignItems: "start", justifyItems: "center", minHeight: "100vh", textAlign: "center", color: "white", padding: "2rem 1rem" }}>
          {/* Top logos */}
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <Image
              src="/hclogo.png"
              alt="HearthCraft Logo"
              width={64}
              height={64}
              priority
              style={{ width: "auto", height: "64px" }}
            />
            <Image
              src="/hearthchan.png"
              alt="HearthChan"
              width={64}
              height={64}
              priority
              style={{ width: "auto", height: "64px" }}
            />
          </div>
          {/* Navbar links */}
          <nav aria-label="Primary" style={{ marginTop: "0.5rem", fontSize: "0.95rem", opacity: 0.95 }}>
            <a href="https://discord.gg/hearthcraft-smp-503217977634848769" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>Discord</a>
            <span style={{ margin: "0 0.5rem" }}>|</span>
            <a href="https://instagram.com/hearthcraf" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>Instagram</a>
            <span style={{ margin: "0 0.5rem" }}>|</span>
            <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>About</a>
            <span style={{ margin: "0 0.5rem" }}>|</span>
            <a href="/why" style={{ color: "inherit", textDecoration: "none" }}>Why?</a>
            <span style={{ margin: "0 0.5rem" }}>|</span>
            <a href="https://www.planetminecraft.com/server/hearthcraft-4239364/?__cf_chl_tk=sGQmObFQhyjcYg8YwAQJWUVXyBpzEaS4sq38NYewsJI-1764500215-1.0.1.1-vlJuIFL3kThSIyNi3NiIgnlN7c0ujmJ_3O7g_W4tf78" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>PlanetMinecraft</a>
            {/* <span style={{ margin: "0 0.5rem" }}>|</span>
            <a href="/memes" style={{ color: "inherit", textDecoration: "none" }}>Memes</a>
            <span style={{ margin: "0 0.5rem" }}>|</span>
            <a href="/content" style={{ color: "inherit", textDecoration: "none" }}>Content</a> */}
          </nav>
          <h2 className="gallery-title text-sm">"One day, we'll look back at where we started and be amazed by how far we've come" — Technoblade <br /> April 2018 – April 2025</h2>
          {/* Scrollable gallery area within fixed hero */}
          <div style={{ width: "100%", height: "100%", overflowY: "auto" }}>
            <Gallery />
          </div>
      </div>
    </section>
    </>
  );
}
