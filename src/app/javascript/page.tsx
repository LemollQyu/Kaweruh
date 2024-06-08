"use client"

import React from 'react'
import Marquee from 'react-fast-marquee'
import Dropdown from "./comp/dropdown"
import Image from "next/image"

const Html = () => {

	
	const list = [
'https://youtu.be/To1O7QFe-2E?si=cPkeFIFRYF76Pj-U',

'https://youtu.be/9XmupjKG8JA?si=7dFqbI00cSjqR2La',


'https://youtu.be/CRQgeG2gick?si=bTnAyul__Z13asNZ',
'https://youtu.be/uZbJX7DNjWo?si=FJ2oAiAhwLMAMccK',


'https://youtu.be/UAptUH-fRkk?si=mJ_w3wIP4Q0BVbkl',


'https://youtu.be/j_te8wLdbi4?si=RvrVrm7TZ5djIRMC',

 
'https://youtu.be/sdIMR1--EpI?si=a5t07C26I2T--ZZe',

 
'https://youtu.be/X06Rm2Cjg5M?si=tw4y9119x0qWVLMe',

 
'https://youtu.be/Kw7qrDKPq04?si=NTqGehI_OELmIzXK',
'https://youtu.be/LpGmLI4TF3c?si=D2VvErb1bCtH8hpC',

 
'https://youtu.be/-rDLrwdKAVw?si=8Es0Jhe46ghhuPuc',

'https://youtu.be/e_abMWHcWSM?si=nc2mp6HEc4GoEzhM',

 
'https://youtu.be/sIJKIwWhOtc?si=l64YzzkwtVDOqIy_',

 
'https://youtu.be/Ng_C7GBswF0?si=pTsLzU4FD3Z_k7JV',


'https://youtu.be/Jli5dSUqQIc?si=1wz5XOnlfT3MhD4J',
'https://youtu.be/YE4RY1UrI_Q?si=YDPW12CY4UwAhIHG',

 
'https://youtu.be/ZUM9_2UKGFs?si=y5W-8CQTz0sxSebP',

 
'https://youtu.be/ocjs7gDZR6w?si=H_fp6NJn-xRTbZyl',

 
'https://youtu.be/gKnd7wgd3Co?si=8DADDdR1lHnSTUe6',


'https://youtu.be/mr5-Y99mRpc?si=OdsW-BJeseNhLrPp',

 
'https://youtu.be/0cULPoVKlcc?si=t0isZks9x1bOo4kD',


'https://youtu.be/wEdcVPlVJ0Q?si=1okTSHWygng6_ONs'


			
	]
	
	const listModulHtml = [
				
'Persiapan belajar js',
'Debugging tools',
'Membuat Variabel 1',
'Membuat Variabel 2',
'Tipe data',
'Mengubah tipe data ke dalam string',
'Mengubah tipe data ke dalam number',
'Angka dan objek matematika',
'Memanipulasi nilai string 1',
'Memanipulasi nilai string 2',
'Membuat elemen HTML dengan template string',
'Tipe data array beserta method',
'Tipe data object',
'Menampilkan tanggal dan waktu',
'If statemen dan operator pembanding 1',
'If statemen dan operator pembanding 2',
'Statement switch',
'Function',
'Perulangan',
'Window objek',
'Lingkup var, let dan cons variable',
'Reduce'



			
			
			
	]

	return (
		<>
			<div className="lg:px-24 px-3 w-full ">
				
					
				<div className="border-dashed border-x-[1.9px]">
					<div className="border-blue-600 border-l pl-5 absolute top-28">
						<h1 className="text-blue-600">Javacript</h1>
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