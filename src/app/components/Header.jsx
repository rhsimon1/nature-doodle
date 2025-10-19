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
    <header className="flex items-center justify-between px-6 py-6 bg-primary w-full">
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/logo.svg"
          alt="Nature Doodle Logo"
          width={280}
          height={200}
          priority
        />
      </Link>
      <div className="flex items-center gap-4">
        <SignedOut>
          <div className="flex gap-4 items-center">
            <SignInButton> 
              <button className="hover:bg-outline transition-colors text-ceramic-white rounded-md font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-8 cursor-pointer">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="hover:bg-outline transition-colors text-ceramic-white rounded-md font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-8 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
