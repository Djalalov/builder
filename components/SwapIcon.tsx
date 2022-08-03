import React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const SwapIcon: React.FC = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	const currentTheme = theme === "system" ? systemTheme : theme;

	if (!mounted) return null;

	return (
		<>
			{currentTheme === "dark" ? (
				<div className="swap-rotate ">
					<SunIcon
						className="swap-on w-7 h-7 text-primary"
						role="button"
						onClick={() => setTheme("light")}
					/>
				</div>
			) : (
				<div className="swap-rotate">
					<MoonIcon
						className="swap-off w-7 h-7 text-base-100"
						role="button"
						onClick={() => setTheme("dark")}
					/>
				</div>
			)}
		</>
	);
};

export default SwapIcon;
