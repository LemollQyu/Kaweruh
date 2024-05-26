import Link from "next/link"
import Image from "next/image"

export default function ContentSwap({developer, linkStudy, textStartup, startup, logo, altStartup, grafik}){
		return(
		
			<>
				<div className="flex justify-between flex-col h-full px-2 md:flex-row md:gap-0">
					<div className="h-1/2 md:h-full md:w-1/4 flex mb-5 md:mb-0 pr-5 ">
					<div className="md:mt-10 lg:pl-8 lg:mt-0 flex-col w-full justify-center md:justify-start flex gap-3">
						<div className="w-[100px] px-2 py-1 mt-5 sm:mt-0 bg-gray-100 rounded-lg dark:bg-black">
							<h1 className="text-center text-gray-500 font-medium font-Ubuntu">{developer}</h1>
						</div>
						
							<h1 className="w-full lg:w-[250px] text-lg font-bold font-Ubuntu ">{textStartup}</h1>
						
						<div className="flex gap-2 mt-5  items-center">
							<Image className="w-[40px] h-[40px]"
								src={logo}
								width={100}
								height={100}
								alt="logo start up"
							/>
							<div className="flex flex-col">
								<h1 className="font-Ubuntu font-bold">{startup}</h1>
								<p className="font-Ubuntu dark:text-gray-200 text-sm">{altStartup}</p>
							</div>
						</div>
							<Link href={linkStudy} className="mt-5 font-bold text-blue-600">Case Study</Link>
					 </div>
				   </div>
				   
				  <div className="sm:2/4  flex justify-center  md:w-full h-full overflow-hidden  items-center">
					 {grafik}
				  </div>
			   
			</div>
			
			<div className="border w-full">
				<span className="w-full inline-block h-[50px] bg-grey-200"></span>
			</div>
			
			
			</>
		
		
		)
}