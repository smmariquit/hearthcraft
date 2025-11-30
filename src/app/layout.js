import { Geist, Geist_Mono, Playfair_Display, Press_Start_2P } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-quote",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Minecraft-like pixel font
const mc = Press_Start_2P({
  variable: "--font-mc",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "HearthCraft",
  description: "\"One day, we'll look back at where we started and be amazed by how far we've come\" — Technoblade",
  icons: {
    icon: "/hclogo.png",
    shortcut: "/hclogo.png",
    apple: "/hclogo.png",
  },
  openGraph: {
    title: "HearthCraft",
    description: "\"One day, we'll look back at where we started and be amazed by how far we've come\" — Technoblade",
    url: "https://hearthcraft.example", // Optional: replace with real URL
    siteName: "HearthCraft",
    images: [
      {
        url: "/hearthcraft.png",
        width: 1200,
        height: 630,
        alt: "HearthCraft",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HearthCraft",
    description: "\"One day, we'll look back at where we started and be amazed by how far we've come\" — Technoblade",
    images: ["/hearthcraft.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${mc.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
