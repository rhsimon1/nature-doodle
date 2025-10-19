import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 h-screen">
      <nav className="flex flex-col gap-6 p-10 bg-tertiary-container h-full w-40">
        <Link
          href="/"
          className="flex flex-col items-center gap-2 w-full px-4 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
        >
          <Image
            src="/user-home.svg"
            alt="Home"
            width={26}
            height={26}
          />
          Home
        </Link>
        <Link
          href="/explore"
          className="flex flex-col items-center gap-2 w-full px-4 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
        >
          <Image
            src="/explore.svg"
            alt="Explore icon"
            width={26}
            height={26}
          />
          Explore
        </Link>
        <Link
          href="/post"
          className="flex flex-col items-center gap-2 w-full px-4 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
        >
          <Image
            src="/pencil-solid-full.svg"
            alt="Post icon"
            width={26}
            height={26}
          />
          Post
        </Link>
      </nav>
    </div>
  );
}
