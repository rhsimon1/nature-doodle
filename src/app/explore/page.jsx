import Image from 'next/image';
import DrawingCard from '../components/DrawingCard';
export default function Page() {
  return (
    <div>
      <h1>This Is the Explore page</h1>
      <Image
        src="/globe.svg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}
