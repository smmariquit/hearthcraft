import Link from "next/link";

export const metadata = {
  title: "Terms of Service | HearthCraft",
  description: "Terms for using the HearthCraft website and community links.",
};

export default function TermsPage() {
  return (
    <main style={{ maxWidth: "42rem", margin: "0 auto", padding: "2rem 1rem 4rem", lineHeight: 1.65 }}>
      <Link href="/" style={{ display: "inline-block", marginBottom: "1.5rem" }}>
        ← Back
      </Link>
      <h1 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>Terms of Service</h1>
      <p style={{ opacity: 0.75, marginBottom: "2rem" }}>
        Last updated: July 4, 2026. By using this website you agree to these terms.
      </p>
      <article style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <section>
          <h2 style={{ fontSize: "1.05rem" }}>The service</h2>
          <p>
            This site shares information about the HearthCraft Minecraft server. It is provided{" "}
            <strong>as is</strong> without guaranteed uptime or accuracy.
          </p>
        </section>
        <section>
          <h2 style={{ fontSize: "1.05rem" }}>Server rules</h2>
          <p>
            Playing on the server or participating in Discord is subject to community rules posted in those
            spaces. Staff may moderate or remove access for violations.
          </p>
        </section>
        <section>
          <h2 style={{ fontSize: "1.05rem" }}>Not Mojang / Microsoft</h2>
          <p>
            HearthCraft is not affiliated with Mojang Studios or Microsoft. Minecraft is a trademark of
            Mojang Studios.
          </p>
        </section>
        <section>
          <h2 style={{ fontSize: "1.05rem" }}>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, HearthCraft volunteers are not liable for indirect or
            consequential damages from use of this site or the game server.
          </p>
        </section>
      </article>
      <p style={{ marginTop: "2rem", fontSize: "0.65rem", opacity: 0.45, textAlign: "center" }}>
        <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
      </p>
    </main>
  );
}
