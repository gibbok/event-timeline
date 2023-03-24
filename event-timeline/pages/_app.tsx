import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { init } from "@/configs/init";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ErrorBoundary } from "@/components/commons/ErrorBoundary/ErrorBoundary";
import { Layout } from "@/components/commons/Layout/Layout";

init();

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Layout title="Event Timeline">
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
