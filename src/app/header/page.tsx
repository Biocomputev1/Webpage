"use client";
import Image from "next/image";
import Logo from "@/app/assets/FullLogoBGremoved.png"
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () =>{
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="w-full h-35 shadow-lg bg-purple-200">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href = "/">
          <Image src={Logo}
          alt = "Logo"
          width = "205"
          height= "75"
          className="cursor-pointer"
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href = "/">
              <li className="ml-10 uppercase hover:border-b text-lg">About us</li>
            </Link>
            <Link href = "/team">
              <li className="ml-10 uppercase hover:border-b text-lg">Our team</li>
            </Link>
            <Link href = "/contact">
              <li className="ml-10 uppercase hover:border-b text-lg">Contact us</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25}/>
        </div>
      </div>
      <div className={
        menuOpen?"fixed left-0 top-0 w-[65%] sm:hidden h-[33%] bg-[#EFE4F4] p-10 ease-in duration-500 rounded-xl shadow-lg"
        : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }>
        <div className="flex w-full items-center justify-end">
        <Link href = "/">
          <Image src={Logo}
          alt = "Logo"
          width = "180"
          height= "75"
          className="cursor-pointer"
          />
        </Link>
          <div onClick={handleNav} className="cursor-pointer ml-10">
            <AiOutlineClose size={25}/>
          </div>
        </div>
        
        <div className="flex-col py-4">
          <ul>
            <Link href = "/">
              <li onClick={()=>setMenuOpen(false)}
                className="py-4 cursor-pointer uppercase"
              >
                Home
              </li>
            </Link>
            <Link href = "/">
              <li onClick={()=>setMenuOpen(false)}
                className="py-4 cursor-pointer uppercase"
              >
                About us
              </li>
            </Link>
            <Link href = "/team">
              <li onClick={()=>setMenuOpen(false)}
                className="py-4 cursor-pointer uppercase"
              >
                Our Team
              </li>
            </Link>
            <Link href = "/contact">
              <li onClick={()=>setMenuOpen(false)}
                className="py-4 cursor-pointer uppercase"
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
