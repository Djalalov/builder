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
import { IoEyeOutline } from "react-icons/io5";
import { ImInfo } from "react-icons/im";
import Card from "./Card";
import { stat } from "fs";

const Hero = () => {
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
						priority
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
						priority
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
						priority
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
						priority
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
						priority
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
						priority
					/>
				</SwiperSlide>
			</Swiper>

			<div className="">
				<h1 className="text-4xl font-bold pt-4 px-4 dark:text-zinc-300">
					Loremum ip lor sitwe amet elit
				</h1>
				<p className="font-semibold py-4 px-4 text-gray-700 dark:text-zinc-400/80">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
					cuebitis ad velit nostrum tempore? Dignissimos earum delectus atque.
				</p>
			</div>
			<button className="btn btn-active w-1/4 btn-sm mx-4 btn-primary dark:bg-primary text-white">
				Batafsil
			</button>

			{/*=============== Statistics ==============*/}
			<div className="flex flex-col mt-6">
				<Card
					stat={30}
					description={"Dizaynerlik va qurilish loyihalar bajarildi"}
					icon1={<IoEyeOutline className="text-2xl text-zinc-400" />}
					icon2={<ImInfo className="text-xl" />}
				/>
				<Card
					stat={45}
					description={"Mahalliy hamda xalqaro mijozlar"}
					icon1={<IoEyeOutline className="text-2xl text-zinc-400" />}
					icon2={<ImInfo className="text-xl" />}
				/>
				<Card
					stat={10}
					description={"Yillik professional tajriba"}
					icon1={<IoEyeOutline className="text-2xl text-zinc-400" />}
					icon2={<ImInfo className="text-xl" />}
				/>
			</div>
		</div>
	);
};

export default Hero;
