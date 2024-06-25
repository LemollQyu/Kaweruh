

import React from 'react'
import Marquees from '../comp/marquees'
import Dropdown from "./comp/dropdown"
import Image from "next/image"
import Comment from "../comp/comment"
import Auth from "@/lib/session"
import Link from "next/link"
import BoxIklan from "../comp/boxiklan"
import Project from '../comp/project'
import Philosophy from "../comp/philosophy"
import Footer from "../comp/footer"


const Html = async () => {

	const user = await Auth()
	
	const listJudul =
	[
	"Pengertian Html",
	"Membuat File Html",
	"Code Editor",
	"Elemen Tag",
	"Paragraf",
	"Heading ",
	"List",
	"Hyperlink",
	"Image",
	"Table",
	"Table Merging",
	"Form 1",
	"Form 2"
	]
	
	const listContent = [
	`HTML adalah kependekan dari Hypertext Markup Language yang merupakan sebuah bahasa markup. HTML adalah kode untuk membuat struktur halaman suatu website yang menarik, saling terhubung satu dengan yang lainnya, dan yang pasti dapat diakses melalui internet. 
	Awalnya html ditemukan oleh Tim Berners-Lee pada tahun 1991. HTML adalah solusi untuk membantu ilmuwan dalam mengakses dokumen, namun kini html semakin berkembang pesat di dunia pemrograman web. 
	Bagi pemula yang ingin memulai belajar pemrograman web dan bingung belajar bahasa markup apa, HTML adalah jawabannya. HTML dianggap mudah dipahami oleh orang awam karena tag dasar html mudah dibaca dan diimplementasikan.`,

	"Membuat file HTML berarti menulis kode menggunakan bahasa markup HTML (HyperText Markup Language) untuk membuat struktur dan konten sebuah halaman web. HTML digunakan untuk menentukan elemen-elemen dalam halaman web seperti teks, gambar, tautan, tabel, dan lain-lain. File HTML biasanya disimpan dengan ekstensi .html atau .htm.",

	"Source code editor, atau singkatnya code editor, adalah salah satu jenis dari text editor yang tersedia. Code editor ini merupakan text editor yang dikhususkan untuk menuliskan kode-kode dari perangkat lunak yang sedang dikembangkan. Code editor ini membuat pengembang untuk menulis dan membaca source code dengan lebih mudah, karena code editor ini memberikan semacam highlight yang berbeda-beda terhadap setiap elemen kode supaya kode-kode tersebut dapat lebih mudah untuk dilihat, sehingga code editor lebih mudah digunakan dalam pengembangan perangkat lunak daripada text editor biasa.",

	`Tag adalah sebuah penanda awalan dan akhiran dari sebuah elemen di HTML. Tag dibuat dengan kurung sudut (<...>), lalu di dalamnya berisi nama tag dan kadang juga ditambahkan dengan atribut.
	Contoh: <p>, <a>, <body>, <head>, dan sebagainya.
	Tag selalu ditulis berpasangan. Ada tag pembuka dan ada tag penutupnya. Namun, ada juga beberapa tag yang tidak memiliki pasangan penutup. Tag penutup ditulis dengan menambahkan garis miring (/) di depan nama tag.`,

	`Paragraf merupakan sekumpulan teks atau kalimat yang tampak pada halaman web. Sebuah paragraf selalu dimulai dari baris baru, dan antar satu paragraf dengan paragraf lainnya biasanya terpisahkan dengan sebuah jarak.
	Meskipun biasanya paragraf berisi hanya sekumpulan teks, tetapi ia sebenarnya juga bisa digunakan untuk mengelompokkan gambar dan juga form isian.`,

	`Heading merupakan tag di dalam HTML yang mendefinisikan judul atau sub-judul serta hirarki dari dokumen HTML yang ditampilkan kepada user [1].
	Terdapat 6 level heading pada HTML, yang paling tinggi adalah <h1> dan yang paling rendah adalah <h6>.
	Berikut ini adalah contoh heading pada HTML:
	<h1>h1 - Heading tertinggi</h1>
	<h2>h2 - Heading level 2</h2>
	<h3>h3 - Heading level 3</h3>
	<h4>h4 - Heading Level 4</h4>
	<h5>h5 - Heading level 5</h5>
	<h6>h6 - Heading level terakhir</h6>`,

	`Dalam konteks HTML, list merupakan kumpulan item atau poin yang dikelompokkan bersama. Item-item ini bisa berupa teks, gambar, tautan, atau elemen lain yang ingin kamu tampilkan dalam urutan tertentu atau tanpa urutan.
	Dengan demikian, list HTML adalah salah satu elemen dalam pembuatan web untuk menyajikan informasi dalam format yang terstruktur dan rapi.
	List HTML sering dipakai untuk menyusun menu navigasi, daftar langkah-langkah, atau kumpulan data yang terkait. Dengan elemen ini, audiens dapat lebih mudah mengidentifikasi dan mengikuti struktur konten. Menggunakan list HTML dalam struktur konten web sangat penting karena membantu menyajikan informasi secara jelas dan efisien.
	Jenis-Jenis List :
	1. Unordered list
	Unordered list adalah jenis list yang tidak memiliki urutan khusus. Jenis ini biasanya digunakan untuk menampilkan daftar item yang sejajar, tanpa prioritas atau urutan tertentu.
	2. Ordered list
	Berbeda dengan unordered list, ordered list dipakai untuk menampilkan item dalam urutan tertentu. List jenis ini cocok untuk daftar langkah-langkah atau peringkat.
	3. Tiered list atau nested list
	Tiered list atau nested list adalah cara mengorganisasi list dalam list lain. List ini berguna untuk menyajikan informasi dalam beberapa tingkat.`,
	
	`Hyperlink yang sering di kenal dengan link yaitu menghubungkan antara satu dokument dengan dokumen yang lain pada HTML. Tujuan dari hyperlink ini membuat sebuah teks atau gambar yang ketika diklik akan di alihkan ke halaman tertentu yang sudah di tetapkan dalam penulisan hyerlink tersebut.
	Hyperlink sendiri ditulis dengan <a> atau yang kita kenal dengan anchor (jangkar). <a> ini selalu diikiti oleh atribut href, dimana didalam href (hypertext reference) ini lah yang akan diisikan alamat yang dituju ketika text atau gambar diklik.`,
	

	`Di HTML, elemen gambar (image) digunakan untuk menyisipkan gambar ke dalam halaman web. Elemen ini direpresentasikan dengan tag <img>, yang merupakan elemen kosong (self-closing tag) dan tidak memerlukan tag penutup.`,

	`Tabel merupakan struktur yang digunakan untuk menampilkan informasi dalam bentuk baris dan kolom. pada HTML, untuk pembuatan tabel menggunakan tag <table> utuk membuat table, <tr> untuk membuat baris dan <td> untuk membuat kolom.
	untuk lebih memahami pembuata table pada HTML berikut saya sajikan penjelasan tag yang terlibat dalam pembuatan table pada HTML.
	<table> merupakan tag pembuka dalam membuat sebuah table pada html, tanpa <table> ini, penggunaan <tr> dan <td> tidak bisa difungsikan dengan baik.
	<tr> atau dikenal dengan table row merupakan tag yang digunakan untuk membuat baris dalam table HTML
	<td> atau dikenal dengan table data merpakan tag yang digunakan untuk membuat kolom dalam baris dan untuk menampilkan data dalam table
	<th> untuk membuat table head atau bagian kepala pada table.`,

	`Table merging merupakan teknik menggabungkan dua atau lebih sel menjadi satu. Ada dua tipe penggabungan sel pada tabel HTML: Penggabungan kolom dengan colspan. Penggabungan baris dengan rowspan.`,

	`Form adalah elemen HTML yang berfungsi untuk meminta informasi dari user misalnya form login untuk meminta informasi username dan password dari user untuk proses login, form pendaftaran untuk meminta informasi detail tentang user agar bisa mendaftar, form input data untuk disimpan di database dan lain sebagainya.`,
	
	`Form adalah elemen HTML yang berfungsi untuk meminta informasi dari user misalnya form login untuk meminta informasi username dan password dari user untuk proses login, form pendaftaran untuk meminta informasi detail tentang user agar bisa mendaftar, form input data untuk disimpan di database dan lain sebagainya.`	
		
	]

	
	const list = [
			"https://www.youtube.com/embed/NBZ9Ro6UKV8?si=kqscVr-8nWFb_uo6",
			'https://www.youtube.com/embed/1NicaVOCXHA?si=PCeZy_EKWBkpfRz_',
			'https://www.youtube.com/embed/3sLSi9L5nWE?si=Kjxd_cy6bWdJVdJa',
			'https://www.youtube.com/embed/cUWBYzA6M-8?si=P0jx-GZBBjDy8Eoc',
			'https://www.youtube.com/embed/Dl_bIYBc9gM?si=Iee3dq-TwuJW3FcK',
			'https://www.youtube.com/embed/SMetRBdIh-8?si=ORmbxsvpZ6vv2as8',
			'https://www.youtube.com/embed/gLHEoeupIZs?si=-RNKH0tGUYOv_XPd',
			'https://www.youtube.com/embed/QIlBOI-hTuA?si=0R0RafmkKOV9lSne',
			'https://www.youtube.com/embed/yb_emYhY3Pc?si=CbHD_FMRWKQO9lpr',
			'https://www.youtube.com/embed/qs8G2XWf7Yk?si=cnhmfffOQNhsTcag',
			'https://www.youtube.com/embed/qs8G2XWf7Yk?si=xsD6Ayp_Vb-gs1D1',
			'https://www.youtube.com/embed/_CNkLKU-LoE?si=5NsmbsFgmZwBAyo-',
			'https://www.youtube.com/embed/_CNkLKU-LoE?si=wdH9XxR0sXhezqZq'
			
	]
	

	
	const listModulHtml = [
			"Muqodimmah",
			"Membuat File Html",
			"Code Editor",
			"Tag Elemen",
			"Paragraf",
			"Heading",
			"List",
			"Hyperlink",
			"Image",
			"Table",
			"Table Merging",
			"Form 1",
			"Form 2"
			
			
			
	]
	
	

	return (
		<>
			<div className="lg:px-24 px-3 w-full ">
				
					
				<div className="border-dashed border-x-[1.9px]">
					<div className="border-blue-600 border-l pl-5 absolute top-28">
						<h1 className="text-blue-600">HTML</h1>
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
			
			 <div className="border-dashed border-b-[1.9px] w-full">
				<div className="border-dashed border-x-[1.9px] w-full">
					<Marquees />
				</div>
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
								
								<Comment user_nama={user?.nama} modul="html" />
							
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