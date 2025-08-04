"use client";
import Image from "next/image";
import Logo from "@/app/assets/FullLogoBGremoved.png"
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
export default function Header (){
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () =>{
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="w-full h-40 shadow-lg bg-purple-200">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href = "/">
          <Image src={Logo}
          alt = "Logo"
          width = "300"
          height= "75"
          className="cursor-pointer transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100"
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href = "https://blog.biocomputeinc.com/about">
              <li className="ml-10  transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 text-lg font-sans">About Us</li>
            </Link>
            <Link href = "/team">
              <li className="ml-10  transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 text-lg font-sans">Our Team</li>
            </Link>
            <Link href = '/faq'>
              <li className="ml-10  transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 text-lg font-sans">FAQ</li>
            </Link>
            <Link href = "/contact">
              <li className="ml-10  transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 text-lg font-sans">Contact Us</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25}/>
        </div>
      </div>
      <div className={
        menuOpen?"fixed left-0 top-0 w-[68%] sm:hidden md:h-[80%] bg-[#EFE4F4] p-10 ease-in duration-500 rounded-xl shadow-lg"
        : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }>
        <div className="flex w-full items-center justify-end">
        <Link href = "/">
          <Image src={Logo}
          alt = "Logo"
          width = "150"
          height= "75"
          className="cursor-pointer"
        />
        </Link>
          <div onClick={handleNav} className="cursor-pointer ml-8">
            <AiOutlineClose size={25}/>
          </div>
        </div>
        <div className="flex-col py-2">
          <ul className="cursor-pointer uppercase">
            <Link  href="/" onClick={() => setMenuOpen(false)}>
              <li>
                Home
              </li>
            </Link>
            <Link href="https://blog.biocomputeinc.com/about" onClick={() => setMenuOpen(false)}>
              <li className="py-1 font-sans">
                About us
              </li>
            </Link>
            <Link href="/team" onClick={() => setMenuOpen(false)}>
              <li className="font-sans">
                Our Team
              </li>
            </Link>
            <Link href="/faq" onClick={() => setMenuOpen(false)}>
              <li className="font-sans">
                FAQ
              </li>
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <li className="py-1 font-sans">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
