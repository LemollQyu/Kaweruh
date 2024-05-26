"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ContentSwap from "./content-swap"
import FrontEnd from "../grafik/frontend"
import BackEnd from "../grafik/backend"
import FullStack from "../grafik/fullstack"
import DevOps from "../grafik/devops"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';


export default function Swape(){
	 const swiperRef = useRef();

  return (
    <div>
      <Swiper
		className="border-b-[1.9px] border-dashed w-full h-[450px] md:h-[300px]"
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
			
			
				<ContentSwap developer="Front End"  linkStudy="https://roadmap.sh/frontend" textStartup="User interface and interaction in web development." startup="Roadmap.sh" logo="/roadmap.svg" altStartup="Web Startup" grafik=<FrontEnd /> />
			
		
		</SwiperSlide>
        <SwiperSlide>
				<ContentSwap developer="Beck End" linkStudy="https://roadmap.sh/backend" textStartup="Server-side logic and database management in web development." startup="Roadmap.sh" logo="/roadmap.svg" altStartup="Web Startup" grafik=<BackEnd /> />
		</SwiperSlide>
		<SwiperSlide>
			<ContentSwap developer="Fullstack"  linkStudy="https://roadmap.sh/fullstack" textStartup="Both front end and back end development." startup="Roadmap.sh" logo="/roadmap.svg" altStartup="Web Startup" grafik=<FullStack /> />
		</SwiperSlide>
        <SwiperSlide>
			<ContentSwap developer="DevOps"  linkStudy="https://roadmap.sh/devops" textStartup="Development and operations for continuous delivery.." startup="Roadmap.sh" logo="/roadmap.svg" altStartup="Web Startup" grafik=<DevOps /> />	
		</SwiperSlide>
      </Swiper>
	  
	  
	  
	  
      <div className="flex justify-end w-full">
		<div  className="flex gap-5  px-5 items-center mt-5">
			<button className="border-dashed border rounded-lg p-2" onClick={() => swiperRef.current?.slidePrev()}>
				<svg className="w-[24px] h-[24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path className="dark:stroke-white stroke-black" d="M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</button>
			<button className="border-dashed border rounded-lg p-2" onClick={() => swiperRef.current?.slideNext()}>
				
				<svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path className="dark:stroke-white stroke-black" d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</button>
		</div>
      </div>
	  
    </div>
  );

}