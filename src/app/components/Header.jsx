import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-center px-6 py-6 bg-yellow-200 border-b border-yellow-200">
      <Link href="/" className="flex justify-center w-full">
        <Image 
          src="/logo.svg"
          alt="Nature Doodle Logo"
          width={180}
          height={40}
          priority
        />
      </Link>
    </header>
  );
} 