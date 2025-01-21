import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className='bg-gray-700'>
      <div className='max-w-6xl mx-auto flex justify-between items-center p-3'>
        {/* logo */}
        <Link href='/' className='text-2xl font-extrabold group cursor-pointer'>
          <span className='text-white'>
            Auth
          </span>
          <span className='text-white'>
            App
          </span>
        </Link>
        {/* add a navigation menu */}
        <nav>
          <ul className='flex gap-4'>
            <Link href='/' className="text-white">Home</Link>
            <Link href='/about' className="text-white">About</Link>
            <SignedIn >
              <UserButton  />
            </SignedIn>
            <SignedOut>
              <SignInButton className="text-white" />
            </SignedOut>
          </ul>
        </nav>
      </div>
    </header>
  );
}