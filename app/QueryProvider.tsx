"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: React.ReactNode;
};

function QueryProviders({ children }: Props) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  );
  client.invalidateQueries({
    queryKey: ["me"],
  });

  return (
    <QueryClientProvider client={client}>
      {children}
      {Boolean(process.env.IS_PRODUCTION) ? null : (
        <ReactQueryDevtools position="bottom" initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}

export default QueryProviders;
