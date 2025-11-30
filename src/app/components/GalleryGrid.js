'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

export default function GalleryGrid({ items }) {
  const [active, setActive] = useState(null);

  const open = (item) => setActive(item);
  const close = () => setActive(null);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, idx) => (
          <div key={idx} className="gallery-item" style={{ cursor: item.type === 'image' ? 'zoom-in' : 'default' }}>
            {item.type === 'image' ? (
              <div className="ratio-frame" onClick={() => open(item)}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="gallery-caption">
                  <span>{item.title}</span>
                </div>
              </div>
            ) : (
              <video
                src={item.src}
                controls
                preload="metadata"
                title={item.title}
                className="gallery-video"
                style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
              />
            )}
          </div>
        ))}
      </div>
      {active && active.type === 'image' && typeof document !== 'undefined' && createPortal(
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active.src}
              alt={active.title}
              width={800}
              height={600}
              style={{ width: 'auto', height: 'auto', objectFit: 'contain' }}
              className='mx-auto'
            />
            <div className="lightbox-meta">
              <h3>{active.title}</h3>
              {active.description && <p>{active.description}</p>}
              {active.credits && <p className="credits">Credits: {active.credits}</p>}
              <button onClick={close} className="close-btn">Close</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
