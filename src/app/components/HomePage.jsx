'use client';
import Map from '../components/Map';
import UploadFile from './UploadFile';
import DrawingCard from '../components/DrawingCard';
import { MapPinIcon, TrendingUpIcon } from 'lucide-react';
// Mock data for recent uploads
const recentUploads = [
  {
    id: 1,
    title: 'Forest Scene',
    username: 'naturelover',
    location: 'New York',
    imageUrl:
      'https://images.unsplash.com/photo-1581337204873-1a68fa3b0efa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    likes: 24,
    guesses: 12,
  },
  {
    id: 2,
    title: 'Mountain View',
    username: 'artexplorer',
    location: 'Colorado',
    imageUrl:
      'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    likes: 18,
    guesses: 8,
  },
  {
    id: 3,
    title: 'River Sketch',
    username: 'creativemind',
    location: 'Oregon',
    imageUrl:
      'https://images.unsplash.com/photo-1536323760109-ca8c07450053?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    likes: 32,
    guesses: 15,
  },
];
export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Nature Doodle and Friends
        </h1>
        <p className="text-xl text-green-600 max-w-2xl mx-auto">
          Share your nature drawings and guess what others have created. Connect
          with creative nature lovers around you!
        </p>
      </section>
      <UploadFile></UploadFile>
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <MapPinIcon className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold text-green-800">
            Doodles Near You
          </h2>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[500px]">
          <Map />
        </div>
      </section>
      <section>
        <div className="flex items-center mb-6">
          <TrendingUpIcon className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold text-green-800">Recent Uploads</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentUploads.map((upload) => (
            <DrawingCard
              key={upload.id}
              id={upload.id}
              title={upload.title}
              username={upload.username}
              location={upload.location}
              imageUrl={upload.imageUrl}
              likes={upload.likes}
              guesses={upload.guesses}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
