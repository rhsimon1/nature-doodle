import Link from 'next/link';
import Image from 'next/image';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
export default function Header() {
  return (
    <header className="flex items-center justify-center px-6 py-6 bg-primary-container">
      <Link href="/" className="flex justify-center w-full">
        <Image
          src="/logo.svg"
          alt="Nature Doodle Logo"
          width={180}
          height={40}
        />
      </Link>
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </header>
  );
}
