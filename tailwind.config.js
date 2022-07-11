module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#E09145",
					secondary: "#FCD9B8",
					bgMain: "#17181D",
					bgSecondary: "#292C35",
				},
			},
		],
	},
	plugins: [require("daisyui", "@tailwindcss/typography")],
	darkMode: "class",
};
