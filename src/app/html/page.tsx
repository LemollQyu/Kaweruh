"use client"

import React from 'react'
import ReactPlayer from 'react-player'

import {useState} from "react"

const Html = () => {
	const [tinggi, setTinggi] = useState("h-10")
	
	const handleDrop = (e) => {
		e.preventDefault()
		
		setTinggi("h-")
	}


	return (
		<>
			<div className="lg:px-24 px-3 w-full border-dashed border-b-[1.9px]">
				
					
				<div className="border-dashed border-x-[1.9px]">
					<div className="border-blue-600 border-l pl-5 absolute top-28">
						<h1 className="text-blue-600">HTML</h1>
					</div>
				</div>
				
			</div>

			<div className="border-dashed border-b-[1.9px] w-full lg:px-24 px-5">
				<div className="w-full border-x-[1.9px] border-dashed " >
					<h1 className="w-[750px] border-dashed border-r-[1.9px] text-2xl font-bold font-Alliance py-2">Holistic web development partners of SaaS & Ecommerce companies                 We develop websites that develop businesses.</h1>
				
				</div>
			
			</div>
			
			<div className="lg:px-24 px-5 border-dahsed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] w-full flex items-center">
					<div className="w-[374px] h-[174px] border-r-[1.9px] border-dashed items-end flex">
						<p className="w-3/4">Combining deep research, and latest web design practices - we build performing websites - both marketing + tech wise.</p>
					</div>
					<div className="w-[374px] h-[174px]"></div>
					<div className="w-[374px] h-[174px] border-l-[1.9px] border-dashed"></div>
				</div>
			</div>
			
			<div className="lg:px-24 px-5 border-dahsed border-b-[1.9px] w-full">
				<div onClick={handleDrop} className={`${tinggi} border-dashed border-x-[1.9px] w-full`}>
					
					 <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
						
						 
					
				</div>
			</div>
		</>
	)
}

export default Html;