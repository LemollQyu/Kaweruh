'use client'

import {useState} from "react"

const Comment = ({user_nama, modul}) => {

	let now = new Date()
	const [pertanyaan, setPertanyaan] = useState("")
	const [waktu, setWaktu] = useState(now)

	const handleSubmit = async (e:any) => {
		e.preventDefault()
		setWaktu(now.toISOString());

    const data = {user_nama, waktu, pertanyaan}
		console.log(data)
		
		const response = await fetch(`/api/${modul}`, {
			
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				nama: user_nama,
				waktu: waktu,
				pesan: pertanyaan
			})
		})
		
		if(response.ok){
			alert("data berhasil")
			
		} else {
			alert("gagal")
		}
	}
	
	
	return (
		<>
		
		<div className="w-full px-3 lg:px-24 border-dashed border-b-[1.9px]">
			<div className="w-full border-dashed h-80 border-x-[1.9px] pt-16 relative">
				<h1 className="text-center text-3xl font-[Ubuntu] font-bold">Your question's</h1>
				<p className="text-l text-center mt-5 font-light">Get in touch and let us know how we can help</p>
				<span className="inline-block absolute top-3/4 left-1/2 -translate-x-1/2 h-1 w-24 rounded-md bg-black dark:bg-white"></span>
			</div>
		</div>
	
		
		<div className="w-full px-3 lg:px-24 border-dashed border-b-[1.9px] ">
			<div className="w-full border-dashed border-x-[1.9px] ">
	
				<div className="flex flex-col lg:flex-row">
					
					<div className="w-full lg:w-1/2 border-r px-0 lg:px-10">
						<form onSubmit={handleSubmit} className="flex flex-col py-5 mx-auto gap-3">
							<label className="font-bold" htmlFor="comment">Pertanyaan :</label>
							  <textarea
								className="bg-inherit border h-52 rounded-lg px-3 py-2"
								name="comment"
								value={pertanyaan}
								placeholder="Tulis Pertanyaan disini"
								onChange={(e:any) => setPertanyaan(e.target.value)}
							  ></textarea>
							  
							  <button className=" px-3 py-2 rounded-lg border w-[130px] h-[40px] text-sm">Send Message</button>
						
						</form>
					</div>
					
					<div className="w-full border-dashed border-t-[1.9px] lg:border-none lg:w-1/2  h-50 py-5 relative overflow-hidden">
						<div className="w-20 h-full rounded-full -left-10 absolute top-0 dark:shadow-slate-800/50 shadow-lg blur-2xl -z-20 shadow-2xl dark:bg-slate-800 bg-gray-200"></div>
					
						<div className="ml-3 lg:ml-10  mt-5 lg:mt-16 flex flex-col gap-4">
							<div className="lg:w-80 flex gap-[.5px] flex-col">
								<h1 className="font-[Alliance] text-sm">Email Developer</h1>
								<p className="font-[Alliance] text-sm font-extralight">We'd love to talk about how we can work togather</p>
								<p className="font-[Alliance] underline text-sm font-extralight">developer@gmail.com</p>
							</div>
							
							<div className="lg:w-80 flex gap-[.5px] flex-col">
								<h1 className="font-[Alliance] text-sm">Support</h1>
								<p className="font-[Alliance] text-sm font-extralight">We're here to help with any question may have</p>
								<p className="font-[Alliance] underline text-sm font-extralight">developer@gmail.com</p>
							</div>
						</div>
					
					
					</div>
				</div>
			</div>
		</div>
		
		
	
		</>
		
	)

}

export default Comment;