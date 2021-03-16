import React from 'react';
import { gql, useQuery } from '@apollo/client';

import Header from './header.component';

const GET_CLIENT_PROPERTIES = gql`
  {
    cartHidden @client
    currentUser @client
  }
`;

const HeaderContainer = () => {
  const {
    data: { cartHidden, currentUser },
  } = useQuery(GET_CLIENT_PROPERTIES);
  return <Header hidden={cartHidden} currentUser={currentUser} />;
};

export default HeaderContainer;
