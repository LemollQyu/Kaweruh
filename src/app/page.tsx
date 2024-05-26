import Auth from "@/lib/session"
import Swape from "./comp/swape"


export default async function Home() {
	const user = await Auth()
	console.log(user)
	


  return (
  <>
	
    <div className="px-3 lg:px-24 border-b-[1.9px] border-dashed">
		<div className="mx-auto border-x-[1.9px] border-dashed">
			<h1 className="font-Alliance text-xl md:w-3/4 md:border-r-[1.9px] md:border-dashed font-bold text-2xl md:text-3xl">B2B marketing agency & startup studio based in Europe Holistic growth partners of innovative SaaS & Fintech startup & enterprise companies.</h1>
		</div>
	</div>
	<div className="px-3 lg:px-24 border-b-[1.9px] border-dashed">
		<div className="mx-auto w-full  h-[50px] md:h-[120px] border-b-[1.9px] border-x-[1.9px] border-dashed">
			
		</div>
	
		<div className="mx-auto w-full py-5 border-x-[1.9px] border-dashed">
			<Swape />
		</div>
		
	</div>
	
	<div className="px-3 lg:px-24 border-b-[1.9px] h-[200px] border-dashed">
		
	</div>
	
</>
  );
}
