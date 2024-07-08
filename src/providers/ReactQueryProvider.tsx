"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export interface IReactQueryProvider {
  children?: React.ReactNode;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      refetchOnMount: false,
      retry: 1,
      retryOnMount: false,
      staleTime: 0,
    },
  },
});

export const ReactQueryProvider: React.FC<IReactQueryProvider> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
