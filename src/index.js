import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  GET_CART_HIDDEN,
  GET_CART_ITEMS,
  GET_CART_TOTAL,
  GET_CURRENT_USER,
  GET_ITEM_COUNT,
} from './graphql/resolvers';

import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

import './index.css';
import { default as App } from './App/App.container';
import { resolvers, typeDefs } from './graphql/resolvers';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://crwn-clothing.com',
  cache,
  typeDefs,
  resolvers,
});

client.writeQuery({
  query: GET_CART_HIDDEN,
  data: {
    cartHidden: true,
  },
});

client.writeQuery({
  query: GET_CART_ITEMS,
  data: {
    cartItems: [],
  },
});

client.writeQuery({
  query: GET_ITEM_COUNT,
  data: {
    itemCount: 0,
  },
});

client.writeQuery({
  query: GET_CART_TOTAL,
  data: {
    cartTotal: 0,
  },
});

client.writeQuery({
  query: GET_CURRENT_USER,
  data: {
    currentUser: null,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
