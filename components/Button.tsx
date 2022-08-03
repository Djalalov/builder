import React from "react";
import useRipple from "use-ripple-hook";
import { BsBoxArrowInRight } from "react-icons/bs";

const Button: React.FC<{ title: string }> = ({ title }) => {
	const [ripple, event] = useRipple();

	return (
		<div className="w-full ">
			<button
				ref={ripple}
				onMouseDown={event}
				className="btnSecondary flex items-center justify-center text-black text-[17px]"
			>
				{title}
				<BsBoxArrowInRight className="ml-2 w-6 h-6 animate-pulse" />
			</button>
		</div>
	);
};

export default Button;
