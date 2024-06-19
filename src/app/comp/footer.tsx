"use client"

import Link from "next/link"

export default function Footer () {
	return (
		<>
			<div className="lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px]">
					<div className="lg:grid grid-cols-4 gap-4 hidden md:hidden">
					  <div className="border-dashed border-r-[1.9px] h-20"></div>
					  <div className="border-dashed border-r-[1.9px] h-20"></div>
					  <div className="border-dashed border-r-[1.9px] h-20"></div>
					  <div className="h-20"></div>
					</div>
					
					<div className="h-20 md:block block lg:hidden w-full"></div>
				</div>
			</div>
			
			<div className="lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px]">
					<div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-2 gap-4 h-full pt-10 lg:pt-0 lg:pb-0 pb-20 lg:h-80">
					  <div className="border-dashed md:border-r-none lg:border-r-[1.9px]  pt-5">
						<h1 className="border-l-2 border-blue-600 pl-5 font-[Alliance] text-xl">Kaweruh</h1>
					  </div>
					  <div className="border-dashed md:border-r-none lg:border-r-[1.9px] pl-5 pt-5 ">
						 <h1 className=" font-[Alliance] text-lg">Services</h1>
						 <ul className="mt-5">
							<li>
								<Link className="text-gray-500 font-[Ubuntu] text-sm font-extralight" href="/html">HTML</Link>
							</li>
							<li>
								<Link className="text-gray-500 text-sm font-[Ubuntu] font-extralight" href="/css">CSS</Link>
							</li>
							<li>
								<Link className="text-gray-500 text-sm font-extralight font-[Ubuntu]" href="/javascript">Javascript</Link>
							</li>
						 </ul>
						 
						 <h1 className="mt-8  text-lg font-[Alliance] ">Location</h1>
						 <ul className="mt-5">
							<li>
								<h1 className="text-gray-500 font-[Ubuntu] text-sm font-extralight">Indonesia</h1>
							</li>
							<li>
								<h1 className="text-gray-500 mt-1 text-sm font-[Ubuntu] font-extralight">Central Java</h1>
							</li>
							<li>
								<h1 className="text-gray-500 mt-1 text-sm font-extralight font-[Ubuntu]">Semarang</h1>
							</li>
						 </ul>
	

					  </div>
					  <div className="border-dashed md:border-r-none lg:border-r-[1.9px] pl-5 pt-5 ">
						 <h1 className=" font-[Alliance] text-lg">Company</h1>
						 <ul className="mt-5">
							<li>
								<Link className="text-gray-500 font-[Ubuntu] text-sm font-extralight" href="/about">About</Link>
							</li>
							
						 </ul>
	

					  </div>
					  <div className="pl-5 pt-5 ">
						 <h1 className=" font-[Alliance] text-lg">Community</h1>
						 <ul className="mt-5">
							<li>
								<Link className="text-gray-500 font-[Ubuntu] text-sm font-extralight" href="community/html">HTML</Link>
							</li>
							<li>
								<Link className="text-gray-500 text-sm font-[Ubuntu] font-extralight" href="community/css">CSS</Link>
							</li>
							<li>
								<Link className="text-gray-500 text-sm font-extralight font-[Ubuntu]" href="community/javascript">Javascript</Link>
							</li>
						 </ul>
	

					  </div>
					</div>
				</div> 
			</div>
			
			<div className="lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px]">
					<div className="flex gap-4 md:h-20 h-28  w-full md:flex-row flex-col justify-arounds">
						<div className=" border-r-[1.9px] w-full lg:pt-0 pt-2   border-dashed flex  flex-col justify-center">
							<h1 className="font-[Ubuntu] lg:text-start text-center">Stay up to date</h1>
							<p className="text-sm font-[Ubuntu] lg:text-start text-center text-gray-500">Receive Growth OpenLetter once a month. No spam, only value</p>
						</div>
						<div className="flex items-center justify-center w-full">
							<div className='flex w-full md:w-3/4 items-center border-dashed focus:border-2 rounded-lg border-[1.9px] '>
								<input placeholder="Your Email" className="w-3/4  h-10 px-3 rounded-lg " />
								<button className="border  px-2 py-1 inline-block w-1/4 h-10 rounded-lg">Subscribe</button>
							</div>
						</div>
					</div>
				</div>
				<div className="border-dashed border-t-[1.9px] border-x-[1.9px] flex items-center h-20">
				
				<p className="text-gray-500 text-sm">© 2024 Kaweruh Partners LTD. All rights reserved.</p>
				
				</div>
			</div>
			
			
		</>
	
	)

}