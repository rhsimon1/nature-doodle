'use client';
import dynamic from 'next/dynamic';

// Load LeafletMap **only in the browser**, not during SSR
const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

export default function Map() {
  return (
    <div className="w-full h-full">
      <LeafletMap />
    </div>
  );
}
