"use client"

import { QueryClient, QueryClientProvider } from 'react-query';

const QueryProvider = ({ children }) => {
  // Create a client
  const queryClient = new QueryClient();
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
