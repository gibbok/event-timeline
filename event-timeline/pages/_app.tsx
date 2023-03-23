import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { initApp } from "@/configs/init";
import type { AppProps } from "next/app";

initApp();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
