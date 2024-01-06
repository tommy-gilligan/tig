import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-token": process.env.GRAPHQL_TOKEN,
    },
  };
});

export const { getClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: process.env.GRAPHQL_URI,
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
});
