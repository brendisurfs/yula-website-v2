import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

let cache = new InMemoryCache();

// APOLLO CLIENT
let client = new ApolloClient({
    cache,
    uri: "uri goes here",
    name: "yula-website",
    version: "1.2",
    queryDeduplication: false,
    headers: {
        Authorization: "Bearer API_TOKEN_HERE",
    },

    defaultOptions: {
        watchQuery: {
            fetchPolicy: "cache-and-network",
        },
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
export default MyApp;
