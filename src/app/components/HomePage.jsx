'use client';
import Map from '../components/Map';
import UploadFile from './UploadFile';
import DrawingCard from '../components/DrawingCard';
import { MapPinIcon, TrendingUpIcon } from 'lucide-react';
import ProgressBox from './ProgressBox';
import DisplayImages from './DisplayImages';

// Mock data for recent uploads

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
      <section className="mb-12">
        <div className="flex flex-col items-start mb-6">
          <MapPinIcon className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold text-green-800">
            Doodles Near You
          </h2>
          <div className="flex space-x-5">
            <ProgressBox
              title={'Total Doodles'}
              count={5}
              color={'#e6f1d7'}
            ></ProgressBox>
            <ProgressBox
              title={'Other Doodles'}
              count={17}
              color={'#85cd7f'}
            ></ProgressBox>
            <ProgressBox
              title={'Local Doodler Rank'}
              count={1}
              color={'#869168'}
            ></ProgressBox>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[500px] w-[800px]">
          <Map />
        </div>
      </section>
      <section>
        <div className="flex items-center mb-6">
          <TrendingUpIcon className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold text-green-800">Recent Doodles</h2>
        </div>
        <div className="px-4 sm:px-6 lg:px-20">
          <DisplayImages count={3} />
        </div>
      </section>
    </div>
  );
}
