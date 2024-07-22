import type { AppProps } from "next/app";

import dynamic from "next/dynamic";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Plus_Jakarta_Sans } from "next/font/google";

import { queryClient } from "@/components/query-client";
import { toasterProps } from "@/components/toast";

import "@/styles/globals.css";

const Toaster = dynamic(
	async () => {
		const { Toaster } = await import("react-hot-toast");
		return { default: Toaster };
	},
	{ ssr: false }
);

const plusJakartsSansFont = Plus_Jakarta_Sans({
	subsets: ["latin"],
	fallback: ["montserrat"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<main className={plusJakartsSansFont.className}>
				<Toaster {...toasterProps} />
				<Component {...pageProps} />
			</main>
		</QueryClientProvider>
	);
}
