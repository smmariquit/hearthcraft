import fs from "fs";
import path from "path";
import GalleryGrid from "./GalleryGrid";
import contentMeta from "../../data/contentMeta.json";

export default function Content() {
  const dir = path.join(process.cwd(), "public", "content");
  let files = [];
  try { files = fs.readdirSync(dir); } catch (_) {}

  const imageExt = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);
  const videoExt = new Set([".mp4", ".webm", ".mov", ".m4v"]);

  const metaByFile = new Map(contentMeta.map(m => [m.file, m]));

  const items = files.map((file) => {
    const ext = path.extname(file).toLowerCase();
    if (imageExt.has(ext)) {
      const meta = metaByFile.get(file);
      return {
        type: "image",
        file,
        src: `/content/${file}`,
        title: meta?.title ?? "",
        description: meta?.description ?? "",
        credits: meta?.credits ?? "",
      };
    }
    if (videoExt.has(ext)) {
      return { type: "video", file, src: `/content/${file}`, title: "" };
    }
    return null;
  }).filter(Boolean);

  return (
    <section
      id="content"
      className="gallery"
      style={{
        padding: "0 1rem 2rem",
        margin: 0,
        alignSelf: "start",
      }}
    >
      <h2 className="gallery-title" style={{ margin: "0.75rem 0 0.75rem" }}>Content</h2>
      <GalleryGrid items={items} />
    </section>
  );
}
