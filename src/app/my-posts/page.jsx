import DrawingCard from '../components/DrawingCard';
import DisplayImages from '../components/DisplayImages';

export default function Page() {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-[30px] my-3">Your Doodles</h1>
      <div className="px-4 sm:px-6 lg:px-20">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1"> */}
        <div className="px-4 sm:px-6 lg:px-20">
          <DisplayImages count={20} />
        </div>
      </div>
    </div>
  );
}
