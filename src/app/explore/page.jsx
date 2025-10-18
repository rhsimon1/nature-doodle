import Image from 'next/image';
import DrawingCard from '../components/DrawingCard';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import DisplayImages from '../components/DisplayImages';

export default function Page() {
  return (
    <div>
      <h1>This Is the Explore page</h1>
      <DisplayImages></DisplayImages>
    </div>
  );
}
