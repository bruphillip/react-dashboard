import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';
import { keyStorage } from '../keyStorage';

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjsdecjhs1ope0145gmnqfv52'
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${window.localStorage.getItem(keyStorage.auth)}`
    }
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
});

export default client;
