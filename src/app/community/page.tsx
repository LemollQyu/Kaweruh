import BoxCommunity from "./comp/boxCommunity"
const Community = () => {
	return (
		<>
			<h1 className="border-l text-blue-600 border-blue-600 absolute top-28 pl-3 lg:left-24 left-3">Community</h1>
			<div className="w-full px-3 lg:px-24 border-dashed border-b-[1.9px]">
			
				<div className="w-full border-dashed border-x-[1.9px] flex lg:flex-row flex-col   border-x-[1.9px]">
					<h1 className="font-[Alliance] text-2xl md:text-3xl font-bold  w-3/4 border-r-[1.9px] border-dashed py-2 pr-2">Start your  startup‘s growth      right here. We made Resources  that got you covered from 0 to IPO. Knowledge applicable today.</h1>
					
					<div className="w-1/4 relative">
						<h1 className="text-lg border-l-2 dark:border-white border-black lg:block md:hidden hidden -left-[1px] top-2 font-[Alliance]  absolute  pl-3">Stay to update</h1>
					</div>
				</div>
			</div>
				
			<BoxCommunity />
			
		
		</>
	
	)
}

export default Community