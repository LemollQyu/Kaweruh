"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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
		className="border-b-[1.9px] border-dashed w-full h-[250px] md:h-[300px]"
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
			<div className="w-full h-full pt-10 px-5">
				<h1 className="font-Ubuntu text-l">Front End</h1>
				
				<div className="flex gap-2 items-center border">
					<svg className="w-[40px] h-[40px]" viewBox="0 0 283 283" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 39C0 17.4609 17.4609 0 39 0H244C265.539 0 283 17.4609 283 39V244C283 265.539 265.539 283 244 283H39C17.4609 283 0 265.539 0 244V39Z" fill="black"></path>
						<path d="M121.215 210.72C119.348 211.28 116.361 211.84 112.255 212.4C108.335 212.96 104.228 213.24 99.9347 213.24C95.828 213.24 92.0947 212.96 88.7347 212.4C85.5614 211.84 82.8547 210.72 80.6147 209.04C78.3747 207.36 76.6014 205.12 75.2947 202.32C74.1747 199.333 73.6147 195.507 73.6147 190.84V106.84C73.6147 102.547 74.3614 98.9067 75.8547 95.92C77.5347 92.7467 79.868 89.9467 82.8547 87.52C85.8414 85.0933 89.4814 82.9467 93.7747 81.08C98.2547 79.0267 103.015 77.2533 108.055 75.76C113.095 74.2667 118.321 73.1467 123.735 72.4C129.148 71.4667 134.561 71 139.975 71C148.935 71 156.028 72.7733 161.255 76.32C166.481 79.68 169.095 85.28 169.095 93.12C169.095 95.7333 168.721 98.3467 167.975 100.96C167.228 103.387 166.295 105.627 165.175 107.68C161.255 107.68 157.241 107.867 153.135 108.24C149.028 108.613 145.015 109.173 141.095 109.92C137.175 110.667 133.441 111.507 129.895 112.44C126.535 113.187 123.641 114.12 121.215 115.24V210.72ZM166.387 188.32C166.387 180.48 168.813 173.947 173.667 168.72C178.52 163.493 185.147 160.88 193.547 160.88C201.947 160.88 208.573 163.493 213.427 168.72C218.28 173.947 220.707 180.48 220.707 188.32C220.707 196.16 218.28 202.693 213.427 207.92C208.573 213.147 201.947 215.76 193.547 215.76C185.147 215.76 178.52 213.147 173.667 207.92C168.813 202.693 166.387 196.16 166.387 188.32Z" fill="white"></path>
					</svg>
					<div className="flex flex-col">
						<h1 className="font-Ubuntu text-lg">Roadmap.sh</h1>
						<p className="font-Ubuntu text-gray-200 text-sm">Web startup</p>
					</div>
				</div>
			</div>	
		</SwiperSlide>
        <SwiperSlide>
			<div className="w-full h-full pt-10">
				<p className="text-center"> Slide 2 </p>
			</div>	
		</SwiperSlide>
		<SwiperSlide>
			<div className="w-full h-full pt-10">
				<p className="text-center"> Slide 3 </p>
			</div>	
		</SwiperSlide>
        <SwiperSlide>
			<div className="w-full h-full pt-10">
				<p className="text-center"> Slide 4 </p>
			</div>	
		</SwiperSlide>
      </Swiper>
	  
	  
	  
	  
      <div className="flex justify-end w-full">
		<div  className="flex gap-5  px-5 items-center mt-5">
			<button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
			<button onClick={() => swiperRef.current?.slideNext()}>Next</button>
		</div>
      </div>
	  
    </div>
  );

}