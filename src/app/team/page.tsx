import Image from "next/image";
import Anagha from "@/app/assets/Anaghaupdated.jpeg"
import Akansha from "@/app/assets/Akansha.jpg"
import Ajay from "@/app/assets/Ajay.jpg"
import Naveen from "@/app/assets/Naveen.jpg"
export const Team = () => {
    const team = [
        {
            avatar: Anagha,
            name: "Anagha Rajesh",
            title: "Founder"
        },
        {
            avatar: Akansha,
            name: "Akanksha Dasmohapatra",
            title: "Product Lead"
        },
        {
            avatar: Ajay,
            name: "Ajay Pavan",
            title: "Lead R&D Engineer"
        },
        {
            avatar: Naveen,
            name: "Naveen ",
            title: "Intern"
        },
    ]
    return (                                               
        <section className="py-14 bg-[#EFE4F4]">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto sm:text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Our team
                    </h3>
                </div>
                <div className="mt-12 flex justify-evenly">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-full h-60 sm:h-52 md:h-56">
                                        <Image
                                            src={item.avatar}
                                            className="w-[215px] h-full object-cover object-center shadow-md rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                        <p className="text-neutral-800">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}   

export default Team;