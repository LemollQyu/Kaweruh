"use client"

import React from 'react'
import Marquee from 'react-fast-marquee'
import Dropdown from "./comp/dropdown"
import Image from "next/image"

const Html = () => {

	
	const list = [
'https://youtu.be/CleFk3BZB3g?si=2IE4BYQfkHy2JX36',
'https://youtu.be/8lXDi2Mxp9c?si=2kFLxDUq5D4l8w8p',
'https://youtu.be/bnnislprJro?si=moDS9QkmQVvO2Feo',
'https://youtu.be/nPHed3_oPvY?si=WP_IgXPLSCCbCUNi',
'https://youtu.be/xih8giA7S3Q?si=auTlsjMEF6gblLkk',
'https://youtu.be/zm-HPYS_ELU?si=aPjSh-cyJ1h6q0Ov',
'https://youtu.be/0KLwWyQyMQo?si=Yez2Y-GaPWjCnNkL',
'https://youtu.be/G0gYWdIHOug?si=TC5rh68dVT6-2PK1',
'https://youtu.be/kY2FEA3y43E?si=roO4i-HVk7OIG_hi',
'https://youtu.be/yu74Y1ndd5w?si=27BPjWh1c4LX5nyN',
			
	]
	
	const listModulHtml = [
			"Pendahuluan",
			"Anatomi CSS",
			'Penempatan CSS',
			'Font styling',
			'Text styling',
			'Background',
			'Selector',
			'Pseudo class', 
			'Inheeitance',
			'Spesificity'
			
			
			
	]

	return (
		<>
			<div className="lg:px-24 px-3 w-full ">
				
					
				<div className="border-dashed border-x-[1.9px]">
					<div className="border-blue-600 border-l pl-5 absolute top-28">
						<h1 className="text-blue-600">CSS</h1>
					</div>
				</div>
				
			</div>

			<div className="border-dashed border-b-[1.9px] w-full lg:px-24 px-3">
				<div className="w-full border-x-[1.9px] border-dashed " >
					<h1 className="lg:w-[750px] w-full md:border-dashed md:border-r-[1.9px] text-2xl font-bold font-Alliance py-2">Holistic web development partners of SaaS & Ecommerce companies                 We develop websites that develop businesses.</h1>
				
				</div>
			
			</div>
			
			<div className="lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] w-full flex items-center">
					<div className="w-[374px] h-[174px] lg:border-r-[1.9px] border-dashed items-end flex">
						<p className="w-3/4">Combining deep research, and latest web design practices - we build performing websites - both marketing + tech wise.</p>
					</div>
					<div className="lg:block hidden w-[374px] h-[174px]"></div>
					<div className="lg:block hidden w-[374px] h-[174px] border-l-[1.9px] border-dashed"></div>
				</div>
			</div>
			
			<div className=" lg:px-24 px-3 sm:hidden md:block border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] h-20 w-full flex items-center">
				</div>
			</div>
			
			<div className="mb-5 lg:px-24 px-3 hidden md:block border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] w-full flex items-center">
					<div className="w-[523px] h-[339px]">
						<Image 
							src="/code.svg"
							className="w-full h-full object-cover"
							width={100}
							height={100}
							alt="code HTML"
						/>
					</div>

				</div>
			</div>
			
			<div className="lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
				<Marquee>
					<p className="font-Write">
						consectetur adipiscing elit. In laoreet lacinia tellus in viverra. Suspendisse nec sagittis enim, et tincidunt nulla. enim, et tincidunt nulla.
					</p>
				</Marquee>
			</div>
			
			<div className="lg:px-24 h-14 px-3 border-dashed border-b-[1.9px] w-full">
			</div>
			
			
			
		
			
		
			
			{
				list.map((collect,index) => {
					return (
					
					<>
					
					<div key={index} className="group relative lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
						<div className="group-hover:shadow-md focus:shadow-md dark:focus:shadow-[#2d3e50] dark:group-hover:shadow-[#2d3e50] transition-all duration-600 items-center rounded-full absolute  right-5 h-10 left-5 lg:right-28 lg:left-28 flex gap-2 bg-gray-300/[0.2] dark:bg-gray-100/[0.2] top-2 px-3 shadow" >
							<h1 className="font-Write">{index+1}</h1>
							<h1 className="font-Ubuntu">{listModulHtml[index]}</h1>
						</div>
						
						<Dropdown link={collect} />
					</div>
					</>
					
					
					)
				})
			}
			
			<div className="lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] w-full flex items-center">
					kjdfbvksjadbgf
				</div>
			</div>
			
			
			<div className="h-[300px]"></div>
		</>
	)
}

export default Html;