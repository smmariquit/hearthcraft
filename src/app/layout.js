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
  description: "HearthCraft SMP",
  icons: {
    icon: "/hclogo.png",
    shortcut: "/hclogo.png",
    apple: "/hclogo.png",
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
