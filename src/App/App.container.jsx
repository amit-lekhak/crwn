import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

import App from './App';

const SET_CURRENT_USER = gql`
  mutation SetCurrentUser($user: User!) {
    setCurrentUser(user: $user) @client
  }
`;

const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;

const AppContainer = () => {
  const {
    data: { currentUser },
  } = useQuery(GET_CURRENT_USER);
  const [setCurrentUser] = useMutation(SET_CURRENT_USER);

  return (
    <App
      currentUser={currentUser}
      setCurrentUser={(user) => {
        setCurrentUser({ variables: { user } });
      }}
    />
  );
};

export default AppContainer;
