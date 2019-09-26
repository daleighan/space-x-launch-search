import React from 'react';
import TopLevel from './TopLevel';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <TopLevel />
    </ApolloProvider>
  );
}

export default App;
