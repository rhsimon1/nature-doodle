'use client';
import { useState, useEffect } from 'react';
import DrawingCard from './DrawingCard';

export default function DisplayImages({ count }) {
  //id,
  // title,
  // username,
  // location,
  // imageUrl,
  // likes,
  // guesses,
  // description,
  // dateTime,

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
      }
    })();
  }, []);

  return (
    <div className="flex flex-wrap gap-6 ">
      {images.length === 0 ? (
        <p className="text-center text-sm text-neutral-500 w-full">
          No images found.
        </p>
      ) : (
        images.slice(0, count).map((image) => (
          <div
            key={image.cid}
            className="w-[250px] h-auto rounded-xl overflow-hidden shadow-md"
          >
            <DrawingCard
              imageUrl={`https://gold-naval-hare-377.mypinata.cloud/ipfs/${image.cid}`}
              displayBottom={false}
            />
          </div>
        ))
      )}
    </div>
  );
}
