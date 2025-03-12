'use client';
import Image from "next/image";
import WTF from "@/app/assets/wtfweb.png"
import BITS from "@/app/assets/Bits.png"
import Meity from "@/app/assets/meity.png"
import GC from "@/app/assets/Gradcap.png"
import Nucleate from "@/app/assets/Nucleate.png"
import CCAMP from "@/app/assets/ccamp.png"
import DST from "@/app/assets/nidhi.jpg"
import Savant from "@/app/assets/Savant.svg"
import Susmafia from "@/app/assets/susmafia.png"
import Meractus from "@/app/assets/Meractus.png"
import {motion} from "framer-motion";
export const OurPartners = () =>{
    return(
        <>
            <h1 className="text-4xl text-center font-bold font-inter pb-20">We are backed by</h1>
            <div className="w-full mb-20 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <motion.div
                className="flex gap-14 flex-none pr-14"
                animate = {{
                    translateX: "-50%",
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                >
                    <Image src= {WTF} className="w-[180px] h-[50px]" alt="WTF" />
                    <Image src={BITS} className="w-[180px] h-[70px]" alt="BITS Pilani" />
                    <Image src={Meity} className = "w-[150px] h-[70px]"alt="Meity" />
                    <Image src={GC} className = "w-[200px] h-[50px]" alt="Grad capital" />
                    <Image src={Nucleate} className = "w-[240px] h-[40px]" alt="Nucleate" />
                    <Image src={CCAMP} className = "w-[180px] h-[60px]" alt="CCAMP" />
                    <Image src={DST} className = "w-[180px] h-[60px]" alt="DST NIDHI" />
                    <Image src={Savant} className = "w-[180px] h-[60px]" alt="Savant" />
                    <Image src={Susmafia} className = "w-[200px] h-[60px]" alt="Susmafia" />
                    <Image src={Meractus} className = "w-[180px] h-[60px]" alt="Meractus" />  

                    {/*Second set*/}

                    <Image src= {WTF} className="w-[180px] h-[50px]" alt="WTF" />
                    <Image src={BITS} className="w-[180px] h-[70px]" alt="BITS Pilani" />
                    <Image src={Meity} className = "w-[150px] h-[70px]"alt="Meity" />
                    <Image src={GC} className = "w-[200px] h-[50px]" alt="Grad capital" />
                    <Image src={Nucleate} className = "w-[240px] h-[40px]" alt="Nucleate" />
                    <Image src={CCAMP} className = "w-[180px] h-[60px]" alt="CCAMP" />
                    <Image src={DST} className = "w-[180px] h-[60px]" alt="DST NIDHI" />
                    <Image src={Savant} className = "w-[180px] h-[60px]" alt="Savant" />
                    <Image src={Susmafia} className = "w-[200px] h-[60px]" alt="Susmafia" />
                    <Image src={Meractus} className = "w-[180px] h-[60px]" alt="Meractus" />  
                </motion.div>           
            </div>
        </>
    );
};