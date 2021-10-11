import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://9rvv3.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

export default function ApolloProvider(props: any) {
  return <Provider client={client} {...props} />;
}
