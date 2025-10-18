'use client';
import { useState, useEffect } from 'react';

export default function DisplayImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/files');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const result = await res.json();
        setImages(result.files ?? []);
      } catch (e) {
        console.error(e);
        alert('Failed to load images.');
      }
    })();
  }, []);

  return (
    <main className="mx-auto w-full max-w-[640px] p-4 space-y-6">
      {images.length === 0 ? (
        <p className="text-center text-sm text-neutral-500">No images found.</p>
      ) : (
        images.map((image) => (
          <article
            key={image.id}
            className="rounded-2xl border border-neutral-200 shadow-sm overflow-hidden bg-white"
          >
            {/* Post header (optional) */}
            <header className="px-4 py-3 flex items-center gap-3">
              <div className="size-8 rounded-full bg-neutral-200" />
              <div className="text-sm font-medium truncate">{image.name}</div>
            </header>

            {/* Image with IG 4:5 crop */}
            <div className="relative w-full aspect-[4/5] bg-neutral-100">
              <img
                src={`https://gold-naval-hare-377.mypinata.cloud/ipfs/${image.cid}`}
                alt={image.name}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Footer (optional caption / actions) */}
            <footer className="px-4 py-3 text-sm text-neutral-700">
              <p className="truncate">{image.name}</p>
            </footer>
          </article>
        ))
      )}
    </main>
  );
}
