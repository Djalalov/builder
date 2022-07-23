module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			transitionProperty: {
				left: "left",
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#E09145",
					secondary: "#FCD9B8",
					main: "#17181D",
					bgSecondary: "#2c2b2b",
				},
			},
		],
	},
	plugins: [
		require("daisyui", "@tailwindcss/typography", "@tailwindcss/aspect-ratio"),
	],
	darkMode: "class",
};
