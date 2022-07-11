import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";
import project0 from "../public/project0.jpg";
import project1 from "../public/project1.jpg";
import project2 from "../public/project2.jpg";
import project3 from "../public/project3.jpg";
import project4 from "../public/project4.jpg";
import project5 from "../public/project5.jpg";

const Hero = () => {
	SwiperCore.use([Autoplay]);
	return (
		<section className="">
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
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							alt="project1"
							src={project1}
							layout="responsive"
							width="100%"
							height={120}
							objectFit="cover"
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
						/>
					</SwiperSlide>
				</Swiper>
			</div>
			<div className="">
				<h1 className="text-4xl font-bold pt-4 px-4">
					Loremum ip lor sitwe amet elit
				</h1>
				<p className="font-bold py-4 px-4 text-gray-400">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
					cuebitis ad velit nostrum tempore? Dignissimos earum delectus atque.
				</p>
			</div>
			<button className="btn btn-active btn-sm mx-4 btn-primary dark:bg-primary text-white">
				Batafsil
			</button>
		</section>
	);
};

export default Hero;
