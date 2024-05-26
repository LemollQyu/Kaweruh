"use client"

import {useState} from "react"

const MenuUser = () => {

	const [display, setDisplay] = useState("hidden")
	const [size, setSize] = useState("w-0")

	const handle = (e) => {
	 e.preventDefault()
	 
	if(display == "hidden"){
	 setDisplay("block");
	 setSize("w-full")
	} else {
	 setDisplay("hidden")
	 setSize("w-0")
	}

	}
	

	return (
	<>
		<button onClick={handle} className="ml-3 border rounded-full w-[24px] h-[24px] dark:bg-gray-200 bg-black"></button>

		<div className={`${size} h-24 transition-all duration-1000 border-2 fixed top-16 right-0`}>
		 

		</div>
	</>
	)

}
export default MenuUser;
