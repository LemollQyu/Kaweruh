"use client"


import { useState } from "react"

const SignUp = () => {
	
	const [nama, setNama] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("")
	
	
	const wSpan = password.length

	const handleSubmit = async (e) => {
		event.preventDefault();
		//alert(`${nama} ${password} ${email}`)
		const data = {nama, email, password}
		console.log(data)
		
		const response = await fetch('/api/user', {
			
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				nama: nama,
				email: email,
				password: password
			})
		})
		
		if(response.ok){
			alert("data berhasil")
			
		} else {
			alert("gagal")
		}
	}
	
	const PassSpan = () => {
		if(password.length == 0 ) {
			return	<div className=" h-5 flex items-center justify-between"></div>
		} else if ( password.length <= 4 ) {
			return ( 
			<>
			<div className=" h-5 flex items-center">
				<span className="inline-block w-[120px] h-[2px] bg-black"></span>
			</div>
			<p className="text-sm text-red-400 font-bold">Less</p>
			</>
			)
		} else if ( password.length >= 5 && password.length <= 7 ){
			return (
			<>
			<div className=" h-5 flex items-center">
				<span className="inline-block w-[120px] h-[2px] bg-black"></span>
				<span className="inline-block w-[120px] h-[2px] bg-black"></span>
			</div>
			<p className="text-sm text-yellow-400 font-bold">Enough</p>
			</>
			)
		} else if (password.length >= 8) {
			return (
			<>
			<div className=" h-5 flex items-center">
				<span className="inline-block w-[120px] h-[2px] bg-black"></span>
				<span className="inline-block w-[120px] h-[2px] bg-black"></span>
				<span className="inline-block w-[120px] h-[2px] bg-black"></span>
			</div>
			<p className="text-sm text-blue-400 font-bold">Good</p>
			</>
			)
		}
	}
	
	return (

		<>
			<form onSubmit={handleSubmit} className="relative  inline-block w-full sm:w-[400px] left-[50%] -translate-x-[50%] px-5 md:px-0 py-3">
				<h1 className="mb-5 font-Ubuntu text-2xl font-bold">Daftar akun Kaweruh</h1>
				<div className="flex w-full justify-between flex-col gap-2">
					  <label className="font-bold" htmlFor="nama">Nama Lengkap:</label>
					  <input
					  className="border rounded-lg px-3 py-2"
						type="text"
						name="nama"
						value={nama}
						placeholder="Nama Lengkap"
						onChange={(e) => setNama(e.target.value)}
					  />
					  <p className="text-sm text-gray-400">Masukaan Sesuai nama lengkap anda. </p>
				</div>
				  <br />
				<div className="flex w-full justify-between flex-col gap-2">
					  <label className="font-bold" htmlFor="email">Email:</label>
					  <input
					  className="px-3 py-2 border rounded-lg"
						type="email"
						name="email"
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					  />
					  <p className="text-sm text-gray-400">Gunakan alamat email aktif Anda</p>
				</div>
				  <br />
				
				<div className="flex w-full justify-between flex-col gap-2">
					  <label className="font-bold" htmlFor="password">Password:</label>
					  
					  <input
					  placeholder="Password"
					  className="border rounded-lg px-3 py-2"
						type="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					  />
					<PassSpan />
					  <p className="text-sm text-gray-400">Gunakan minimal 8 karakter dengan kombinasi huruf dan angka
					  </p>
				</div>
				  <br />
				<button className="w-full bg-[#2d3e50] h-[40px] text-white">Sign In</button> 
			</form>
			
			<div className="relative w-full sm:w-[400px] left-[50%] -translate-x-[50%] px-5 md:px-0">
				<div className="my-3 flex gap-3 items-center">
						<span className="inline-block w-full h-[1px] bg-gray-400"></span>
						<h1 className="font-Ubuntu font-extralight">Or</h1>
						<span className="inline-block w-full h-[1px] bg-gray-400"></span>
					</div>
					
					<button className="w-full border-[#2d3e50] border-[1.9px] h-[40px] text-[#2d3e50]">Google</button>
					
					<button className="mt-3 w-full border-[#2d3e50] border-[1.9px] h-[40px] text-[#2d3e50]">Github</button>
			</div>
		</>
	)

}

export default SignUp;
