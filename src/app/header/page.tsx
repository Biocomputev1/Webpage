"use client";
import Logo from "@/app/assets/logo.svg";
import BioComputeLogo from "@/app/assets/BioComputeLogo.svg";
import MenuIcon from "@/app/assets/menu-svgrepo-com.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };
  return (
    <header className="top-0">
      <div className="w-full bg-[#EFE4F4] h-[164px]">
        <div className="container mx-auto flex items-center justify-between h-[164px] px-12">
          <div className="flex items-center gap-3">
            <Image src={Logo} alt="Logo" width={50} height={50} />
            <Image src={BioComputeLogo} alt="BioCompute Logo" width={280} height={50} />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href = "https://www.biocomputeinc.com/about">
              <p className="text-black text-lg font-medium">About us</p>
            </Link>
            <Link href = "/team">
            <p className="text-black text-lg font-medium">Our Team</p>
            </Link>
            <button onClick={handleClick} type="button"
                className="rounded-lg w-max h-10 text-[#333] text-m tracking-wider font-medium outline-none border border-[#333]">
                    <div className="flex items-center h-full">
                        <span className="flex-1 px-4 text-black text-lg">Contact us</span>
                        <div className="rounded-lg h-10 bg-black w-12 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="#fff" viewBox="0 0 512 512">
                                <path d="m331.756 277.251-42.881 43.026c-17.389 17.45-47.985 17.826-65.75 0l-42.883-43.026L26.226 431.767C31.959 434.418 38.28 436 45 436h422c6.72 0 13.039-1.58 18.77-4.232L331.756 277.251z" data-original="#000000" />
                                <path d="M467 76H45c-6.72 0-13.041 1.582-18.772 4.233l164.577 165.123c.011.011.024.013.035.024a.05.05 0 0 1 .013.026l53.513 53.69c5.684 5.684 17.586 5.684 23.27 0l53.502-53.681s.013-.024.024-.035c0 0 .024-.013.035-.024L485.77 80.232C480.039 77.58 473.72 76 467 76zM4.786 101.212C1.82 107.21 0 113.868 0 121v270c0 7.132 1.818 13.79 4.785 19.788l154.283-154.783L4.786 101.212zm502.428-.002L352.933 256.005 507.214 410.79C510.18 404.792 512 398.134 512 391V121c0-7.134-1.82-13.792-4.786-19.79z" data-original="#000000" />
                            </svg>
                        </div>
                    </div>
            </button>
          </nav>
          <Image src={MenuIcon} alt="Hamburger" className="h-6 w-6 md:hidden"/>
        </div>
      </div>
    </header>
  );
};
