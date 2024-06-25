

import React from 'react'
import Marquees from "../comp/marquees"
import Dropdown from "./comp/dropdown"
import Image from "next/image"
import Comment from "../comp/comment"
import Auth from "@/lib/session"
import BoxIklan from "../comp/boxiklan"
import Link from "next/link"
import Philosophy from "../comp/philosophy"
import Project from "../comp/project"
import Footer from "../comp/footer"

const Html = async () => {

	const user = await Auth()
	
	const listJudul = [
			"Pendahuluan",
			"Anatomi CSS",
			'Penempatan CSS',
			'Font styling',
			'Text styling',
			'Background',
			'Selector',
			'Pseudo class', 
			'Inheeitance',
			'Spesificity'
	]
	
	const listContent = [
		`
		Ceritanya, pada tahun 1996, Hakon Wium Lie yang saat itu bekerja di CERN menciptakan bahasa style ini. Jadi, CSS bukan bahasa pemrograman, ya. Sebelum adanya CSS, perubahan format tampilan seperti warna dan jenis font harus dilakukan berulang-ulang. Itu berarti web developer harus selalu menuliskan tag elemen di semua halaman HTML yang dibuat. Nah, untuk lebih memahami pengertian CSS di atas, kamu bisa membayangkan sebuah website sebagai sebuah rumah yang terbentuk dari HTML dan CSS. HTML ibarat tembok, lantai dan semua bagian konstruksinya, sedangkan CSS ibarat cat atau hiasan di dalam di rumah tersebut.`,
		`Anatomi CSS adalah kunci dalam memahami bagaimana elemen-elemen di halaman web kamu dapat di-styling. Dengan pemahaman yang baik tentang selector, properti, nilai, unit pengukuran, dan fungsi calc(), kamu dapat mengubah tampilan halaman web kamu sesuai dengan keinginan kamu.`,
		
		`Dalam praktiknya, Anda akan menempatkan kode CSS pada halaman HTML. Nah, penempatan kode itulah yang disebut dengan Style CSS. Terdapat tiga macam style CSS, yaitu Inline CSS, External CSS, dan Internal CSS. Inline CSS adalah kode CSS yang ditulis langsung pada atribut elemen HTML. Setiap elemen HTML memiliki atribut style, di situ lah inline CSS ditulis. Eksternal CSS adalah kode CSS yang ditulis terpisah dengan kode HTML Eksternal CSS ditulis di sebuah file khusus yang berekstensi .css. File eksternal CSS biasanya diletakkan setelah bagian <head> pada halaman. Internal CSS adalah kode CSS yang ditulis di dalam tag <style> dan kode HTML dituliskan di bagian atas (header) file HTML. Internal CSS dapat digunakan untuk membuat tampilan pada satu halaman website dan tidak digunakan pada halaman website yang lain.`,
		
		`Font styling di CSS (Cascading Style Sheets) mengacu pada berbagai teknik dan properti yang digunakan untuk mengatur tampilan teks pada halaman web. CSS menyediakan sejumlah properti yang memungkinkan Anda untuk mengubah jenis huruf (font), ukuran, warna, gaya, dan lain-lain. Berikut adalah beberapa properti utama yang digunakan untuk font styling di CSS:
			•	font-family: Menentukan jenis huruf (font) yang digunakan. Anda dapat menyebutkan beberapa font sebagai cadangan jika font pertama tidak tersedia.
			•	font-size: Mengatur ukuran huruf.
			•	font-style: Mengatur gaya huruf, seperti normal, italic, atau oblique.
			•	font-weight: Mengatur ketebalan huruf, seperti normal, bold, atau angka tertentu (100 hingga 900).
			•	font-variant: Mengatur varian huruf, seperti small-caps.`,
			
		`Text styling di CSS (Cascading Style Sheets) mengacu pada berbagai teknik dan properti yang digunakan untuk mengatur tampilan dan tata letak teks pada halaman web. CSS menyediakan sejumlah properti yang memungkinkan Anda untuk mengubah warna, perataan, spasi, dekorasi, dan transformasi teks, serta efek lainnya. Berikut adalah beberapa properti utama yang digunakan untuk text styling di CSS:
		•	color: Mengatur warna teks.
		•	text-align: Mengatur perataan teks (left, right, center, justify).
		•	text-decoration: Menambahkan dekorasi pada teks, seperti underline (garis bawah), overline (garis di atas), line-through (garis tengah), atau none (tanpa dekorasi).
		•	text-transform: Mengatur transformasi teks, seperti uppercase (huruf besar semua), lowercase (huruf kecil semua), capitalize (huruf besar di awal kata).
		•	text-indent: Mengatur indentasi baris pertama teks dalam sebuah blok.
		•	line-height: Mengatur tinggi baris teks, membantu dalam mengatur spasi vertikal antara baris teks.
		•	letter-spacing: Mengatur jarak antar karakter dalam teks.
		•	word-spacing: Mengatur jarak antar kata dalam teks.
		•	text-shadow: Menambahkan bayangan pada teks.`,
		
		`Dalam CSS (Cascading Style Sheets), properti background digunakan untuk mengatur tampilan latar belakang elemen HTML. Properti ini mencakup berbagai aspek seperti warna, gambar, posisi, pengulangan, dan ukuran latar belakang. Properti background dapat disingkat menjadi satu properti dengan menggunakan properti shorthand atau ditetapkan secara terpisah menggunakan properti individual.
		Properti Background Utama di CSS
		•	background-color: Mengatur warna latar belakang elemen.
		•	background-image: Mengatur gambar latar belakang elemen.
		•	background-repeat: Mengatur bagaimana gambar latar belakang diulang.
		•	background-position: Mengatur posisi gambar latar belakang.
		•	background-size: Mengatur ukuran gambar latar belakang.
		•	background-attachment: Mengatur apakah gambar latar belakang tetap di tempatnya atau bergerak dengan konten lainnya saat digulir.
		•	background-clip: Menentukan apakah latar belakang termasuk padding atau border.
		•	background-origin: Menentukan posisi awal gambar latar belakang.
		•	background-blend-mode: Mengatur bagaimana gambar latar belakang bercampur dengan warna latar belakang.`,
		`
		
		Selector adalah bagian dari aturan (rule) CSS yang digunakan untuk memilih elemen HTML yang ingin Anda gaya (style). Selector menentukan elemen mana di halaman web yang akan menerima gaya yang ditentukan dalam blok deklarasi CSS. Ada berbagai jenis selector di CSS yang memungkinkan Anda untuk memilih elemen berdasarkan tag, kelas, ID, atribut, dan hubungan antar elemen.
		Jenis-Jenis Selector CSS :
		•	Element Selector:
			Memilih semua elemen HTML tertentu.
			Contoh: p akan memilih semua elemen <p>.
		•	Class Selector:
			Memilih semua elemen dengan kelas tertentu. Kelas diawali dengan tanda titik (.).
		•	ID Selector:
			Memilih elemen dengan ID tertentu. ID diawali dengan tanda pagar (#).
			Contoh: #header akan memilih elemen dengan ID header.}
		•	Attribute Selector:
			Memilih elemen berdasarkan atribut atau nilai atribut tertentu.
		Contoh: input[type="text"] akan memilih semua elemen <input> dengan atribut type yang bernilai text. 
		•	Descendant Selector:
			Memilih elemen yang berada di dalam elemen lain.
			Contoh: div p akan memilih semua elemen <p> yang berada di dalam elemen <div>.
		•	Child Selector:
		Memilih elemen yang merupakan anak langsung dari elemen lain. Menggunakan tanda > antara dua elemen.
		Contoh: ul > li akan memilih semua elemen <li> yang merupakan anak langsung dari elemen <ul>.}
		•	General Sibling Selector:
		Memilih elemen yang merupakan saudara dari elemen lain, terlepas dari posisinya. Menggunakan tanda ~ antara dua elemen.
			Contoh: h1 ~ p akan memilih semua elemen <p> yang merupakan saudara dari elemen <h1>.
		•	Adjacent Sibling Selector:
			Memilih elemen yang merupakan saudara langsung dari elemen lain. Menggunakan tanda + antara dua elemen.
			Contoh: h1 + p akan memilih elemen <p> yang langsung mengikuti elemen <h1>.
		•	Universal Selector:
			Memilih semua elemen. Diwakili oleh tanda bintang (*).
			Contoh: * akan memilih semua elemen.
		`,
		
		`Pseudo-class di CSS adalah kata kunci yang ditambahkan ke selector yang menentukan keadaan khusus elemen yang akan distil (diberi gaya). Pseudo-class memungkinkan Anda untuk mengatur gaya elemen berdasarkan kondisi seperti interaksi pengguna, posisi elemen, atau status elemen. Pseudo-class dituliskan dengan menambahkan titik dua (:) diikuti dengan nama pseudo-class ke selector elemen. <br>
		Jenis- Jenis pseudo class:
		Berikut adalah beberapa pseudo-class yang sering digunakan di CSS:
		•	:hover: Digunakan untuk memberikan gaya ketika penunjuk mouse berada di atas elemen.
		•	:active: Digunakan untuk memberikan gaya ketika elemen sedang diaktifkan, seperti saat tombol mouse ditekan.
		•	:focus: Digunakan untuk memberikan gaya ketika elemen, seperti input, berada dalam fokus.
		•	:first-child: Digunakan untuk menargetkan elemen yang merupakan anak pertama dari induknya.
		•	:last-child: Digunakan untuk menargetkan elemen yang merupakan anak terakhir dari induknya.
		•	:nth-child(n): Digunakan untuk menargetkan elemen berdasarkan urutan mereka dalam induknya, di mana n bisa berupa angka atau rumus.
		•	:nth-of-type(n): Sama dengan :nth-child(n), tetapi hanya memperhitungkan elemen yang memiliki tipe yang sama.
		•	:first-of-type: Menargetkan elemen pertama dari tipe tertentu dalam induknya.
		•	:last-of-type: Menargetkan elemen terakhir dari tipe tertentu dalam induknya.
		•	:not(selector): Digunakan untuk menargetkan semua elemen kecuali yang sesuai dengan selector yang ditentukan.
		•	:checked: Digunakan untuk menargetkan elemen input yang dicentang atau dipilih.
		•	:disabled: Digunakan untuk menargetkan elemen input yang dinonaktifkan.
		`,
		
		`
		Inheritance di CSS adalah konsep di mana properti tertentu dari elemen HTML dapat diwarisi oleh elemen anak (child elements) dari elemen induknya (parent elements). Dalam konteks CSS, ini berarti bahwa beberapa properti gaya yang diterapkan pada elemen induk akan secara otomatis diterapkan ke elemen anak, kecuali jika gaya tersebut secara eksplisit diubah atau ditimpa oleh aturan yang lebih spesifik.
		`,
		
		`
		Spesifisitas (Specificity) di CSS adalah mekanisme yang digunakan oleh browser untuk menentukan aturan CSS mana yang harus diterapkan pada elemen ketika ada beberapa aturan yang bertentangan. Spesifisitas didasarkan pada berbagai jenis selector yang digunakan dalam aturan CSS dan dihitung dengan sistem poin.
		`
		
		
		
	]
	
	const list = [
		"https://www.youtube.com/embed/CleFk3BZB3g?si=US5cCFNcQfnfQAaQ",
		'https://www.youtube.com/embed/8lXDi2Mxp9c?si=Zxpq20YxsPDFJKrG',
		'https://www.youtube.com/embed/bnnislprJro?si=hGa-5uyngGDgoTtW',
		'https://www.youtube.com/embed/nPHed3_oPvY?si=JsYXdL603RjtzJmW',
		'https://www.youtube.com/embed/xih8giA7S3Q?si=0xOi26Z4B7lrHyrh',
		'https://www.youtube.com/embed/zm-HPYS_ELU?si=rvcaCTxbo0jhLzD1',
		'https://www.youtube.com/embed/0KLwWyQyMQo?si=O5xTpZYzEoQFl1HW',
		'https://www.youtube.com/embed/G0gYWdIHOug?si=eY3uvfzw4YH7YcH0',
		'https://www.youtube.com/embed/kY2FEA3y43E?si=B9pXYYT9P5m34yF_',
		'https://www.youtube.com/embed/yu74Y1ndd5w?si=DmB2U7wPaJ6zI4Sh' 
			
	]
	


	
	const listModulHtml = [
			"Pendahuluan",
			"Anatomi CSS",
			'Penempatan CSS',
			'Font styling',
			'Text styling',
			'Background',
			'Selector',
			'Pseudo class', 
			'Inheeitance',
			'Spesificity'
			
			
			
	]

	return (
		<>
			<div className="lg:px-24 px-3 w-full ">
				
					
				<div className="border-dashed border-x-[1.9px]">
					<div className="border-blue-600 border-l pl-5 absolute top-28">
						<h1 className="text-blue-600">CSS</h1>
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
											
											<Dropdown  link={collect}>
												<div className="mt-10 w-full px-0 lg:px-16  h-[320px] overflow-y-auto">
													<h1 className="text-xl font-bold">{listJudul[index]}</h1>
													<p className="font-Ubuntu text-light text-justify">{listContent[index]}</p>					
												</div>
												
											</Dropdown>
										</div> 
											
										</div>
									
										
										
										)
									})
								} 
								
								<Comment user_nama={user?.nama} modul="css" />
							
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