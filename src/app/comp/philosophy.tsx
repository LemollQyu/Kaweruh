'use client'

import Image from "next/image"

export default function Philoshopy ({photo, nama, anggota}) {
	return (
		<>
			<div className="lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px]">
					<div className=" w-full h-full md:h-[300px] md:flex-row flex-col-reverse gap-y-5 md:gap-y-0  justify-between flex p-5 md:p-10 relative group border rounded-lg">
						<div className="md:w-1/4 w-1/2 ">
							<p className="text-lg font-[Ubuntu] font-bold">{nama}</p>
							<p className="font-light text-sm">{anggota}</p>
						</div>
						
						<div className="md:ml-5 ml-0 w-full md:w-2/3 ">
							<p className="font-[Alliance] text-lg">One the key benefits that we have seen from collaboration with the Kaweruh team is their ability provide us with <span className="text-gray-400"> costomized solutions that are tailored to meet the specific needs of our bussines.</span> Their expertise in digital Learning has allowed to reach a wider audience abd increase our sales</p>
						</div>
						
						<div className="group-hover:bg-gray-400 transition-all duration-1000 scale-100 group-hover:scale-125 w-16 md:w-20 md:h-20 h-16 rounded-full  absolute bottom-5 right-5 md:bottom-5 md:right-5 shadow-xl">
							<Image 
								className="w-full h-full rounded-full object-cover shadow-xl grayscale"
								width={500}
								height={500}
								src={photo}
								alt='human'
							/>
						</div>
					</div>
				</div>
			</div>
		
		</>
	)

}