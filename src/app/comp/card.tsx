"use client"
import Link from "next/link"
import Image from "next/image"
const Card = () => {
	return (
		<>
			<div className="w-full px-3 lg:px-24 border-dashed border-b-[1.9px]">
				<div className="w-full border-dashed border-x-[1.9px] flex items-center justify-between lg:flex-row md:flex-col flex-col">
				
					<Link href="/html" className="group flex border w-[360px] h-[364px] transition-all duration-600 hover:bg-gray-200/[.06] flex-col justify-around p-5 w-full rounded-xl">
						<div className="flex items-center justify-center  rounded-lg">
							<div className="w-[100px] h-[100px] group-hover:h-[110px] group-hover:w-[110px] transition-all duration-600">
								<svg className="w-full h-full object-cover" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M30 56.8438L52.9359 43.5476L75.8718 56.8438" stroke="#9A9A9A" strokeOpacity="0.5" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M52.9346 1V43.5478" stroke="#9A9A9A" strokeOpacity="0.5" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path className="dark:stroke-white stroke-gray-600" d="M52.9365 70.1407L75.8721 56.8445"  strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M52.9346 27.593V70.1408" className="dark:stroke-white stroke-gray-600" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M30 14.2952V48.8023M75.8718 56.8429V14.2952" className="dark:stroke-white stroke-gray-600" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M52.9359 1L75.8718 14.2962L52.9359 27.5924L30 14.2962L52.9359 1Z" className="dark:stroke-white stroke-gray-600" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M7.14844 69.8069L30.0843 56.5107L53.0202 69.8069" stroke="#9A9A9A" strokeOpacity="0.5" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M30.0859 48.5344V56.5121" stroke="#9A9A9A" strokeOpacity="0.5" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M7.14844 69.8076L30.0843 83.1038L53.0202 69.8076" className="dark:stroke-white stroke-gray-600" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M30.0859 75.1274V83.1051" className="dark:stroke-white stroke-gray-600" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M7.14844 61.8296V69.8073M53.0202 69.8073V61.8296" className="dark:stroke-white stroke-gray-600" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M30.0843 48.5344L53.0202 61.8306L30.0843 75.1268L7.14844 61.8306L30.0843 48.5344Z" className="dark:stroke-white stroke-gray-600" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>

							</div>
						</div>
						<div className="flex flex-col gap-2">
							<h1 className="font-bold text-lg group-hover:text-blue-600 transition-all duration-600">HTML</h1>
							<p className="text-sm font-extralight">Considering all relevant factors such as industry trends, your competition, and target audience based on market analysis, we're creating website focused on conversions.</p>
						</div>
					</Link>
					
					<Link href="/css" className="group flex border w-[360px] h-[364px] transition-all duration-600 hover:bg-gray-200/[.06] flex-col justify-around p-5 w-full rounded-xl">
						<div className="flex items-center justify-center  rounded-lg">
							<div className="w-[100px] h-[100px] group-hover:h-[110px] group-hover:w-[110px] transition-all duration-600">
								<svg className="w-full h-full object-cover" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M37.9766 51.8297H47.8063V32.6169" stroke="#9A9A9A" strokeOpacity="0.5" strokeWidth="0.8"/>
									<path d="M17.8711 69.2554V51.8298H37.5307" stroke="white" strokeWidth="0.8"/>
									<path d="M17.8711 21.8935V4.46802H48.2541" stroke="white" strokeWidth="0.8"/>
									<path d="M67.4668 15.1914L67.4668 32.6169L37.0838 32.6169" stroke="white" strokeWidth="0.8"/>
									<path d="M67.4668 62.5532L67.4668 79.9788L37.0838 79.9788" stroke="white" strokeWidth="0.8"/>
									<path d="M37.5312 32.6169V79.9786" stroke="white" strokeWidth="0.8"/>
									<path d="M67.4668 32.6169V64.7872" stroke="white" strokeWidth="0.8"/>
									<path d="M47.8066 4.46802V33.0638" stroke="white" strokeWidth="0.8"/>
									<path d="M17.8711 68.8085V18.3191" stroke="white" strokeWidth="0.8"/>
								</svg>

							</div>
						</div>
						<div className="flex flex-col gap-2">
							<h1 className="font-bold text-lg group-hover:text-blue-600 transition-all duration-600">CSS</h1>
							<p className="text-sm font-extralight">Our attention to detail ensures that every website we work on looks amazing and functions flawlessly, and we always take the time to understand your needs before start.</p>
						</div>
					</Link>
					
					<Link href="/javascript" className="group flex border w-[360px] h-[364px] transition-all duration-600 hover:bg-gray-200/[.06] flex-col justify-around p-5 w-full rounded-xl">
						<div className="flex items-center justify-center  rounded-lg">
							<div className="w-[100px] h-[100px] group-hover:h-[110px] group-hover:w-[110px] transition-all duration-600">
								<svg className="w-full h-full object-cover" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M37.9766 51.8297H47.8063V32.6169" stroke="#9A9A9A" strokeOpacity="0.5" strokeWidth="0.8"/>
									<path d="M17.8711 69.2554V51.8298H37.5307" stroke="white" strokeWidth="0.8"/>
									<path d="M17.8711 21.8935V4.46802H48.2541" stroke="white" strokeWidth="0.8"/>
									<path d="M67.4668 15.1914L67.4668 32.6169L37.0838 32.6169" stroke="white" strokeWidth="0.8"/>
									<path d="M67.4668 62.5532L67.4668 79.9788L37.0838 79.9788" stroke="white" strokeWidth="0.8"/>
									<path d="M37.5312 32.6169V79.9786" stroke="white" strokeWidth="0.8"/>
									<path d="M67.4668 32.6169V64.7872" stroke="white" strokeWidth="0.8"/>
									<path d="M47.8066 4.46802V33.0638" stroke="white" strokeWidth="0.8"/>
									<path d="M17.8711 68.8085V18.3191" stroke="white" strokeWidth="0.8"/>
								</svg>

							</div>
						</div>
						<div className="flex flex-col gap-2">
							<h1 className="font-bold text-lg group-hover:text-blue-600 transition-all duration-600">Javascript</h1>
							<p className="text-sm font-extralight">Our attention to detail ensures that every website we work on looks amazing and functions flawlessly, and we always take the time to understand your needs before start.</p>
						</div>
					</Link>
					
					
				</div>
				<div>
					<Link href="#" className="group flex border w-[360px] h-[164px] transition-all duration-600 hover:bg-gray-200/[.06] flex-col justify-around p-5 w-full rounded-xl">
						
						<div className="flex flex-col gap-2">
							<h1 className="text-center font-bold text-lg group-hover:text-blue-600 transition-all duration-600">Coming Soon</h1>
							
						</div>
					</Link>
				</div>
			</div>
			<div className="w-full px-3 lg:px-24 border-dashed border-b-[1.9px]">
				<div className="w-full border-dashed border-x-[1.9px]">
					<h1>Annas</h1>
				</div>
			</div>
		</>
	
	)
}

export default Card