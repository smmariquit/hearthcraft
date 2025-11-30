import fs from "fs";
import path from "path";
import GalleryGrid from "./GalleryGrid";
import memesMeta from "../../data/memesMeta.json";

export default function Memes() {
  const dir = path.join(process.cwd(), "public", "memes");
  let files = [];
  try { files = fs.readdirSync(dir); } catch (_) {}

  const imageExt = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);
  const videoExt = new Set([".mp4", ".webm", ".mov", ".m4v"]);

  const metaByFile = new Map(memesMeta.map(m => [m.file, m]));

  const items = files.map((file) => {
    const ext = path.extname(file).toLowerCase();
    if (imageExt.has(ext)) {
      const meta = metaByFile.get(file);
      return {
        type: "image",
        file,
        src: `/memes/${file}`,
        title: meta?.title ?? "",
        description: meta?.description ?? "",
        credits: meta?.credits ?? "",
      };
    }
    if (videoExt.has(ext)) {
      return { type: "video", file, src: `/memes/${file}`, title: "" };
    }
    return null;
  }).filter(Boolean);

  return (
    <section id="memes" className="gallery">
      <h2 className="gallery-title">Memes</h2>
      <GalleryGrid items={items} />
    </section>
  );
}
