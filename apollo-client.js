import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
        uri: "https://api.react-finland.fi/graphql",
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;
