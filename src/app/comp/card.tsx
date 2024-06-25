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
								<svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M56.2496 35.2979C56.2496 35.077 56.0705 34.8979 55.8496 34.8979C55.6287 34.8979 55.4496 35.077 55.4496 35.2979V42.6622C55.1299 42.3875 54.6845 42.2521 54.1934 42.3799L25.4668 49.8592V50.6858L54.395 43.1541C54.9555 43.0082 55.377 43.6627 55.0122 44.1126L25.4957 80.5176L25.4883 80.5268C25.5513 80.8253 25.7474 81.0747 26.0116 81.21C26.0338 81.1451 26.0685 81.0814 26.1171 81.0214L55.6336 44.6165C55.8586 44.339 55.9554 44.0282 55.9519 43.7273C56.1233 43.6821 56.2496 43.526 56.2496 43.3405V35.2979Z" fill="#9A9A9A" fill-opacity="0.5"/>
<path d="M21.4473 11.1702V50.9361" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
<path d="M8.04297 3.34836L20.9105 10.9421C21.1397 11.0773 21.4133 11.1157 21.6707 11.0486L54.2961 2.55432C55.2304 2.31108 55.9329 3.40194 55.3249 4.15185L25.8084 40.5568C25.2026 41.3039 25.8978 42.3919 26.8303 42.156L60.5461 33.6286C60.8017 33.564 61.0725 33.6029 61.2995 33.7369L74.1706 41.3327" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
<path d="M8.04297 3.57446L8.04297 43.7872" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
<path d="M25.4688 41.5532V81.766" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
<path d="M55.8516 3.12769V34.4043" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
<path d="M60.7656 33.5107V73.7235" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
<path d="M74.1699 41.5532V81.3192" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4885 80.5285C25.552 80.826 25.7478 81.0745 26.0113 81.2094C26.0335 81.1445 26.0682 81.0808 26.1168 81.0208L55.6333 44.6159C56.3138 43.7765 55.8216 42.632 54.9285 42.3809C55.8229 42.6309 56.3163 43.7764 55.6352 44.6164L26.1188 81.0214C25.7553 81.4697 26.1724 82.1224 26.7319 81.9809L60.4477 73.4535C60.8055 73.363 61.1846 73.4175 61.5025 73.6051L74.3736 81.2009C74.5639 81.3132 74.6271 81.5585 74.5148 81.7487C74.4025 81.939 74.1573 82.0022 73.967 81.8899L61.0959 74.2941C60.9597 74.2137 60.7972 74.1903 60.6439 74.2291L26.9281 82.7565C25.6271 83.0855 24.6561 81.5742 25.4885 80.5285ZM54.7118 43.1547C54.6153 43.1272 54.5078 43.1241 54.3946 43.1535L25.4665 50.6853V49.8596L21.5696 50.8742C21.4151 50.9144 21.251 50.8914 21.1135 50.8103L8.24594 43.2165C8.05568 43.1043 7.81043 43.1675 7.69816 43.3577C7.58588 43.548 7.64909 43.7932 7.83934 43.9055L20.7069 51.4993C21.0277 51.6886 21.4107 51.7423 21.7712 51.6484L54.3966 43.1541C54.509 43.1248 54.6158 43.1278 54.7118 43.1547Z" fill="white"/>
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