import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { initialize } from "@/configs/initializationLibs";
import { Layout } from "@/components/commons/Layout/Layout";
import { ErrorBoundary } from "@/components/commons/ErrorBoundary/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProps } from "next/app";

initialize();

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
