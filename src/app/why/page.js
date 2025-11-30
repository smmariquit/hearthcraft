import Image from "next/image";

export default function About() {
  return (
    <section
      className="hero"
      style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}
    >
      <Image
        src="/hearthcraft.png"
        alt="HearthCraft Background"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", filter: "blur(16px)", transform: "scale(1.06)", zIndex: 0 }}
      />
      <div
        className="hero-overlay"
        style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45))", zIndex: 0, pointerEvents: "none" }}
      />
      <div style={{ position: "relative", zIndex: 1, display: "grid", placeItems: "center", minHeight: "100vh", textAlign: "center", color: "white", padding: "2rem 1rem" }}>
          <a href="/" aria-label="Back to home" style={{ position: "absolute", top: "1rem", left: "1rem", background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", padding: "6px 10px", borderRadius: "8px", textDecoration: "none" }}>← Home</a>
        <div style={{ maxWidth: "80vw" }}>
          <h1 style={{ marginBottom: "1rem" }} className="text-8xl text-[#3f88c5]">Where is HC?</h1>
          <p style={{ lineHeight: 1.6, opacity: 0.92 }} className="text-">
            Unfortunately, HearthCraft has been shut down as of April 2025. After years of providing a home for countless players, the decision was made to close the server. Multiple factors contributed to the closure, including technical debt that stemmed from the server's aging setup (world files reached almost 1TB), the server owner's transition to a college life and as well hard-to-reverse technical errors in the update to 1.21.<br/><br/>
            
            On April 18, 2025, the last day that the server could stay up, players gathered to say goodbye one last time.</p>
            <Image
              src="/goodbye.webp"
              alt="Farewell Gathering"
              width={600}
              height={350}
              priority
              style={{ borderRadius: "8px", marginTop: "1rem" }}
              // put it in the center
              className="shadow-lg mx-auto"
            />
        </div>
      </div>
    </section>
  );
}
