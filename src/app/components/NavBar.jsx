import Link from 'next/link';

export default function NavBar() {
  return (
    <div className="fixed top-25 pt-5 left-0 h-screen">
      <nav className="flex flex-col gap-5 p-10 bg-primary h-full w-40">
        <Link
          href="/"
          className="w-full px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/explore"
          className="w-full px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
        >
          Explore
        </Link>
        <Link
          href="/profile"
          className="w-full px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
        >
          Profile
        </Link>
        <Link
          href="/Post"
          className="w-full px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
        >
          Post
        </Link>
      </nav>
    </div>
  );
}
