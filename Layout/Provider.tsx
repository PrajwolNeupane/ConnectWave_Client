"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as StateProvider } from "react-redux";
import store from "@/features/store";

export default function QueryProvider({ Children }: { Children: JSX.Element }) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <StateProvider store={store}>{Children}</StateProvider>
    </QueryClientProvider>
  );
}
