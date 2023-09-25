"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as StateProvider } from "react-redux";
import store from "@/features/store";
const client = new QueryClient();

export default function QueryProvider({ Children }: { Children: JSX.Element }) {
  return (
    <QueryClientProvider client={client}>
      <StateProvider store={store}>{Children}</StateProvider>
    </QueryClientProvider>
  );
}
