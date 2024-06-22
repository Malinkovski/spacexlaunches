import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default client;
