"use client"

import {useState} from "react"

export default function Jawab () {

	const [ada, setAda] = useState("hidden");
	const [namaPenjawab, setNamaPenjawab] = useState("");
	
	
	
	const handleSubmit = (e:any) => {
		e.preventDefault();
		setNamaPenjawab(namaPenjawab);
		console.log(namaPenjawab);
		
		
		
		setNamaPenjawab("")
	}

	const handle = () => {
		setAda("hidden")
	}
	const handleClick = () => {

		
			setAda("flex");
	
		
		
		
	}

	return (
		<>
			<button onClick={handleClick} className="px-4 py-2 border rounded-lg">Jawab</button>
			
			<div className={`${ada} top-0 bottom-0 right-0 left-0 absolute opacity-1 backdrop-blur shadow-xl dark:bg-[#020817]/75 bg-transparent`}>
				<div className={` border absolute left-1/2 -translate-x-1/2 top-[100px]  w-1/2 h-3/4  z-20   `}>
						<button onClick={handle} className="px-2 py-2 border absolute right-0 top-0">X</button>
						
						<form className="w-full flex flex-col h-full mx-5" onSubmit={handleSubmit}>
							 <label className="font-bold" htmlFor="nama">Nama :</label>
							  <input
								className="px-3 py-2 border rounded-lg"
								type="text"
								name="nama"
								placeholder="Masukan Nama Penjawab"
								value={namaPenjawab}
								onChange={(e) => setNamaPenjawab(e.target.value)}
							  />
							
							<button className="border px-4 py-2 rounded-lg">Submit</button>
						</form>
					
						
				</div>
			</div>
		</>
	)
}