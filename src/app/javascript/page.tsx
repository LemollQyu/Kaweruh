

import React from 'react'

import Dropdown from "./comp/dropdown"
import Image from "next/image"
import Marquees from "../comp/marquees"
import BoxIklan from "../comp/boxiklan"
import Project from "../comp/project"
import Philosophy from "../comp/philosophy"
import Footer from "../comp/footer"
import Comment from "../comp/comment"

import Auth from "@/lib/session"

const Html = async () => {

	const user = await Auth();
	console.log(user)
	
	const list = [

'https://www.youtube.com/embed/To1O7QFe-2E?si=OaFlDkTTMb0e0t6O',
'https://www.youtube.com/embed/9XmupjKG8JA?si=nkrtnRqeMLws_xGD',
'https://www.youtube.com/embed/CRQgeG2gick?si=r9XHMnMUYdoQgu2Q',
'https://www.youtube.com/embed/uZbJX7DNjWo?si=QjuI1J6_Nm3ocMt1',
'https://www.youtube.com/embed/UAptUH-fRkk?si=BFiYfp219zPVavIa',
'https://www.youtube.com/embed/j_te8wLdbi4?si=uJqqI5kudi2UlrHn',
'https://www.youtube.com/embed/sdIMR1--EpI?si=avQtJ3omFxUAq3_Z',
'https://www.youtube.com/embed/X06Rm2Cjg5M?si=fSbgBqYKDEV7S8SD',
'https://www.youtube.com/embed/Kw7qrDKPq04?si=IcdyIUNyzHy-H8J9',
'https://www.youtube.com/embed/LpGmLI4TF3c?si=Ge7siKf_PZGdZ_Jp',
'https://www.youtube.com/embed/-rDLrwdKAVw?si=Jbe8PVz9pmdA4wX4',
'https://www.youtube.com/embed/e_abMWHcWSM?si=WbJGcvuNAJsRYGjw',
'https://www.youtube.com/embed/sIJKIwWhOtc?si=bBiAJ9azwe5XgLc1',
'https://www.youtube.com/embed/Ng_C7GBswF0?si=n0ZUNfK-qpwEeKtl',
'https://www.youtube.com/embed/Jli5dSUqQIc?si=t_EXGUOrp9yuOe0C',
'https://www.youtube.com/embed/YE4RY1UrI_Q?si=KCOuFAXBOsQiVD0a',
'https://www.youtube.com/embed/ZUM9_2UKGFs?si=8SsvrwF_hex76l_p',
'https://www.youtube.com/embed/ocjs7gDZR6w?si=LuZQ5zT2xXrnxn0z',
'https://www.youtube.com/embed/gKnd7wgd3Co?si=lG0NN-aaMYJRYT7P',
'https://www.youtube.com/embed/Ys0_NdZAhfg?si=vyakS37h_MI25J',
'https://www.youtube.com/embed/mr5-Y99mRpc?si=-uQwLWe3liV2DGZw',
'https://www.youtube.com/embed/0cULPoVKlcc?si=-ktR_-4AlAErk4KC',
'https://www.youtube.com/embed/wEdcVPlVJ0Q?si=5ZHL7KDKSKHabn5L'


			
	]
	
	const listModulHtml = [
				
'Persiapan belajar js',
'Debugging tools',
'Membuat Variabel 1',
'Membuat Variabel 2',
'Tipe data',
'Mengubah tipe data ke dalam string',
'Mengubah tipe data ke dalam number',
'Angka dan objek matematika',
'Memanipulasi nilai string 1',
'Memanipulasi nilai string 2',
'Membuat elemen HTML dengan template string',
'Tipe data array beserta method',
'Tipe data object',
'Menampilkan tanggal dan waktu',
'If statemen dan operator pembanding 1',
'If statemen dan operator pembanding 2',
'Statement switch',
'Function',
'Perulangan',
'Window objek',
'Lingkup var, let dan cons variable',
'Reduce'



			
			
			
	]

	return (
		<>
			<div className="lg:px-24 px-3 w-full ">
				
					
				<div className="border-dashed border-x-[1.9px]">
					<div className="border-blue-600 border-l pl-5 absolute top-28">
						<h1 className="text-blue-600">Javacript</h1>
					</div>
				</div>
				
			</div>

			<div className="border-dashed border-b-[1.9px] w-full lg:px-24 px-3">
				<div className="w-full border-x-[1.9px] border-dashed " >
					<h1 className="lg:w-[750px] w-full md:border-dashed md:border-r-[1.9px] text-2xl font-bold font-Alliance py-2">Holistic web development partners of SaaS & Ecommerce companies                 We develop websites that develop businesses.</h1>
				
				</div>
			
			</div>
			
			<div className="lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] w-full flex items-center">
					<div className="w-[374px] h-[174px] lg:border-r-[1.9px] border-dashed items-end flex">
						<p className="w-3/4">Combining deep research, and latest web design practices - we build performing websites - both marketing + tech wise.</p>
					</div>
					<div className="lg:block hidden w-[374px] h-[174px]"></div>
					<div className="lg:block hidden w-[374px] h-[174px] border-l-[1.9px] border-dashed"></div>
				</div>
			</div>
			
			<div className=" lg:px-24 px-3 sm:hidden md:block border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] h-20 w-full flex items-center">
				</div>
			</div>
			
			<div className="mb-5 lg:px-24 px-3 hidden md:block border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] w-full flex items-center">
					<div className="w-[523px] h-[339px]">
						<Image 
							src="/code.svg"
							className="w-full h-full object-cover"
							width={100}
							height={100}
							alt="code HTML"
							priority={false}
						/>
					</div>

				</div>
			</div>
			
			<div className=" border-dashed border-b-[1.9px] w-full">
				<Marquees />
					
			</div>
			
			<div className="lg:px-24 h-14 px-3 border-dashed border-b-[1.9px] w-full">
			</div>
			
			
			
		
			{
							user ? 
							<>
								{
									list.map((collect,index) => {
										return (
										
									
										<div key={index}>
										 <div  className="group relative lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
											<div className="group-hover:shadow-md focus:shadow-md dark:focus:shadow-[#2d3e50] dark:group-hover:shadow-[#2d3e50] transition-all duration-600 items-center rounded-full absolute  right-5 h-10 left-5 lg:right-28 lg:left-28 flex gap-2 bg-gray-300/[0.2] dark:bg-gray-100/[0.2] top-2 px-3 shadow" >
												<h1 className="font-Write">{index+1}</h1>
												<h1 className="font-Ubuntu">{listModulHtml[index]}</h1>
											</div>
											
											<Dropdown link={collect} />
										</div> 
											
										</div>
									
										
										
										)
									})
								} 
								
								<Comment user_nama={user?.nama} modul="javascript" />
							
							</>
							
							:
							<div className="border-dashed border-b-[1.9px] w-full lg:px-24 px-3">
								<div className="w-full border-x-[1.9px] border-dashed p-3" >
									<div className=" flex justify-around py-3 lg:justify-between lg:flex-row flex-col items-center w-full h-28 dark:bg-white/25 border rounded-lg px-5 shadow-inner">
										<p className="lg:text-xl text-sm text-light font-[Alliance]">Silahkan login Untuk melihat materi dan Berdiskusi</p>
										<Link className=" lg:text-l text-sm shadow-inner px-5 border dark:bg-[#232323] rounded-lg py-2" href="/signin">Sign In</Link>
									</div>
								</div>
							</div>
						}
			
			<div className="lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] w-full flex h-10 items-center">
					
				</div>
			</div>
			
			<BoxIklan />
			
			<Project />
			
			<div className="lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] w-full h-10">
					
				</div>
			</div>
			
			<Philosophy photo="/haromain.jpg" nama="M Nur Haromaian" anggota="CEO Kaweruh"/>
			
			<div className="lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] w-full h-10">
					
				</div>
			</div>
			
			<Philosophy photo="/jalil.jpg" nama="M Jalilurahman" anggota="Writter, Content" />
			
			<div className="lg:px-24 px-3 border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] w-full h-10">
					
				</div>
			</div>
			
			<Philosophy photo="/annas.jpeg" nama="Annas Aulia Rahman" anggota="Development"/>
			
			<Footer />
			
		</>
	)
}

export default Html;