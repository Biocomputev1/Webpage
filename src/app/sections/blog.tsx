import Link from 'next/link';
import Image from 'next/image';
import blogimage1 from '@/app/assets/blogimage1.png';
import blogimage2 from '@/app/assets/ourstoryimage.png'
export default function SubstackPosts ()  {
    return (
        <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-4xl font-inter font-bold text-center mb-16">Our Story</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className=" border-2 border-neutral-400 rounded-xl w-auto  h-auto overflow-hidden shadow-md transition delay-50 duration-500 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-lg">
            <Link href = "https://www.biocomputeinc.com/p/coming-soon?r=5esdg7&utm_campaign=post&utm_medium=web">
            <Image src = {blogimage1} alt="BioCompute Logo" className="border-2 rounded-xl border-neutral-300"/>
            <h2 className="text-xl font-inter mt-6 mb-2 mx-10">Hello World, We Are BioCompute!</h2>
            <p className="text-gray-600 mb-4 mx-10">Prologue</p>
            </Link>
          </div>
          {/* Right Card */}
          <div className="border-2 border-neutral-400 bg-white rounded-xl w-auto h-auto overflow-hidden shadow-md transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-lg">
            <Link href = "https://www.biocomputeinc.com/p/a-primer-on-dna-no-pun-intended?utm_campaign=post&utm_medium=web">
            <Image src={blogimage2} alt="DNA Double Helix" className='border-2 rounded-xl border-neutral-300'/>
            <h2 className="text-xl font-inter mt-6 mb-2 mx-10">A Primer on DNA (no pun intended)</h2>
            <p className="text-gray-600 mb-8 mx-10">It&apos;s been a week since we announced</p>
            <p className = "text-gray-600 -mt-8 mb-4 mx-10">BioCompute to the world</p>
            </Link>
          </div>
        </div>
        <div className="text-right w-full mt-6 ">
            <Link href="https://www.biocomputeinc.com/archive" className="bg-black text-white px-6 py-3 mr-4 rounded-lg font-medium inline-block transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-lg">
                Explore More &gt;
            </Link>
        </div>
      </section>
    );
};
