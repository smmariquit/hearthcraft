import fs from "fs";
import path from "path";
import Image from "next/image";
import galleryMeta from "../../data/galleryMeta.json";
import GalleryGrid from "./GalleryGrid";

// Server component gathers media & metadata; client grid handles interactivity.
export default function Gallery() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  let files = [];
  try {
    files = fs.readdirSync(galleryDir);
  } catch (_) {}

  const imageExt = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);
  const videoExt = new Set([".mp4", ".webm", ".mov", ".m4v"]);

  const metaByFile = new Map(galleryMeta.map(m => [m.file, m]));

  const media = files.map((file) => {
    const ext = path.extname(file).toLowerCase();
    const base = file.replace(ext, "");
    if (imageExt.has(ext)) {
      const meta = metaByFile.get(file);
      return {
        type: "image",
        file,
        src: `/gallery/${file}`,
        title: meta && typeof meta.title === "string" ? meta.title : "",
        description: meta && typeof meta.description === "string" ? meta.description : "",
        credits: meta && typeof meta.credits === "string" ? meta.credits : "",
      };
    }
    if (videoExt.has(ext)) {
      return { type: "video", file, src: `/gallery/${file}`, title: base };
    }
    return null;
  }).filter(Boolean);

  return (
    <section id="gallery" className="gallery">
      {media.length === 0 && <p style={{ opacity: 0.8 }}>No media found in /public/gallery.</p>}
      <GalleryGrid items={media} />
    </section>
  );
}
