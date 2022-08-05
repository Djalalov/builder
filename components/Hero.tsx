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
// HeroImages
import HeroImages from "../public/HeroImages";
//Component
import Cards from "./Cards";
//import vid from "/vid.mp4";
import VideoPlayer from "./VideoPlayer";
const projects = [
	HeroImages.project0,
	HeroImages.project1,
	HeroImages.project2,
	HeroImages.project3,
	HeroImages.project4,
	HeroImages.project5,
	HeroImages.project6,
	HeroImages.project7,
	HeroImages.project8,
	HeroImages.project9,
	HeroImages.project10,
];

const Hero: React.FC = () => {
	SwiperCore.use([Autoplay]);
	return (
		<div id="about" className="container mx-auto md:px-20 relative h-[100vh]">
			<section>
				<VideoPlayer />
			</section>

			{/* <Swiper
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
			</Swiper> */}
			<div className="z-20 relative pt-52">
				<div>
					<h1 className="section__title">Lorem ipsum dolor earum.</h1>
					<p className="font-semibold py-2 px-4 text-base-100">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
						cuebitis ad velit nostrum tempore? Dignissimos earum delectus atque.
					</p>
				</div>
				<button className="btnPrimary">Batafsil</button>

				{/*=============== Statistics ==============*/}
			</div>
			<div className="z-20 relative pt-2 mt-2">
				<Cards />
			</div>
		</div>
	);
};

export default Hero;
