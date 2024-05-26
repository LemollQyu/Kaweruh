"use client"

import {useState} from "react"
import Link from "next/link"



const MenuNav = () => {

	const [bord, setBord] = useState("")
	const [span1, setSpan1] = useState("")
	const [span3, setSpan3] = useState("")
	const [display, setDisplay] = useState("h-0")
	const [displayMenu, setDisplayMenu] = useState("hidden")
	const [serviceTinggi, setServiceTinggi] = useState("h-0")
	
	const handleService = () => {
		if( serviceTinggi == "h-0" ) {
		setServiceTinggi("h-[200px]")
		} else {
		setServiceTinggi("h-0")
		}
		
	}
	
	const handleNav = () => {
		if(bord == ""){
			setBord("border-2 rounded scale-125")
			setSpan1("translate-y-1  rotate-45")
			setSpan3("-translate-y-1  -rotate-45")
			setDisplay(" h-[500px]")
			setDisplayMenu("flex")
		} else {
			setBord("")
			setSpan1("")
			setSpan3("")
			setDisplay("h-0")
			setDisplayMenu("hidden")
		}
	
	}

	return (
		<>
			<div className={`border-x-[1.9px] border-b-[1.9px] border-dashed fixed z-30 bg-gray-100 dark:bg-black top-0 w-full h-0 ${display} transition-[height] duration-1000 px-3`}>
		
				<div onClick={handleNav} className={`${bord} left-1/2 -translate-x-[50%] top-6 w-[20px] h-[20px]  flex flex-col justify-evenly md:hidden block transition-all duration-600 relative z-40`}>
					<span className={`bg-black dark:bg-white w-full h-[2px] inline-block ${span1} transition-all duration-600`}></span>
					<span className="bg-black dark:bg-white w-full h-[2px] inline-block"></span>
					<span className={`bg-black dark:bg-white w-full h-[2px] inline-block ${span3}`}></span>
				</div>
				
				<div className="border-x-[1.9px] border-dashed ">
					<div className={`${displayMenu}  items-center flex-col mt-24 gap-3`}>
						<button onClick={handleService} className="font-bold border-y w-full py-2">Service</button>
						<div className={`w-full ${serviceTinggi} transition-[height] duration-1000`}></div>
						<Link className="font-bold border-y w-full py-2 text-center" href="#">About</Link>	
						<Link className="font-bold border-y w-full py-2 text-center" href="#">Community</Link>
					</div>
				</div>
			</div>
		
		</>
	
	)

}

export default MenuNav;