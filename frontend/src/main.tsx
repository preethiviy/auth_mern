import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme/index.ts";
import queryClient from "./config/queryClient.ts";

createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <ReactQueryDevtools position="bottom" initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  </ChakraProvider>
)
