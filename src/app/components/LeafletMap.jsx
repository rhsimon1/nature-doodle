'use client';

import { useEffect, useState, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet default marker icons for bundlers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Your mock data (unchanged)
const mockUserUploads = [
  {
    id: 1,
    lat: 40.7128,
    lng: -74.006,
    username: 'naturelover',
    title: 'Forest Scene',
    preview:
      'https://images.unsplash.com/photo-1581337204873-1a68fa3b0efa?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    lat: 40.7228,
    lng: -74.016,
    username: 'artexplorer',
    title: 'Mountain View',
    preview:
      'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    lat: 40.7028,
    lng: -73.996,
    username: 'creativemind',
    title: 'River Sketch',
    preview:
      'https://images.unsplash.com/photo-1536323760109-ca8c07450053?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 4,
    lat: 40.7328,
    lng: -74.026,
    username: 'doodlemaster',
    title: 'Wildlife Drawing',
    preview:
      'https://images.unsplash.com/photo-1582201943055-e8e3e7925279?auto=format&fit=crop&w=200&q=80',
  },
];

// Helper child that recenters when `center` changes
function RecenterOnLocation({ center, zoom = 14 }) {
  const map = useMap();
  useEffect(() => {
    if (center) map.flyTo(center, zoom, { duration: 0.6 });
  }, [center, zoom, map]);
  return null;
}

export default function LeafletMap() {
  // Default to NYC until we get geolocation
  const defaultCenter = [40.7128, -74.006];
  const [userCenter, setUserCenter] = useState(null);
  const [locating, setLocating] = useState(false);
  const [error, setError] = useState(null);

  const locate = useCallback(() => {
    if (!('geolocation' in navigator)) {
      setError('Geolocation is not supported by your browser.');
      return;
    }
    setLocating(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserCenter([latitude, longitude]);
        setLocating(false);
      },
      (err) => {
        setError(err.message || 'Unable to retrieve your location.');
        setLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10_000,
        maximumAge: 30_000,
      }
    );
  }, []);

  // Get location on first mount
  useEffect(() => {
    locate();
  }, [locate]);

  const center = userCenter ?? defaultCenter;

  return (
    <div className="relative w-full h-full">
      {/* Small floating button to re-center */}
      <button
        onClick={locate}
        className="absolute z-[1000] right-3 top-3 rounded-lg bg-white/90 backdrop-blur px-3 py-2 text-sm shadow hover:bg-white"
      >
        {locating ? 'Locating…' : '📍 Locate me'}
      </button>

      {/* Optional error toast */}
      {error && (
        <div className="absolute z-[1000] left-1/2 -translate-x-1/2 top-3 mt-10 rounded-lg bg-red-600 text-white px-3 py-2 text-xs shadow">
          {error}
        </div>
      )}

      <MapContainer
        center={center}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <RecenterOnLocation center={userCenter} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* "You are here" marker if we have a location */}
        {userCenter && (
          <Marker position={userCenter}>
            <Popup>You are here</Popup>
          </Marker>
        )}

        {/* Existing upload markers */}
        {mockUserUploads.map((u) => (
          <Marker key={u.id} position={[u.lat, u.lng]}>
            <Popup>
              <div className="w-48">
                <img
                  src={u.preview}
                  alt={u.title}
                  className="w-full h-32 object-cover rounded-t-md"
                />
                <div className="p-2 bg-white rounded-b-md">
                  <h3 className="font-bold text-green-800">{u.title}</h3>
                  <p className="text-sm text-gray-600">by {u.username}</p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
