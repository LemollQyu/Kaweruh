

import React from 'react'
import Marquees from '../comp/marquees'
import Dropdown from "./comp/dropdown"
import Image from "next/image"
import Comment from "../comp/comment"
import Auth from "@/lib/session"
import Link from "next/link"
import BoxIklan from "../comp/boxiklan"
import Project from '../comp/project'
import Philosophy from "../comp/philosophy"
import Footer from "../comp/footer"


const Html = async () => {

	const user = await Auth()
	
	
	
	
	const list = [
			"https://www.youtube.com/embed/NBZ9Ro6UKV8?si=kqscVr-8nWFb_uo6",
			'https://www.youtube.com/embed/1NicaVOCXHA?si=PCeZy_EKWBkpfRz_',
			'https://www.youtube.com/embed/3sLSi9L5nWE?si=Kjxd_cy6bWdJVdJa',
			'https://www.youtube.com/embed/cUWBYzA6M-8?si=P0jx-GZBBjDy8Eoc',
			'https://www.youtube.com/embed/Dl_bIYBc9gM?si=Iee3dq-TwuJW3FcK',
			'https://www.youtube.com/embed/SMetRBdIh-8?si=ORmbxsvpZ6vv2as8',
			'https://www.youtube.com/embed/gLHEoeupIZs?si=-RNKH0tGUYOv_XPd',
			'https://www.youtube.com/embed/QIlBOI-hTuA?si=0R0RafmkKOV9lSne',
			'https://www.youtube.com/embed/yb_emYhY3Pc?si=CbHD_FMRWKQO9lpr',
			'https://www.youtube.com/embed/qs8G2XWf7Yk?si=cnhmfffOQNhsTcag',
			'https://www.youtube.com/embed/qs8G2XWf7Yk?si=xsD6Ayp_Vb-gs1D1',
			'https://www.youtube.com/embed/_CNkLKU-LoE?si=5NsmbsFgmZwBAyo-',
			'https://www.youtube.com/embed/_CNkLKU-LoE?si=wdH9XxR0sXhezqZq'
			
	]
	

	
	const listModulHtml = [
			"Muqodimmah",
			"Membuat File Html",
			"Code Editor",
			"Tag Elemen",
			"Paragraf",
			"Heading",
			"List",
			"Hyperlink",
			"Image",
			"Table",
			"Table Merging",
			"Form 1",
			"Form 2"
			
			
			
	]
	
	

	return (
		<>
			<div className="lg:px-24 px-3 w-full ">
				
					
				<div className="border-dashed border-x-[1.9px]">
					<div className="border-blue-600 border-l pl-5 absolute top-28">
						<h1 className="text-blue-600">HTML</h1>
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
							priority={false}
						/>
					</div>

				</div>
			</div>
			
			 <div className="border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] w-full">
					<Marquees />
				</div>
			</div> 
			
			<div className="lg:px-24 h-14 px-3 border-dashed border-b-[1.9px] w-full">
			</div>
			
	
			{
							user ? 
							<>
								{
									list.map((collect,index) => {
										return (
										
									
										<div key={index}>
										 <div  className="group relative lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
											<div className="group-hover:shadow-md focus:shadow-md dark:focus:shadow-[#2d3e50] dark:group-hover:shadow-[#2d3e50] transition-all duration-600 items-center rounded-full absolute  right-5 h-10 left-5 lg:right-28 lg:left-28 flex gap-2 bg-gray-300/[0.2] dark:bg-gray-100/[0.2] top-2 px-3 shadow" >
												<h1 className="font-Write">{index+1}</h1>
												<h1 className="font-Ubuntu">{listModulHtml[index]}</h1>
											</div>
											
											<Dropdown link={collect} />
										</div> 
											
										</div>
									
										
										
										)
									})
								} 
								
								<Comment user_nama={user?.nama} modul="html" />
							
							</>
							
							:
							<div className="border-dashed border-b-[1.9px] w-full lg:px-24 px-3">
								<div className="w-full border-x-[1.9px] border-dashed p-3" >
									<div className=" flex justify-around py-3 lg:justify-between lg:flex-row flex-col items-center w-full h-28 dark:bg-white/25 border rounded-lg px-5 shadow-inner">
										<p className="lg:text-xl text-sm text-light font-[Alliance]">Silahkan login Untuk melihat materi dan Berdiskusi</p>
										<Link className=" lg:text-l text-sm shadow-inner px-5 border dark:bg-[#232323] rounded-lg py-2" href="/signin">Sign In</Link>
									</div>
								</div>
							</div>
						}
						
						
			
			
			
			
			
		
			
			
			
			<div className="lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] w-full flex h-10 items-center">
					
				</div>
			</div>
			
			<BoxIklan />
			
			<Project />
			
			<div className="lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] w-full h-10">
					
				</div>
			</div>
			
			<Philosophy photo="/haromain.jpg" nama="M Nur Haromaian" anggota="CEO Kaweruh"/>
			
			<div className="lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] w-full h-10">
					
				</div>
			</div>
			
			<Philosophy photo="/jalil.jpg" nama="M Jalilurahman" anggota="Writter, Content" />
			
			<div className="lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] w-full h-10">
					
				</div>
			</div>
			
			<Philosophy photo="/annas.jpeg" nama="Annas Aulia Rahman" anggota="Development"/>
			
			
			
			<Footer />
		</>
	)
}

export default Html;