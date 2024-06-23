import { ApolloLink, HttpLink } from "@apollo/client";
import {
    ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
function apolloClient() {
  const httpLink = new HttpLink({
      uri: "https://spacex-production.up.railway.app/",
  });
  return new ApolloClient({
    cache: new InMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export default apolloClient;