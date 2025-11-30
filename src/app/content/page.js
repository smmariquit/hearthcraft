import Content from "../components/Content";

export default function ContentPage() {
  return (
    <div className="pattern-page">
      <div className="page-inner">
        <div className="page-header">
          <a href="/" className="back-btn" aria-label="Back to home">← Home</a>
          <h1 style={{ margin: 0 }}>Content</h1>
        </div>
        <Content />
      </div>
    </div>
  );
}
