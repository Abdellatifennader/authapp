import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import {
  
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenu
   
  } from "@/components/ui/navigation-menu"
  import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
  
  const Header = () => {
    return (
        <div className="flex items-center justify-center pt-10 ">
        <NavigationMenu >
        <NavigationMenuItem >
        <Link href="/" legacyBehavior passHref >
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </Link>
        <Link href="/about" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            About
          </NavigationMenuLink>
        </Link>
       <SignedIn>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <UserButton/>
          </NavigationMenuLink>
          </SignedIn>

       
          <SignedOut>
     
            <SignInButton/>
      
          </SignedOut>
          
        
      </NavigationMenuItem>
      </NavigationMenu>
      </div>
    )
  }
  
  export default Header
  
