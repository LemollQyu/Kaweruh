"use client"


import { useState } from "react"
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation"

const SignIn = () => {
	
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("")
	const router = useRouter();


	const handleSubmit = async (e) => {
		event.preventDefault();
		//alert(`${nama} ${password} ${email}`)
		const data = { email, password}
		console.log(data)
		
		const signInData = await signIn('credentials', {
			email: email,
			password: password,
			redirect: false,
		   });
		   
		   if(signInData?.error){
		   console.log(signInData.error);
		   console.log("login tidak bisa")
		   } else {
			   console.log("login succes")
			router.push('/');
			router.refresh();
		 }
		
	
	}
	
	
	return (

		<>
			<form onSubmit={handleSubmit} className="relative  inline-block w-full sm:w-[400px] left-[50%] -translate-x-[50%] px-5 md:px-0 py-3">
				<h1 className="mb-5 font-Ubuntu text-2xl font-bold">Login akun Kaweruh</h1>
				
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
					  <p className="text-sm text-gray-400">Gunakan alamat Email yang Terdaftar</p>
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
					  <p className="text-sm text-gray-400">Gunakan Password yang telah Terdaftar
					  </p>
				</div>
				  <br />
				<button className="w-full bg-[#2d3e50] h-[40px] text-white">Sign In</button> 
			</form>
			
		</>
	)

}

export default SignIn;
