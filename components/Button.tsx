import React from "react";
import useRipple from "use-ripple-hook";
import { BsBoxArrowInRight } from "react-icons/bs";

const Button = ({ title }) => {
	const [ripple, event] = useRipple();

	return (
		<div className="w-full">
			<button
				ref={ripple}
				onMouseDown={event}
				className="btnSecondary flex items-center justify-center dark:text-[#17181D]"
			>
				{title}
				<BsBoxArrowInRight className="ml-2 w-6 h-6" />
			</button>
		</div>
	);
};

export default Button;
