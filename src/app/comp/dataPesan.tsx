'use client'

import {useState} from "react"

export default function DataPesan = ({massage}) => {
		
	const [pesan, setPesan] = useState("")
	
	return (
	<>
		<div className="w-full lg:w-1/2 border-r px-0 lg:px-10">
						<form onSubmit={handleSubmit} className="flex flex-col py-5 mx-auto gap-3">
							<label className="font-bold" htmlFor="comment">Pertanyaan</label>
							  <textarea
								className="bg-inherit border h-52 rounded-lg px-3 py-2"
								name="comment"
								value={pertanyaan}
								placeholder="Tulis Pertanyaan disini"
								onChange={(e:any) => setPesan(e.target.value)}
							  ></textarea>
							  
							  <button className=" px-3 py-2 rounded-lg border w-[130px] h-[40px] text-sm">Send Message</button>
						
						</form>
					</div>
	
	</>
		
	)

}