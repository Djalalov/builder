import React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const SwapIcon = () => {
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
				<SunIcon
					className="swap-on w-10 h-10 text-yellow-500 "
					role="button"
					onClick={() => setTheme("light")}
				/>
			) : (
				<MoonIcon
					className="swap-off w-10 h-10 text-gray-900 "
					role="button"
					onClick={() => setTheme("dark")}
				/>
			)}
		</>
	);
};

export default SwapIcon;
