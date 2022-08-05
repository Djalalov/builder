import React, { ReactNode } from "react";
import Image from "next/image";
import { ImLocation2, ImClock } from "react-icons/im";
import { FaRulerCombined } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// required modules for Swiper
import { Pagination } from "swiper";

interface Props {
	image: any;
	title: string;
	location: string;
	metrics: string;
	duration: string;
}

const ProjectCard: React.FC<Props> = props => {
	/* const [showModal, setShowModal] = React.useState<Boolean>(false);

	function getCheckBox() {
		const modal = document.getElementById(
			"checkBox"
		) as HTMLInputElement | null;
		modal.checked = false;
		console.log(modal.checked);
	} */

	return (
		<>
			<div className="card card-compact flex rounded-xl m-4 bg-[#292C35] dark:bg-[#292C35]/40 shadow-lg">
				<div className="overflow-hidden touch-auto">
					<Swiper
						pagination={{
							dynamicBullets: true,
						}}
						loop={true}
						slidesPerView={1}
						modules={[Pagination]}
						className="mySwiper"
					>
						<SwiperSlide>
							<Image
								width={400}
								height={400}
								alt="projects"
								src={props.image}
								layout="responsive"
								placeholder="blur"
								objectFit="cover"
								priority={true}
								quality={100}
								className="scale-100 transition-all ease-in-out duration-300 hover:scale-150 md:hover:scale-125"
							/>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="card-body bg-white dark:text-base-100 dark:bg-transparent dark:to-[#17181D]">
					<h2 className="card-title ">
						<BsBuilding className="text-primary w-6 h-6" />
						{props.title}
					</h2>
					<div className="flex items-center justify-between my-2 flex-wrap">
						<div className="flex">
							<ImLocation2 className="w-5 h-5 s" />
							<p className="mx-2 text-base dark:text-gray-400">
								{props.location}
							</p>
						</div>
						<div className="flex">
							<FaRulerCombined className="w-5 h-5" />
							<p className="mx-2 text-base dark:text-gray-400">
								{props.metrics}
							</p>
						</div>
						<div className="flex">
							<ImClock className="w-5 h-5" />
							<p className="mx-2 text-base dark:text-gray-400">
								{props.duration}
							</p>
						</div>
					</div>
				</div>
				<div className="card-actions text-primary-content">
					<Button title="Batafsil" />
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
