import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
    return (
      <header className='bg-white flex items-center justify-center'>
        <div className='max-w-6xl mx-auto flex justify-between mx-20 items-center pt-3'>
          {/* logo */}
          <Link href='/' className='text-2xl  text-gray-500 font-extrabold group cursor-pointer'>
            <span className='text-transparent bg-clip-text '>
              Auth
            </span>
            <span className='text-transparent bg-clip-text text-gray-500'>
              App
            </span>
          </Link>
          {/* add a navigation menu */}
          <nav>
            <ul className='flex gap-24'>
              <Link href='/'>Home</Link>
              <Link href='/about'>About</Link>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
