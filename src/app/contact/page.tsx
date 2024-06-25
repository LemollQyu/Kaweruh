'use client'

import { useEffect } from 'react'
import TagCloud from 'TagCloud';
import Footer from '@/app/comp/footer'

const Profile = () => {
	
	const container = '.content';
	const texts = [
	  '3D', 'Next Js', 'JavaScript',
	  'CSS3', 'Animation', 'Interactive',
	  'Mouse', 'Rolling', 'Sphere',
	  '6KB', 'v2.x', 'Redux', 'TypeScript',
	  'React Js', 'Java', 'PHP', "Laravel",
	  'Tailwind', 'Booststrap', 'UI/UX',
	  'Figma'
	  
	];
	const options = {
	  radius: 180,
	  // animation speed
	  // slow, normal, fast
	  maxSpeed: 'normal',
	  initSpeed: 'normal',
	  // 0 = top
	  // 90 = left
	  // 135 = right-bottom
	  direction: 135,
	  // interact with cursor move on mouse out
	  keep: true
	};

	
	useEffect(() => {
		TagCloud(container, texts, options);
	  })
	  
	return (
	<>
	
    <div className="px-3 lg:px-24 border-b-[1.9px] border-dashed overflow-hidden">
		<div className="mx-auto border-x-[1.9px] border-dashed ">		
			<div className=" content w-[360px]  rounded-full h-[360px]  mx-auto"></div>
		</div>
	</div>
	
    <div className="px-3 lg:px-24 border-b-[1.9px] border-dashed ">
		<div className="mx-auto border-x-[1.9px] border-dashed ">		
			<div className="lg:w-1/2 mx-auto p-5 relative z-10 ">
				<div>
					<h1 className="font-Alliance font-bold text-2xl">About</h1>
					<p className="lg:text-justify mt-2 font-light text-sm lg:text-lg">Halo! Perkenalkan, nama saya Annas, berasal dari Indonesia, tepatnya Jawa Tengah. Saya seorang web developer dengan keahlian di berbagai teknologi front-end seperti HTML, CSS, JavaScript, React, Next.js, dan Tailwind CSS, serta Bootstrap. Di sisi backend, saya menguasai Node.js, Express.js, Redux, MySQL, Postgres, Supabase, dan Firebase. Dengan pengalaman dan keterampilan yang saya miliki, saya siap untuk memberikan kontribusi dalam proyek-proyek pengembangan web yang menantang dan beragam.</p>
				</div>
				
				<div className="mt-20">
					<h1 className="font-Alliance font-bold text-2xl ">Vision</h1>
					<p className="lg:text-justify mt-2 font-light text-sm lg:text-lg ">
						Karya saya adalah pengaburan nostalgia melalui desain kontemporer. Nostalgia mengungkapkan sejarah dan ide-ide dari masa lalu dan menjadi kontemporer memungkinkan saya bereksperimen dengan teknologi digital. Menciptakan narasi yang mengeksplorasi ruang antara dua wilayah ini, masa lalu fisik dan masa kini digital, memberi saya wilayah terbuka untuk bereksperimen. Terdapat potensi baru untuk menghubungkan ruang fisik dan virtual menggunakan berbagai bentuk dan penceritaan untuk mengembangkan bahasa visual.
					</p>
					<p className="lg:text-justify mt-2 font-light text-sm lg:text-lg">
						Melalui perpaduan berbagai platform, karya saya mengeksplorasi realitas suatu objek di ruang angkasa, ruang di mana objek tersebut berada, dan bagaimana pemirsa kemudian mempersepsikan objek tersebut. Budaya pop dan sisa-sisanya, teknologi lama, dan bahasa visual yang tertinggal adalah media saya, begitu pula bahasa-bahasa abstrak yang merujuk pada masa lalu dan masa kini.
						
					</p>	
				
				</div>
				
				<div className="mt-20">
					<h1 className="lg:font-bold text-2xl font-Alliance">Contact</h1>
					<p className="text-justify mt-2 font-light text-sm lg:text-lg">
						Untuk Kolaborasi Dan pertanyaan umum, Silahkan Hubungi : <span className="inline-block underline hover:bg-gray-300 text-gray-500">lemoll.qyu@gmail.com</span>
					</p>
					<p className="lg:text-justify mt-2 font-light text-sm lg:text-lg">
						Jika anda tertarik dengan karya saya yang lebih luas, Termasuk proyek Company, Akademik, atau Portfolio, silahkan menghubungi saya, Versi digital dari portfolio berbasis proyek tersedia berdasarakan permintaan.		
					</p>

					
				
				</div>
			</div>
		</div>
	</div>
	
	<Footer />
		
		
		
		

	
	</>
	)
	

}

export default Profile;