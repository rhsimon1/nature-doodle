import Image from 'next/image';
import styles from './explore.module.css';
import DrawingCard from '../components/DrawingCard';
import Collapse from '../components/collapse.jsx';

const locations = [
  'New York',
  'California',
  'Texas',
  'Florida',
  'Illinois',
  'Pennsylvania',
  'Ohio',
];

const titles_1 = [
  'Sunset',
  'City',
  'Wildlife',
  'Lively',
  'Serene',
  'Vibrant',
  'Peaceful',
  'Desert',
];

const titles_2 = [
  'Waves',
  'Path',
  'Dunes',
  'Mountains',
  'Forest',
  'River',
  'Valley',
  'Hills',
];

const randomimagefiles = [
  '/bird_stock.jpg',
  '/field.jpg',
  '/jelly_fish.jpg',
  '/squirell.jpg',
  '/whilte_flower.jpg',
  '/giaraff.jpg',
  '/blue_bird.jpg',
]

/*Changes the amoutn of user spoofs*/
const amount = 20;

const recentUploads = [];



for (let i = 0; i < amount; i++) {
  const title =
    titles_1[Math.floor(Math.random() * titles_1.length)] +
    ' ' +
    titles_2[Math.floor(Math.random() * titles_2.length)];

  const location = locations[Math.floor(Math.random() * locations.length)];

  const likes = Math.floor(Math.random() * 50) + 1;
  const guesses = Math.floor(Math.random() * 50) + 1;
  const randomimage = randomimagefiles[Math.floor(Math.random() * randomimagefiles.length)];

  recentUploads.push({
    id: i,
    title: title,
    username: `user_${i}`,
    location: location,
    imageUrl: `/nature_pictures/${randomimage}`,
    likes: likes,
    guesses: guesses,
    description: <Collapse title="Description">
      <p>
        this is a testing paragraph
        for this cool looking nature picture
        thing here, that is displayed. Some kind of nature picture
        or something or another along those lines
        that is currently being described on the page
      </p>
      </Collapse>,
    dateTime: new Date().toISOString(),
  });
}


export default function Page() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '30px'}}>
        Explore
      </h1>
      <div className="px-4 sm:px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {recentUploads
            .filter(upload => ![].includes(upload.location))
            .map(upload => (
              <DrawingCard
                key={upload.id}
                id={upload.id}
                title={upload.title}
                username={upload.username}
                location={upload.location}
                imageUrl={upload.imageUrl}
                likes={upload.likes}
                guesses={upload.guesses}
                description={upload.description}
                dateTime={upload.dateTime}
              />
          ))}
          </div>
        </div>
    </div>
  );
}



/* funny
export default function Page() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '30px'}}>
        Explore
      </h1>
      <div className="max-w-2xl mx-auto px-0.2">
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
    </div>
  );
}
*/


/*
export default function Page() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '30px'}}>
        Explore
      </h1>
      <div className="max-w-2xl mx-auto px-0.6">
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
    </div>
  );
}
*/