import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { initialize } from "@/configs/initializationLibs";
import { Layout } from "@/components/commons/Layout/Layout";
import { ErrorBoundary } from "@/components/commons/ErrorBoundary/ErrorBoundary";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { AppProps } from "next/app";
import React from "react";

initialize();

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Layout title="Event Timeline">
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </Layout>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
