"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/app/sections/hero-highlight";
import Image from "next/image";
import Card1 from "@/app/assets/card1image.png"
import Card2 from "@/app/assets/card2image.png"
import Card3 from "@/app/assets/card3image.png" 
import EarlyAccess from "@/app/assets/earlyAccessImage.png";
import Pointer from "@/app/assets/pointer image.png";
import { OurPartners } from "@/app/sections/ourpartners";
import { SubstackPosts } from "@/app/sections/blog";
import { useRouter } from "next/navigation";
export const Hero = () => {
    const router = useRouter();
    const handleClick = () => {
      router.push("/signup");
    };
    return (
    <>
    <div className="right-0">
        <section className="dark:bg-gray-900">
        <div className="mr-auto place-self-center -mb-60">
            <HeroHighlight>
                <motion.h1
                    initial={{
                    opacity: 0,
                    y: 20,
                    }}
                    animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                    }}
                    transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className= "text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto text-large text-bold mt-[-5rem] lg:mt-[-10rem] font-inter">
                    The Future of {" "}
                    <Highlight className="text-black dark:text-white">Data Storage is DNA</Highlight>
                </motion.h1>
            </HeroHighlight>
        </div>              
        </section>
        <OurPartners/>
        <section className="bg-white">
            <h1 className="text-3xl text-center font-bold font-inter">Why DNA Storage</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 py-10 sm:grid-cols-1 justify-items-center">
                <div className="w-[305px] h-[430px] bg-white border-purple-500 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 shadow-purple-500 transition delay-50 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg">
                    <Image src={Card1} alt="Card1" />
                    <div className="p-5">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Ultra dense</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Store extra bytes of data in a single gram.</p>
                    </div>
                </div>
                <div className="w-[305px] h-[430px] bg-white border-pruple-500 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 shadow-purple-500 transition delay-50 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg">
                    <Image src={Card2} alt="Card1" />
                    <div className="p-5">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Forever Archive</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Stable data sotrage for thousand years</p>
                    </div>
                </div>
                <div className="w-[305px] h-[430px] bg-white border-purple-500 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 shadow-purple-500 transition delay-50 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg">
                        <Image src={Card3} alt="Card1" />
                    <div className="p-5">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Environmentally sustainable</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Minimal need for electricity and cooling.</p>
                    </div>
                </div>
            </div>
        </section>
        <div className="bg-[#EFE4F4] p-8 flex flex-col md:flex-row items-center gap-8 ">
            <div className="md:w-1/2 mx-10 w-full">
                <h2 className="text-3xl font-bold text-gray-900 font-inter">
                Get Early Access to DNA Data Storage
                </h2>
                <p className="text-gray-600 mt-4 font-inter">
                We’re launching our early access program for select partners. Sign up now
                to:
                </p>
                <ul className="mt-4 space-y-3">
                <li className="flex items-center space-x-2">
                <Image src={Pointer} alt="Pointer" className="w-4 h-auto mr-2 mt-1" />
                    <span className="font-semibold text-base font-inter">
                    Store your first 1 GB of data in DNA at our facility
                    </span>
                </li>
                <li className="flex items-center space-x-2">
                <Image src={Pointer} alt="Pointer" className="w-4 h-auto mr-2 mt-1" />
                    <span className="font-semibold text-base font-inter">
                    Be part of the data storage revolution
                    </span>
                </li>
                <li className="flex items-center space-x-2">
                <Image src={Pointer} alt="Pointer" className="w-4 h-auto mr-2 mt-1" />
                    <span className="font-semibold text-base font-inter">
                    Future-proof your data before the industry catches up.
                    </span>
                </li>
                </ul>
                <button onClick={handleClick} className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-lg bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50 my-8">
                    <span className="z-10 pr-2">Sign up</span>
                    <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-lg bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
                        <div className="mr-3.5 flex items-center justify-center">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-50">
                                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
            {/* Image on the Right */}
            <div className="w-full mt-6 md:mt-0 flex justify-center">
                <div className="w-full max-w-md">
                    <Image 
                    src={EarlyAccess}
                    alt="Early Access"
                    className="w-[1000px] h-[400px] rounded-lg shadow-xl shadow-purple-700/50"
                    />
                </div>
            </div>
        </div>
        <SubstackPosts/>
    </div>
    </>
    );
}
