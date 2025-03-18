"use client";
import Logo from "@/app/assets/logo.svg";
import BioComputeLogo from "@/app/assets/BioComputeLogo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };
  return (
  <nav className="flex items-center justify-between flex-wrap p-6 w-full bg-[#EFE4F4] h-[150px]">
    <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
      <Image src={Logo} alt="Logo" width={50} height={50} />
      <Image src={BioComputeLogo} alt="BioCompute Logo" width={280} height={50} />
    </div>
    <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
        <svg
           className={`fill-current h-7 w-7 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        <svg
           className={`fill-current h-7 w-7 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
       </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
      >
      <div className="text-sm lg:flex-grow flex justify-end gap-20 mr-20">
        <Link href = "https://www.biocomputeinc.com/about">
          <p className="text-black text-lg font-medium">About</p>
        </Link>
        <Link href = "/team">
          <p className="text-black text-lg font-medium">Our Team</p>
        </Link>
      </div>
      <div>
        <button onClick={handleClick} type = "button"className="px-4 py-1 font-medium text-xl text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200">
          Contact us
        </button>
      </div>
    </div>
  </nav>
  );
};
