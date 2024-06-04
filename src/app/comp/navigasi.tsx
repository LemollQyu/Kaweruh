import Auth from "@/lib/session"

import Link from "next/link"
import Image from "next/image"
import ModeGelap from "@/components/mode-gelap"
import MenuNav from "./compNav/menunav"
import SignOut from "./signout"



export default async function Navigasi (){
	const user = await Auth()

	
	return (
	<>
	
	<div className="px-3 lg:px-24 border-dashed relative   border-b-[1.9px]">

			<div className="border-dashed h-40  border-x-[1.9px] lg:px-5">
			
				<div className="flex opacity-1 backdrop-blur shadow-xl dark:bg-[#020817]/75 bg-transparent w-full left-0 px-3 md:px-5 lg:px-24 z-20 fixed items-center justify-between    py-5">
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
					
						
						
							
					<div className="flex gap-5 items-center">
						{
							user ? 
							<>
							<div className="border rounded-full w-[42px] h-[42px] group relative dark:bg-white">
								<div className="absolute top-10 -right-5 h-0 group-hover:h-12 group-hover:border transition-all duration-600 w-[155px] border-0">
									<ul className="hidden group-hover:block">
										<li>
											<Link href="#">Profile</Link>
										</li>
										<li>
											<SignOut />
										</li>
									</ul>
								</div>
							</div>
							
							</>
							
							:
							
							<Link href="/signup" className="px-3 py-1 w-20  bg-transparent border  rounded-md transition-colors duration-700 transform hover:bg-gray-500 hover:text-gray-100 font-Alliance text-center text-l md:text-lg focus:border-gray-300">Signup</Link>
						}
						
						                                                                                                                                           <ModeGelap />                                                                                                                                                                                                                           
					</div>
					
				</div>
				
			</div>
	</div>
	
	<MenuNav />
	
	
	</>
	)
}
