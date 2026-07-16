import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | HearthCraft",
  description: "How the HearthCraft website handles visitor data.",
};

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: "42rem", margin: "0 auto", padding: "2rem 1rem 4rem", lineHeight: 1.65 }}>
      <Link href="/" style={{ display: "inline-block", marginBottom: "1.5rem" }}>
        ← Back
      </Link>
      <h1 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>Privacy Policy</h1>
      <p style={{ opacity: 0.75, marginBottom: "2rem" }}>
        Last updated: July 4, 2026. HearthCraft SMP is a community Minecraft server; this site is its
        unofficial marketing page.
      </p>
      <article style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <section>
          <h2 style={{ fontSize: "1.05rem" }}>What this site collects</h2>
          <p>
            Browsing this website may send standard web logs (IP address, browser type, pages viewed) to
            our host (Vercel). We may use privacy-friendly analytics to understand traffic. We do not run
            third-party ad networks on this site.
          </p>
        </section>
        <section>
          <h2 style={{ fontSize: "1.05rem" }}>Discord and external links</h2>
          <p>
            Joining our Discord or other linked platforms is governed by those services&apos; policies. Do
            not share passwords or sensitive personal data in public channels.
          </p>
        </section>
        <section>
          <h2 style={{ fontSize: "1.05rem" }}>Contact</h2>
          <p>
            Questions? Reach us through the official{" "}
            <a href="https://discord.gg/hearthcraft-smp-503217977634848769">Discord server</a>.
          </p>
        </section>
      </article>
      <p style={{ marginTop: "2rem", fontSize: "0.65rem", opacity: 0.45, textAlign: "center" }}>
        <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
      </p>
    </main>
  );
}
