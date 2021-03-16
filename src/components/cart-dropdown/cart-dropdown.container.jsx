import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

import CartDropdown from './cart-dropdown.component';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CartDropdownContainer = () => {
  const {
    data: { cartItems },
  } = useQuery(GET_CART_ITEMS);
  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);

  return (
    <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden} />
  );
};

export default CartDropdownContainer;
