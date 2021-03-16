import React from 'react';

import { gql, useQuery } from '@apollo/client';

import CheckoutPage from './checkout.component';

const GET_CART_ITEMS_AND_TOTAL = gql`
  {
    cartItems @client
    cartTotal @client
  }
`;

const CheckoutPageContainer = () => {
  const {
    data: { cartItems, cartTotal },
  } = useQuery(GET_CART_ITEMS_AND_TOTAL);

  return <CheckoutPage cartItems={cartItems} total={cartTotal} />;
};

export default CheckoutPageContainer;
