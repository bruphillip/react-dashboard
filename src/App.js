import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apollo/client';
import ReactRouter from './components/routing';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <ReactRouter />
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
