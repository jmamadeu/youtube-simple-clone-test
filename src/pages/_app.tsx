import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { AppLayout } from "../components/app-layout";
import { queryClient } from "../services/query-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
