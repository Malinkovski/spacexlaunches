"use client";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support";
import apolloClient from "./apolloClient";
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={apolloClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

export default ApolloWrapper;
