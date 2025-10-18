import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 h-screen">
      {/* HTML NavBar Code Below */}
      <nav className="flex flex-col gap-5 p-10 bg-yellow-200 shadow-md h-full">
      <Link href="/Home" >Home</Link>
      <Link href="/Explore">Explore</Link>
      <Link href="/Profile">Profile</Link>
      <Link href="/Post">Post</Link>
      </nav>
    </div>
  );
} 


