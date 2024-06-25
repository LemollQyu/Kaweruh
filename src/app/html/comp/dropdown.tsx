"use client"

import React from 'react'

import {useState} from "react"


export default function Dropdown({children, link}:any) {
	
	const [tinggi, setTinggi] = useState("h-14")
	const [down, setDown] = useState("")
	const [ada, setAda] = useState("opacity-0")
	
	const handleDrop = (e:any) => {
		e.preventDefault()
		
		if( tinggi == "h-14") {
			setTinggi("h-[600px]")
			setAda("opacity-1")
		} else {
			setTinggi("h-14")
			setAda("opacity-0")
		}
	}
	
	return (
		<>
			
				<div onClick={handleDrop} className={`${tinggi} border-dashed border-x-[1.9px] w-full transition-all duration-1000 relative overflow-hidden px-5  lg:px-10`}>
					
				
				
					
					<div className={`transition-all mt-16 duration-600 w-full ${ada} lg:w-[500px] mt-10 h-[300px] mx-auto`}>
						 
						 <iframe className="w-full h-full object-cover" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
					</div>
					
					
					
					{children}
						
						 
					
				</div>
				
				

			
		</>
	)
}