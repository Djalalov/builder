import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";
import project0 from "../public/project0.jpg";
import project8 from "../public/project8.jpg";
import project2 from "../public/project2.jpg";
import project3 from "../public/project3.jpg";
import project4 from "../public/project4.jpg";
import project5 from "../public/project5.jpg";

import Cards from "./Cards";

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
				<SwiperSlide>
					<Image
						alt="project0"
						src={project0}
						layout="responsive"
						width="100%"
						height={120}
						objectFit="cover"
						priority={true}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						alt="project1"
						src={project8}
						layout="responsive"
						width="100%"
						height={120}
						objectFit="cover"
						priority={true}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						alt="project2"
						src={project2}
						width="100%"
						height={120}
						layout="responsive"
						objectFit="cover"
						priority={true}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						alt="project3"
						src={project3}
						width="100%"
						height={120}
						layout="responsive"
						objectFit="cover"
						priority={true}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						alt="project4"
						src={project4}
						width="100%"
						height={120}
						layout="responsive"
						objectFit="cover"
						priority={true}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						alt="project5"
						src={project5}
						width="100%"
						height={120}
						layout="responsive"
						objectFit="cover"
						priority={true}
					/>
				</SwiperSlide>
			</Swiper>

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
	);
};

export default Hero;
