import { useRef, useState, FC } from "react"

import { ReactNode } from "react"

interface FaqItem {
    q: string
    a: string | ReactNode
}

interface FaqsCardProps {
    faqsItem: FaqItem
    idx: number
}

const FaqsCard: FC<FaqsCardProps> = ({ faqsItem, idx }) => {
    const answerElRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [answerH, setAnswerH] = useState('0px')

    const handleOpenAnswer = () => {
        if (answerElRef.current?.firstElementChild) {
            const answerHeight = answerElRef.current.firstElementChild.scrollHeight
            setIsOpen(!isOpen)
            setAnswerH(`${answerHeight + 20}px`)
        }
    }

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsItem.q}
                {
                    isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef}
                className="duration-300"
                style={isOpen ? { height: answerH } : { height: '0px' }}
            >
                <div className="text-gray-700">
                        {faqsItem.a}
                </div>
            </div>
        </div>
    )
}

const FaqSection: FC = () => {
    const faqsList: FaqItem[] = [
        {
            q: "Does DNA have life? ",
            a: "No. DNA is a chemical molecule that acts as a storage medium for information within living cells. DNA gives instructions to produce multiple proteins that are essential for an organism to survive (and possibly thrive). Cells cannot live without DNA (of course red blood cells and platelets are exceptions, they don’t even have DNA). But DNA does not need the cell to survive. "
        },
        {
            q: "Is DNA unstable? ",
            a: "DNA is highly stable due to its double helix structure held together by hydrogen bonds. We have been able to retrieve DNA from fossils that are millions of years old and have been exposed to severe geophysical conditions.However, exposure to moisture and oxygen can break the phosphodiester bonds in DNA. So we need to maintain an inert environment to ensure stability."
        },
        {
            q: "How exactly can digital data go into DNA?",
            a: "The digital data we have today is in the binary form - composed of 0s and 1s. This data is then converted to a DNA sequence with the four base pairs. There are different ways to do this conversion. One example is to map 00 to A, 01 to G, 10 to C and 11 to T (or any combination of this). This DNA sequence is then generated chemically and stored securely."
        },
        {
            q: "Does DNA data storage mean living organisms walking around with data in their bodies? Are we all turning into cyborgs?",
            a: "No. Theoretically we could store data in human cells, but then DNA has to be extracted from the cell for us to be able to read and write. Grow Your Own Cloud stores data in plants - this is a series of art installations, but possibly cannot be scaled for commercial purposes. The DNA being used for data storage is usually chemically synthesized. At BioCompute, we are experimenting with a different approach (more on this in a later article) but nevertheless data is not going to be stored in living organisms."
        },
        {
            q: "How hard is it to read and write DNA?",
            a: (
                <ul className="list-disc space-y-2 pl-5 text-gray-500">
                <li>
                    <strong>Reading DNA:</strong> Done using sequencing equipment. There are three main techniques:
                    <ul className="list-disc pl-5">
                    <li>Sanger Sequencing</li>
                    <li>Next Generation Sequencing (NGS)</li>
                    <li>Nanopore Sequencing</li>
                    </ul>
                </li>
                <li>
                    <strong>Sequencing Methods:</strong>
                    <ul className="list-disc pl-5">
                    <li>Sanger and NGS rely on chemical reactions</li>
                    <li>Nanopore sequencing uses fluctuations in an electric field</li>
                    </ul>
                </li>
                <li>
                    <strong>Sequencing Cost:</strong>
                    <ul className="list-disc pl-5">
                    <li>2007: ~$1 million per human genome (1 GB)</li>
                    <li>2014: ~$1000</li>
                    <li>2023: ~$600</li>
                    </ul>
                </li>
                <li>
                    <strong>Writing DNA:</strong> Involves chemical synthesis using:
                    <ul className="list-disc pl-5">
                    <li>Phosphoramidite synthesis</li>
                    <li>Enzyme synthesis</li>
                    </ul>
                </li>
                <li>
                    <strong>Cost of writing DNA:</strong> ~$400 million for 1 TB of data</li>
                <li>
                    <strong>Bottlenecks:</strong> DNA synthesis is slow, but microarrays enable parallel synthesis</li>
                <li>
                    <strong>Read/Write Speed:</strong>
                    <ul className="list-disc pl-5">
                    <li>Read: 5 hrs 2 mins per billion base pairs (~1 GB)</li>
                    <li>Write: 18 MB/s</li>
                    </ul>
                </li>
                <li>
                    <strong>Cold Storage Focus:</strong> Since access time isn&apos;t critical, speed isn&apos;t the top priority</li>
                </ul>
            )
        },
        {
            q: "How fast are the read/write speeds in DNA? Can we make it faster?",
            a: (
                <ul>
                    <li>
                        As of today, the fastest read speed is 5 hours and 2 minutes to read a billion base pairs, equivalent to 1GB of data. The fastest write speed is 18 MB per second.
                    </li>
                    <li>
                        Yes, we can make it faster and that is a part of what we are working on at BioCompute. 
                    </li>
                    <li>
                        Currently the focus is on leveraging DNA data storage for cold storage applications, where the data does not need to be accessed for extended periods of time. This implies that read and write speeds may not be the most important parameters for cold storage.
                    </li>
                </ul>
                   
            )
            },
        {
            q: "Is reading and writing DNA only applicable to data storage?",
            a: (
                <ul>
                    <li>
                        No. Reading of DNA is done on a regular basis to classify newly identified species, map family trees across generations, and diagnose diseases. The Human Genome Project is an interesting use case for sequencing.
                    </li>
                    <li>
                        Writing DNA is done for various applications such as gene cloning to introduce or knock off certain traits in different organisms especially bacteria, forensics and sensing. Reading DNA is more widely used than writing, this partly explains why DNA synthesis is more expensive today than sequencing.
                    </li>
                    <li>
                        Reading and writing DNA are on demand for multiple applications thus incentivizing different players in the market to innovate on the accuracy and speed of DNA read/write functions. 
                    </li>
                </ul>
            )
        },
        {
            q: "Is DNA storage the only way to get to biocompute?",
            a: "Not really. There are groups working on making logic gates using different protein folding mechanisms. The Unconventional Computing Lab at the University of West England is working on using fungal networks and the electrical impulse conducted through these networks for data storage especially for sensing applications. There are multiple other interesting nature-derived compute options. We decided to start out with DNA because it is the most-widely studied (and hence more widely understood) biomolecule and because we now have the tools to control DNA in specifically engineered chemical environments."
        },
    ]

    return (
        <section className="bg-[#EFE4F4] p-6 w-screen leading-relaxed max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl  sm:mx-8  md:mx-16 lg:mx-24 xl:mx-40 max-w-screen-xl mx-auto">
                <div className="space-y-3 text-center">
                    <h1 className="text-3xl pt-12 text-gray-800 font-semibold">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-gray-600 max-w-lg mx-auto text-lg">
                        You Asked, We Sequenced, Because Googling &apos;DNA Storage&apos; Can Get Weird.
                    </p>
                </div>
                <div className="mt-14 max-w-2xl mx-auto p-4">
                    {
                        faqsList.map((item, idx) => (
                            <FaqsCard key={idx} idx={idx} faqsItem={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FaqSection
