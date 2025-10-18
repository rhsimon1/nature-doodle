"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// Fix for Leaflet marker icons in React
// This is needed because Leaflet's default icon paths are not compatible with React's build system
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});
// Mock data for user uploads
const mockUserUploads = [
  {
    id: 1,
    lat: 40.7128,
    lng: -74.006,
    username: "naturelover",
    title: "Forest Scene",
    preview:
      "https://images.unsplash.com/photo-1581337204873-1a68fa3b0efa?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    lat: 40.7228,
    lng: -74.016,
    username: "artexplorer",
    title: "Mountain View",
    preview:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    lat: 40.7028,
    lng: -73.996,
    username: "creativemind",
    title: "River Sketch",
    preview:
      "https://images.unsplash.com/photo-1536323760109-ca8c07450053?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    lat: 40.7328,
    lng: -74.026,
    username: "doodlemaster",
    title: "Wildlife Drawing",
    preview:
      "https://images.unsplash.com/photo-1582201943055-e8e3e7925279?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];
const Map = () => {
  // Initial position for the map (New York City as default)
  const position = [40.7128, -74.006];
  // Function to handle marker click
  const handleMarkerClick = (id) => {
    navigate(`/guess/${id}`);
  };
  return (
    <div className="w-full h-full">
      <MapContainer
        center={[position[0], position[1]]}
        zoom={13}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mockUserUploads.map((upload) => (
          <Marker
            key={upload.id}
            position={[upload.lat, upload.lng]}
            eventHandlers={{
              click: () => handleMarkerClick(upload.id),
            }}
          >
            <Popup>
              <div className="w-48">
                <img
                  src={upload.preview}
                  alt={upload.title}
                  className="w-full h-32 object-cover rounded-t-md"
                />
                <div className="p-2 bg-white rounded-b-md">
                  <h3 className="font-bold text-green-800">{upload.title}</h3>
                  <p className="text-sm text-gray-600">by {upload.username}</p>
                  <button
                    className="mt-2 w-full py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700"
                    onClick={() => handleMarkerClick(upload.id)}
                  >
                    Guess This Drawing
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
export default Map;
