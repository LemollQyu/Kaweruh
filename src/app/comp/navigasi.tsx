'use client'
import Link from "next/link"
import Image from "next/image"
import ModeGelap from "@/components/mode-gelap"
import {useState} from "react"

export default function Navigasi (){
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
	<div className="px-3 lg:px-24 border-dashed relative  border-b-[1.9px]">
	
			
				
			
			<div className="border-dashed h-40 border-x-[1.9px] lg:px-5">
			
				<div className="flex items-center w-full justify-between   pt-2 md:pt-5">
					<div className="flex gap-2 items-center">
						
							<h1 className="font-Alliance mb-1  md:text-l lg:text-2xl">Kaweruh</h1>
							<div className="w-[20px] h-[20px] rounded-full">
								<Image
									src="/logo.svg"
									width={50}
									height={50}
									alt="Picture of the author"
									className="dark:bg-white rounded-full  w-full h-full object-cover"
								/>
							</div>
					
						
						<div className="md:flex items-center md:gap-5 md:ml-12 hidden">
							<button>Service</button>
							<Link href="#">About</Link>	
							<Link href="#">Community</Link>
						</div>
						
						
						
						
						
					</div>
					
							<div onClick={handleNav} className={`${bord} w-[20px] h-[20px]  flex flex-col justify-evenly md:hidden block transition-all duration-600 relative z-20`}>
								<span className={`bg-black dark:bg-white w-full h-[2px] inline-block ${span1} transition-all duration-600`}></span>
								<span className="bg-black dark:bg-white w-full h-[2px] inline-block"></span>
								<span className={`bg-black dark:bg-white w-full h-[2px] inline-block ${span3}`}></span>
							</div>
							
							
					<div className="flex gap-2 items-center">
						
						<button className="px-2 py-1 w-16 md:w-20 bg-transparent border  rounded-md transition-colors duration-700 transform hover:bg-gray-500 hover:text-gray-100 font-Alliance text-l md:text-lg focus:border-gray-300">Login</button>
						<ModeGelap />
					</div>
				</div>
				
			</div>
	</div>
	
	
	
		<div className={`border-x-[1.9px] border-b-[1.9px] border-dashed fixed z-10 bg-gray-100 dark:bg-black top-0 w-full h-0 ${display} transition-[height] duration-1000 px-3`}>
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