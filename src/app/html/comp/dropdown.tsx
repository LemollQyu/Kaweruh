"use client"

import React from 'react'

import {useState} from "react"


export default function Dropdown({link}:any) {
	
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
					
					<div className="mt-10 w-full px-0 lg:px-16  h-[320px] overflow-y-auto">
						<h1 className="text-xl font-bold">Lor4em I[psu,m Set amet dot lorem ipsum</h1>
						
						<p className="font-Ubuntu text-light text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet lacinia tellus in viverra. Suspendisse nec sagittis enim, et tincidunt nulla. Donec id posuere elit. Maecenas sodales imperdiet tortor, at blandit neque eleifend id. Duis luctus congue rhoncus. Vestibulum velit nunc, viverra in aliquam vel, pellentesque vel massa. Praesent eget mollis tortor. Mauris urna libero, cursus eget tortor non, varius efficitur est. Pellentesque sit amet augue eu dui posuere posuere.

						Donec ornare tempus elit a mollis. Phasellus pharetra vulputate eleifend. Praesent vel nunc id ligula laoreet dictum. Donec faucibus enim sit amet tellus sodales, sit amet laoreet tellus tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam sodales dapibus neque, non interdum sapien dictum nec. Aliquam erat volutpat. Nunc nibh lorem, imperdiet a lacus vel, commodo interdum sapien. Duis pellentesque viverra sapien. Praesent tincidunt rutrum orci ut congue. Fusce orci dolor, pulvinar ut volutpat non, rhoncus id orci. Etiam molestie justo in dapibus ultrices. Integer nec aliquet ex.

						Suspendisse mattis eros ut diam ullamcorper, id suscipit mauris dictum. Nam at metus ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc quis est tincidunt, eleifend turpis vel, consectetur leo. Nam blandit felis volutpat velit posuere, et consectetur ipsum elementum. Morbi eget velit ac leo luctus scelerisque in in lorem. Curabitur fringilla egestas diam, ac fermentum elit tempor dapibus. Sed vitae quam ut elit faucibus interdum ut vitae augue. Sed vitae risus ac lorem congue bibendum ut eu eros. Donec facilisis maximus ante eu tincidunt. Morbi tortor metus, ullamcorper vitae elit et, congue cursus augue. Proin diam est, sollicitudin vel finibus eu, viverra a mi. Vivamus et diam convallis, ornare felis vel, aliquam neque. Integer rhoncus ullamcorper erat eu faucibus.</p>

												
					</div>
						
						 
					
				</div>
				
				

			
		</>
	)
}