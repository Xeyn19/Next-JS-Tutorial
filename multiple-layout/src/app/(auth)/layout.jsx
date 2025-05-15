"use client"

import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Footer from "../components/Footer";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  {name:"Register", href: "/register"},
  {name:"Login", href: "/login"},
]

export default function AuthLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <>
          <div className="flex flex-col justify-center min-h-screen items-center space-y-2">
          {navLinks.map((link) => (
            <Link className={`py-3 px-5 
              ${pathname === link.href 
                ? 'bg-black text-red-500' 
                : 'bg-black text-white hover:text-red-500'}`}
            href={link.href} key={link.name}>
              {link.name}
            </Link>
          ))

          }
          {children}
        </div>
       <Footer />
        
        </>
        
      </body>
    </html>
  );
}
