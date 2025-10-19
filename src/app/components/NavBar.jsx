import Link from 'next/link';
import Image from 'next/image';
import UploadFile from './UploadFile';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
export default function NavBar() {
  return (
    <div className="fixed top-25 pt-5 left-0 h-screen">
      <nav className="flex flex-col gap-5 p-10 bg-primary h-full w-40">
        <Link
          href="/"
          className="flex flex-col items-center gap-2 w-full px-4 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
        >
          <Image src="/user-home.svg" alt="Home" width={26} height={26} />
          Home
        </Link>
        <Link
          href="/explore"
          className="flex flex-col items-center gap-2 w-full px-4 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
        >
          <Image src="/explore.svg" alt="Explore icon" width={26} height={26} />
          Explore
        </Link>
        <Dialog>
          <DialogTrigger className="ml-5.5">
            <Image
              src="/pencil-solid-full.svg"
              alt="Post icon"
              width={26}
              height={26}
            />
            <div>Post</div>
          </DialogTrigger>
          <DialogContent className="z-[9999] max-w-sm rounded-2xl bg-white p-8 shadow-lg flex flex-col items-center text-center">
            <DialogHeader className="p-0 mb-4">
              <DialogTitle className="text-lg font-semibold text-gray-900">
                Upload Images
              </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col items-center justify-center w-full">
              <Image
                src="/small_loho.svg"
                alt="Leaf icon"
                width={80}
                height={80}
                className="mb-4 opacity-90"
              />
              <UploadFile></UploadFile>
            </div>
          </DialogContent>
        </Dialog>
      </nav>
    </div>
  );
}
