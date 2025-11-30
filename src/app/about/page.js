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
          <h1 style={{ marginBottom: "1rem" }} className="text-8xl text-[#3f88c5]">About HC</h1>
          <p style={{ lineHeight: 1.6, opacity: 0.92 }} className="text-xl">
            In October 2018, the first iteration of HearthCraft SMP came to be. It ran on 1.12. While it gained some initial traction, it wasn't untiil April 2019 that the server truly began to flourish. Ever since July 2019, the HearthCraft world would never reset. Players built incredible builds and more importantly spent hours on a community that the team behind HC built to be a safe space. Through the pandemic, HC was home to tens of thousands of players. It thrived among a vast sea of Minecraft servers because of the dedication of its staff and the kindness of its community.<br /><br/>Since 2018, HearthCraft had one goal in mind: to create a community that people could call home, thus the name "HearthCraft". We created a lot of happy experiences for players that involved sweet hellos, laughing, banter, and some warmth amidst the cold world.
            <br/><br/>Speaking of mechanics, HearthCraft was a no-griefing economy SMP with a 0% pay-to-win store. There were resource worlds that kept things interesting, mcMMO, and other features.
          </p>
        </div>
      </div>
    </section>
  );
}
