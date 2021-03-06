import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "swiper/css/bundle";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
