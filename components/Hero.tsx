import React from "react";
import Image from "next/image";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// required modules for Swiper
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
// Project hero Images
import images from "../public/images";
//Component
import Cards from "./Cards";

const projects = [
	images.project0,
	images.project1,
	images.project2,
	images.project3,
	images.project4,
	images.project5,
	images.project6,
	images.project7,
	images.project8,
	images.project9,
];

const Hero: React.FC = () => {
	SwiperCore.use([Autoplay]);
	return (
		<div className="container mx-auto md:px-20">
			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				loop={true}
				slidesPerView={1}
				modules={[Pagination]}
				autoplay={{
					delay: 3000,
				}}
				className="mySwiper"
			>
				{projects.map((project, index) => (
					<SwiperSlide key={index}>
						<Image
							width={400}
							height={500}
							alt="projects"
							src={project}
							layout="responsive"
							objectFit="cover"
							priority={true}
							quality={100}
							className="scale-100 transition-all ease-in-out duration-300 hover:scale-150 md:hover:scale-125"
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div>
				<div className="">
					<h1 className="section__title">Lorem ipsum dolor.</h1>
					<p className="font-semibold py-4 px-4 text-gray-700 dark:text-zinc-400/80">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
						cuebitis ad velit nostrum tempore? Dignissimos earum delectus atque.
					</p>
				</div>
				<button className="btnPrimary">Batafsil</button>

				{/*=============== Statistics ==============*/}
				<div className="flex flex-col mt-6">
					<Cards />
				</div>
			</div>
		</div>
	);
};

export default Hero;

////////////////////////////////////////////
/* 		<Swiper
				zoom={true}
				pagination={{
					clickable: true,
				}}
				modules={[Zoom, Pagination]}
				className="mySwiper"
				loop={true}
				slidesPerView={1}
				autoplay={{
					delay: 3000,
				}}
			>
				<SwiperSlide>
					<div className="swiper-zoom-container">
						<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper-zoom-container">
						<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper-zoom-container">
						<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper-zoom-container">
						<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper-zoom-container">
						<img src="https://swiperjs.com/demos/images/nature-7.jpg" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper-zoom-container">
						<img src="https://swiperjs.com/demos/images/nature-8.jpg" />
					</div>
				</SwiperSlide>
			</Swiper> */
