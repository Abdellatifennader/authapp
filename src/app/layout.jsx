import "./globals.css";
import Header from "../components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Auth App',
  description: 'Next auth with clerk and mongodb',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
         
          
          <Header/>
            {children}
       
        </body>
      </html>
    </ClerkProvider>
  );
}