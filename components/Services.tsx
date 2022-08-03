import React, { ReactElement } from "react";
import { TiTick } from "react-icons/ti";

type Props = {
	title: string;
};
const Service = props => {
	return (
		<div className="flex">
			<TiTick className="w-7 h-7 text-primary" />
			<p className="translate-y-1 text-base-100 font-semibold">{props.title}</p>
		</div>
	);
};
const Services: React.FC = () => {
	return (
		<div>
			<p className="title super font-extrabold">Xizmatlar</p>
			<h1 className="text-4xl font-bold px-4 dark:text-zinc-300">
				Nulla perferendis doloribus eius quod?
			</h1>
			<p className="font-semibold py-4 px-4 text-gray-700 dark:text-zinc-400/80">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
				cuebitis ad velit nostrum tempore? Dignissimos earum delectus atque.
			</p>
			<div className="flex flex-wrap items-center p-4 gap-4 justify-center">
				<div>
					<Service title="Interyer dizayn" />
					<Service title="Loyiha konsultatsiyasi" />
				</div>
				<div>
					<Service title="Loyiha chizish" />
					<Service title="Qurilish" />
				</div>
			</div>
		</div>
	);
};

export default Services;
