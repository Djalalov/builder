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
		<div id="about" className="container mx-auto md:px-20 relative">
			<section>
				<VideoPlayer />
			</section>
			{/* 	<video
				autoPlay
				muted
				loop
				playsInline
				className="z-0 absolute left-0 top-0 w-full h-1/2 object-cover"
			>
				<source
					src="https://res.cloudinary.com/builder9977/video/upload/v1659693356/vid_builder.mp4"
					type="video/mp4; codecs=hvc1"
				/>
			</video> */}
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
			<div className="z-20 relative pt-20">
				<div>
					<h1 className="section__title">Lorem ipsum dolor.</h1>
					<p className="font-semibold py-4 px-4 text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
						cuebitis ad velit nostrum tempore? Dignissimos earum delectus atque.
					</p>
				</div>
				<button className="btnPrimary">Batafsil</button>

				{/*=============== Statistics ==============*/}
				<div className="flex flex-col mt-6 pt-8">
					<Cards />
				</div>
			</div>
			{/* https://res.cloudinary.com/builder9977/image/upload/v1659692667/cld-sample-2.jpg */}
		</div>
	);
};

export default Hero;
