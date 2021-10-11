import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000',
  cache: new InMemoryCache(),
});

export default function ApolloProvider(props: any) {
  return <Provider client={client} {...props} />;
}
