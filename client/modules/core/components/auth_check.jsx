import React from 'react';

const AuthCheck = ({ loggedIn, children, unauthenticatedMesage }) => {
  let errorComponent = unauthenticatedMesage || DefaultUnauthenticatedMessage;

  return (
    <div>
      {loggedIn ? children : errorComponent}
    </div>
  );
};

const DefaultUnauthenticatedMessage = (
  <div>
    Please log in to view this page.
  </div>
);

export default AuthCheck;
