import Memes from "../components/Memes";

export default function MemesPage() {
  return (
    <div className="pattern-page">
      <div className="page-inner">
        <div className="page-header">
          <a href="/" className="back-btn" aria-label="Back to home">← Home</a>
          <h1 style={{ margin: 0 }}>Memes</h1>
        </div>
        <Memes />
      </div>
    </div>
  );
}
